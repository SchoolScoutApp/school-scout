import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { LogIn } from "lucide-react";

export default function ContactUsSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={!!pending}>
      <LogIn />
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
