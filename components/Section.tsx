import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
