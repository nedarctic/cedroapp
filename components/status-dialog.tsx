import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";

type StatusDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void
    message: string;
    error?: boolean;
}

export function StatusDialog({ open, onOpenChange, message, error }: StatusDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{error ? <p className="font-bold text-red-600">Error</p> : <p className="font-bold text-green-600">Success</p>}</DialogTitle>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
                <div className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button">
                            Close
                        </Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}
