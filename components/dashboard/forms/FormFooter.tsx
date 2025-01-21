import CloseButton from "@/components/frontend/FormInputs/CloseButton";
import SubmitButton from "@/components/frontend/FormInputs/SubmitButton";
import React from "react";

export default function FormFooter({
  href,
  editingId,
  loading,
  title,
  parent,
}: {
  href: string;
  editingId: string | undefined;
  loading: boolean;
  title: string;
  parent?: string;
}) {
  return (
    <div className="flex items-center  gap-2 py-4 justify-center ">
      <CloseButton href={href} parent={parent} />
      <SubmitButton
        title={editingId ? `Update ${title}` : `Save ${title}`}
        loading={loading}
        className="bg-sky-600"
      />
    </div>
  );
}
