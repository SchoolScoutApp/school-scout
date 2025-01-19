interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm text-neutral-700">
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
        {badge}
      </div>

      <h2 className="mt-6 text-4xl font-medium tracking-tight text-sky-950 sm:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
        {description}
      </p>
    </div>
  );
}
