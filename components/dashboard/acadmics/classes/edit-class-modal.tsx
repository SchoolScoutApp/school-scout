"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditClassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEditClass: (classId: string, newName: string) => void;
  classItem: { id: string; name: string } | null;
}

export function EditClassModal({
  isOpen,
  onClose,
  onEditClass,
  classItem,
}: EditClassModalProps) {
  const [className, setClassName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (classItem) {
      setClassName(classItem.name);
      setError("");
    }
  }, [classItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (className.trim() && classItem) {
      onEditClass(classItem.id, className.trim());
      onClose();
    } else {
      setError("Class name cannot be empty");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Class</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="className" className="text-right">
                Class Name
              </Label>
              <Input
                id="className"
                value={className}
                onChange={(e) => {
                  setClassName(e.target.value);
                  setError("");
                }}
                className="col-span-3"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
