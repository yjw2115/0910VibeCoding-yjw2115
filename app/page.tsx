import Section from "@/components/Section";
import { profile } from "@/lib/profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
            {profile.department}
          </span>
        </header>

        <section>
          <h2 className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
            소개
          </h2>
          <p className="mt-3 leading-relaxed text-gray-700">{profile.bio}</p>
        </section>

        <Section title="관심사">
          <ul className="space-y-2">
            {profile.interests.map((interest) => (
              <li key={interest} className="flex items-start gap-2 text-gray-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                {interest}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="취미">
          <div className="flex flex-wrap gap-2">
            {profile.hobbies.map((hobby) => (
              <span
                key={hobby}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {hobby}
              </span>
            ))}
          </div>
        </Section>

        <Section title="링크">
          <div className="flex flex-wrap gap-3">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
              >
                {link.label}
                <span className="text-gray-400">{link.value}</span>
              </a>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
}
