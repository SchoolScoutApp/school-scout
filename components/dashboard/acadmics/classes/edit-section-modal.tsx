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

interface EditSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEditSection: (sectionId: string, newName: string) => void;
  section: { id: string; name: string; classId: string } | null;
}

export function EditSectionModal({
  isOpen,
  onClose,
  onEditSection,
  section,
}: EditSectionModalProps) {
  const [sectionName, setSectionName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (section) {
      setSectionName(section.name);
      setError("");
    }
  }, [section]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sectionName.trim() && section) {
      onEditSection(section.id, sectionName.trim());
      onClose();
    } else {
      setError("Section name cannot be empty");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Section</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="sectionName" className="text-right">
                Section Name
              </Label>
              <Input
                id="sectionName"
                value={sectionName}
                onChange={(e) => {
                  setSectionName(e.target.value);
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
