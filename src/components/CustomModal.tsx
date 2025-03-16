import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ModalProps {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  actions?: ReactNode;
  size?: string; // Accepts "w-[800px]", "w-[90vw]", etc.
}

export function Modal({
  trigger,
  title,
  description,
  children,
  open,
  setOpen,
  actions,
  size = "w-[500px]", // Default width
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen} modal>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={`${size} !max-w-[100%] max-h-[80vh] flex flex-col`}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {/* Fixed Header */}
        <DialogHeader className="flex px-4 border-b bg-white">
          <div className="flex justify-between items-center mb-3">
            <div>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen?.(false)}
              className="cursor-pointer"
            >
              <XIcon className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>

        {/* Scrollable Body when needed */}
        <div className="overflow-y-auto max-h-[60vh]">{children}</div>

        {/* Fixed Footer */}
        {actions && (
          <DialogFooter className="p-4 border-t bg-white">
            {actions}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
