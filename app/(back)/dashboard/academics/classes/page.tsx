import { ClassSectionManager } from "@/components/dashboard/acadmics/classes/class-section-manager";
import { Card } from "@/components/ui/card";

export default function ClassManagementPage() {
  return (
    <Card className="p-8 m-10 w-11/12 mx-auto border-t-4 border-blue-600">
      <h1 className="text-2xl font-bold mb-4">Class and Section Management</h1>
      <ClassSectionManager />
    </Card>
  );
}
