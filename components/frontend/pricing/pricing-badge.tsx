export function PricingBadge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "highlight";
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm ${
        variant === "highlight"
          ? "border border-red-100 bg-red-50 text-red-600"
          : "border border-neutral-200 bg-white text-neutral-700"
      }`}
    >
      <span className="mr-1.5">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 13L13 7L7 1L1 7L7 13Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </div>
  );
}
