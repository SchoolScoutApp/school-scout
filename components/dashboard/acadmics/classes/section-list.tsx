import { Button } from "@/components/ui/button";
import { Plus, X, Edit } from "lucide-react";

interface SectionListProps {
  sections: { id: string; name: string; classId: string }[];
  selectedClass: { id: string; name: string } | null;
  onAddSection: () => void;
  onEditSection: (section: {
    id: string;
    name: string;
    classId: string;
  }) => void;
  onDeleteSection: (sectionId: string, sectionName: string) => void;
}

export function SectionList({
  sections,
  selectedClass,
  onAddSection,
  onEditSection,
  onDeleteSection,
}: SectionListProps) {
  if (!selectedClass) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Select a class to view its sections
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Sections for {selectedClass.name}
        </h2>
        <Button size="sm" onClick={onAddSection}>
          <Plus className="w-4 h-4 mr-2" />
          Add Section
        </Button>
      </div>
      {sections.length === 0 ? (
        <p className="text-gray-500">No sections found for this class.</p>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {sections.map((section) => (
            <li
              key={section.id}
              className="p-4 bg-white border rounded-lg shadow-sm flex items-center justify-between"
            >
              <span>{section.name}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onEditSection(section)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label={`Edit ${section.name}`}
                >
                  <Edit className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => onDeleteSection(section.id, section.name)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label={`Delete ${section.name}`}
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
