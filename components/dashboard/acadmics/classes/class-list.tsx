import { cn } from "@/lib/utils";
import { X, Edit } from "lucide-react";

interface ClassListProps {
  classes: { id: string; name: string }[];
  selectedClass: { id: string; name: string } | null;
  onSelectClass: (classItem: { id: string; name: string }) => void;
  onEditClass: (classItem: { id: string; name: string }) => void;
  onDeleteClass: (classId: string, className: string) => void;
}

export function ClassList({
  classes,
  selectedClass,
  onSelectClass,
  onEditClass,
  onDeleteClass,
}: ClassListProps) {
  return (
    <ul className="divide-y">
      {classes.map((classItem) => (
        <li
          key={classItem.id}
          className={cn(
            "px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors",
            selectedClass?.id === classItem.id && "bg-gray-100"
          )}
        >
          <span
            className="flex-grow cursor-pointer"
            onClick={() => onSelectClass(classItem)}
          >
            {classItem.name}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEditClass(classItem);
              }}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              aria-label={`Edit ${classItem.name}`}
            >
              <Edit className="w-4 h-4 text-gray-500" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteClass(classItem.id, classItem.name);
              }}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              aria-label={`Delete ${classItem.name}`}
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
