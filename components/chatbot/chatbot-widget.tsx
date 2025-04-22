"use client"

import { useRef, useEffect, useState, useTransition } from "react"
import {v4 as uuidv4} from "uuid";
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"
import { useChatbot } from "@/components/chatbot/chatbot-provider"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import sendMessageAction from "@/actions/message.action"

export function ChatbotWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isPending, startTransition] = useTransition(); //useTransition hook

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: uuidv4(),
      text: newMessage,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    startTransition(async () => {
      try {
        const botResponse = await sendMessageAction(
          newMessage
        ); // Call the server action
        const botMessage: Message = {
          id: uuidv4(),
          text: botResponse,
          sender: "bot",
        };
        setMessages((prevMessages) => [
          ...prevMessages,
          botMessage,
        ]);
      } catch (error) {
        console.error(
          "Error calling server action:",
          error
        );
        const errorMessage = {
          id: uuidv4(),
          text: "Error processing message",
          sender: "bot",
        };
        setMessages((prevMessages: any) => [
          ...prevMessages,
          errorMessage,
        ]);
      }
    });
  };

  useEffect(() => {
    const initRes = async () => {
      const initRes = await sendMessageAction(
        "Just give a brief introduction about yourself. you are a mental health assistant and i want you to act like it. from this moment onwards whatever inputs or queries you get, answer it accordingly."
      );
      setMessages([
        { id: uuidv4(), text: initRes, sender: "bot" },
      ]);
    };
    initRes();
  }, []);


  // --end of bot logic--
  const { isOpen, toggleChat, closeChat } = useChatbot()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messagesEndRef]) //Corrected dependency

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen, inputRef])

  if (isOpen) {
    return (
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 rounded-full h-14 w-14 p-0 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Open chat</span>
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-full max-w-[400px] shadow-xl">
      <CardHeader className="flex flex-row items-center border-b p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/bot-avatar.png" alt="AI Assistant" />
            <AvatarFallback>
              <Bot className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg">Mental Health Assistant</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={closeChat}>
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>
      <ScrollArea className="h-[350px]">
        <CardContent className="p-4">
          <div className="space-y-4">
          {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-sm p-3 ${
                    message.sender === "user"
                      ? "bg-white border border-gray-400 text-black"
                      : "bg-[#F8F9FB] border border-gray-400 text-gray-700 border-black"
                  }`}
                >
                  <ReactMarkdown>
                    {message.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isPending && (
              <div className="flex max-w-[80%] flex-col gap-2 rounded-lg bg-muted px-3 py-2 text-sm break-words">
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </CardContent>
      </ScrollArea>
      <CardFooter className="border-t p-4">
        <div className="flex w-full items-center space-x-2">
          <Input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
            ref={inputRef}
            placeholder="What's in your mind?"
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            className="flex-1"
          />
          <Button onClick={sendMessage} type="submit" size="icon" disabled={isPending}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

