import { Home, Link2 } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <Link2 className="h-8 w-8 text-red-500" />
        </div>

        <h1 className="mb-3 text-2xl font-semibold text-neutral-900">
          404 - Page Not Found
        </h1>

        <p className="mb-8 text-neutral-600">
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            <Home className="h-4 w-4" />
            Go to Homepage
          </Link>
        </div>

        <div className="mt-8 text-sm text-neutral-500">
          © 2025 School Scout. All rights reserved.
        </div>
      </div>
    </div>
  );
}
