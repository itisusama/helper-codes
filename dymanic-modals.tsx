// Main Modal Page
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/Modal"

export default function ModalPage() {
  const [openKey, setOpenKey] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {/* Buttons at the top */}
      <div className="flex gap-4">
        <Button variant="outline" onClick={() => setOpenKey("user")}>
          User Modal
        </Button>
      </div>

      {/* Modals */}
      <Modal modalKey="user" openKey={openKey} setOpenKey={setOpenKey} />
    </div>
  )
}

// Modal Component
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ModalContents } from "./ModalContents"

interface ModalProps {
  modalKey: string
  openKey: string | null
  setOpenKey: (key: string | null) => void
}

export function Modal({ modalKey, openKey, setOpenKey }: ModalProps) {
  const isOpen = openKey === modalKey
  const content = ModalContents[modalKey] || <p>No content found.</p>

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setOpenKey(open ? modalKey : null)}>
      <DialogContent className="sm:max-w-[425px]">{content}</DialogContent>
    </Dialog>
  )
}

// Modal Content (Change it to components)
import React from "react"

export const ModalContents: Record<string, React.ReactNode> = {
  user: <p>User Modal</p>,
  product: <p>Product Modal</p>,
  three: <p>Maybe Modal Three someday</p>,
}
