import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { LogIn } from "lucide-react";

export default function LoginSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={!!pending}>
      <LogIn />
      {pending ? "Logging In..." : "Login"}
    </Button>
  );
}
