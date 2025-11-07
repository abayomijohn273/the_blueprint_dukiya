"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface RegistrationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl rounded-3xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-xl font-display font-medium" style={{ color: "#002278" }}>
            Register for The Blueprint
          </DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <iframe
            aria-label="The Blueprint"
            frameBorder="0"
            style={{
              height: "550px",
              width: "100%",
              border: "none",
              borderRadius: "8px",
            }}
            src="https://forms.zohopublic.com/adminduki1/form/TheBlueprint/formperma/HmlNg-VD8giWGCRxd6QLkVYKlgDQcQbrsjZ5nFCRvck"
            title="The Blueprint Registration Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default RegistrationModal

