"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { AlertTriangle, Phone } from "lucide-react"

export function CrisisSupport() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="gap-2 bg-red-600 hover:bg-red-700 text-white">
            <AlertTriangle className="h-4 w-4" />
            Crisis Support
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Crisis Support Resources</DialogTitle>
            <DialogDescription>
              If you're experiencing a mental health crisis or emergency, please use these resources for immediate help.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold">National Suicide Prevention Lifeline</h3>
              </div>
              <p className="mt-2 text-sm">24/7, free and confidential support</p>
              <p className="mt-1 text-lg font-bold">988 or 1-800-273-8255</p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold">Crisis Text Line</h3>
              </div>
              <p className="mt-2 text-sm">Text HOME to 741741 to connect with a Crisis Counselor</p>
              <p className="mt-1 font-medium">Available 24/7 in the USA</p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="font-semibold">Emergency Services</h3>
              <p className="mt-2 text-sm">
                If you or someone else is in immediate danger, please call emergency services.
              </p>
              <p className="mt-1 text-lg font-bold">911</p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

