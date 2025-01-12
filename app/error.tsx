"use client";

import { Home, ArrowLeft, Link2, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>

        <h1 className="mb-3 text-2xl font-semibold text-neutral-900">
          500 - Server Error
        </h1>

        <p className="mb-8 text-neutral-600">
          Sorry! Something went wrong on our end. Please try again later or
          contact support if the problem persists.
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
