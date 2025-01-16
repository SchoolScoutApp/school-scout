"use client";

import { useState } from "react";
import { ClassList } from "./class-list";
import { SectionList } from "./section-list";
import { AddClassModal } from "./add-class-modal";
import { AddSectionModal } from "./add-section-modal";
import { EditClassModal } from "./edit-class-modal";
import { EditSectionModal } from "./edit-section-modal";
import { DeleteConfirmationDialog } from "./delete-confirmation-dialog";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
  classes as classList,
  sections as sectionList,
} from "@/data/user-form";

interface Class {
  id: string;
  name: string;
}

interface Section {
  id: string;
  name: string;
  classId: string;
}

export function ClassSectionManager() {
  const [classes, setClasses] = useState<Class[]>(classList);
  const [sections, setSections] = useState<Section[]>(sectionList);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isAddSectionModalOpen, setIsAddSectionModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState<Class | null>(null);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    type: "class" | "section";
    id: string;
    name: string;
  } | null>(null);

  const handleAddClass = (className: string) => {
    if (classes.some((c) => c.name.toLowerCase() === className.toLowerCase())) {
      toast({
        title: "Error",
        description: "A class with this name already exists.",
        variant: "destructive",
      });
      return;
    }
    const newClass: Class = {
      id: (classes.length + 1).toString(),
      name: className,
    };
    setClasses([...classes, newClass]);
    setIsAddClassModalOpen(false);
    toast({
      title: "Success",
      description: `Class "${className}" has been added.`,
    });
  };

  const handleAddSection = (sectionName: string) => {
    if (selectedClass) {
      if (
        sections.some(
          (s) =>
            s.classId === selectedClass.id &&
            s.name.toLowerCase() === sectionName.toLowerCase()
        )
      ) {
        toast({
          title: "Error",
          description:
            "A section with this name already exists in the selected class.",
          variant: "destructive",
        });
        return;
      }
      const newSection: Section = {
        id: (sections.length + 1).toString(),
        name: sectionName,
        classId: selectedClass.id,
      };
      setSections([...sections, newSection]);
      setIsAddSectionModalOpen(false);
      toast({
        title: "Success",
        description: `Section "${sectionName}" has been added to ${selectedClass.name}.`,
      });
    }
  };

  const handleEditClass = (classId: string, newName: string) => {
    if (
      classes.some(
        (c) =>
          c.id !== classId && c.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      toast({
        title: "Error",
        description: "A class with this name already exists.",
        variant: "destructive",
      });
      return;
    }
    setClasses(
      classes.map((c) => (c.id === classId ? { ...c, name: newName } : c))
    );
    setEditingClass(null);
    toast({
      title: "Success",
      description: `Class name has been updated to "${newName}".`,
    });
  };

  const handleEditSection = (sectionId: string, newName: string) => {
    const sectionToEdit = sections.find((s) => s.id === sectionId);
    if (
      sectionToEdit &&
      sections.some(
        (s) =>
          s.id !== sectionId &&
          s.classId === sectionToEdit.classId &&
          s.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      toast({
        title: "Error",
        description: "A section with this name already exists in this class.",
        variant: "destructive",
      });
      return;
    }
    setSections(
      sections.map((s) => (s.id === sectionId ? { ...s, name: newName } : s))
    );
    setEditingSection(null);
    toast({
      title: "Success",
      description: `Section name has been updated to "${newName}".`,
    });
  };

  const handleDeleteClass = (classId: string, className: string) => {
    setDeleteConfirmation({
      isOpen: true,
      type: "class",
      id: classId,
      name: className,
    });
  };

  const handleDeleteSection = (sectionId: string, sectionName: string) => {
    setDeleteConfirmation({
      isOpen: true,
      type: "section",
      id: sectionId,
      name: sectionName,
    });
  };

  const confirmDelete = () => {
    if (deleteConfirmation) {
      if (deleteConfirmation.type === "class") {
        setClasses(classes.filter((c) => c.id !== deleteConfirmation.id));
        setSections(
          sections.filter((s) => s.classId !== deleteConfirmation.id)
        );
        if (selectedClass?.id === deleteConfirmation.id) {
          setSelectedClass(null);
        }
        toast({
          title: "Success",
          description: `Class "${deleteConfirmation.name}" and all its sections have been deleted.`,
        });
      } else {
        setSections(sections.filter((s) => s.id !== deleteConfirmation.id));
        toast({
          title: "Success",
          description: `Section "${deleteConfirmation.name}" has been deleted.`,
        });
      }
      setDeleteConfirmation(null);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      <div className="w-1/3 border-r">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Classes</h2>
          <Button size="sm" onClick={() => setIsAddClassModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Class
          </Button>
        </div>
        <ClassList
          classes={classes}
          selectedClass={selectedClass}
          onSelectClass={setSelectedClass}
          onEditClass={(classItem) => setEditingClass(classItem)}
          onDeleteClass={handleDeleteClass}
        />
      </div>
      <div className="w-2/3">
        <SectionList
          sections={sections.filter(
            (section) => section.classId === selectedClass?.id
          )}
          selectedClass={selectedClass}
          onAddSection={() => setIsAddSectionModalOpen(true)}
          onEditSection={(section) => setEditingSection(section)}
          onDeleteSection={handleDeleteSection}
        />
      </div>
      <AddClassModal
        isOpen={isAddClassModalOpen}
        onClose={() => setIsAddClassModalOpen(false)}
        onAddClass={handleAddClass}
      />
      <AddSectionModal
        isOpen={isAddSectionModalOpen}
        onClose={() => setIsAddSectionModalOpen(false)}
        onAddSection={handleAddSection}
        selectedClass={selectedClass}
      />
      <EditClassModal
        isOpen={editingClass !== null}
        onClose={() => setEditingClass(null)}
        onEditClass={handleEditClass}
        classItem={editingClass}
      />
      <EditSectionModal
        isOpen={editingSection !== null}
        onClose={() => setEditingSection(null)}
        onEditSection={handleEditSection}
        section={editingSection}
      />
      <DeleteConfirmationDialog
        isOpen={deleteConfirmation !== null}
        onClose={() => setDeleteConfirmation(null)}
        onConfirm={confirmDelete}
        itemType={deleteConfirmation?.type}
        itemName={deleteConfirmation?.name}
      />
    </div>
  );
}
