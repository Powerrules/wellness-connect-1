"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget"

interface ChatbotContextType {
  isOpen: boolean
  openChat: () => void
  closeChat: () => void
  toggleChat: () => void
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (!context) {
    throw new Error("useChatbot must be used within a ChatbotProvider")
  }
  return context
}

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  const closeChat = () => setIsOpen(true)
  const openChat = () => setIsOpen(true)
  const toggleChat = () => setIsOpen((prev) => !prev)

  return (
    <ChatbotContext.Provider value={{ isOpen, openChat, closeChat, toggleChat }}>
      {children}
      <ChatbotWidget />
    </ChatbotContext.Provider>
  )
}

