import { profile } from "@/lib/profile";

const barcodeWidths = [2, 1, 1, 3, 1, 2, 1, 4, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 1, 4, 2, 1, 1, 3];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e7e5e0] px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-md bg-[#f4c430] text-black shadow-2xl">
        {/* Masthead */}
        <div className="flex items-start justify-between px-6 pt-6">
          <h1
            className="text-4xl tracking-wide"
            style={{ fontFamily: "var(--font-black-han-sans)" }}
          >
            PROFILE.
          </h1>
          <div className="pt-1 text-right text-xs font-bold leading-tight">
            <p>2026 SEP</p>
            <p>ISSUE NO. 01</p>
          </div>
        </div>

        {/* Top cover lines */}
        <div className="mt-6 flex items-start justify-between gap-4 px-6 text-xs font-bold uppercase leading-snug">
          <p className="max-w-[45%]">
            <span className="text-red-600">EXCLUSIVE —</span> 군 복무를 마치고
            올해 복학
          </p>
          <p className="max-w-[45%] text-right">
            INSIDE — 나만의 개발 프로젝트를 향한 첫걸음
          </p>
        </div>

        {/* Main headline */}
        <div className="mt-10 px-6">
          <h2
            className="text-7xl leading-[0.9] sm:text-8xl"
            style={{ fontFamily: "var(--font-black-han-sans)" }}
          >
            {profile.name}
          </h2>
          <p className="mt-3 text-lg font-bold uppercase tracking-wide">
            {profile.department} · 자기소개
          </p>
        </div>

        {/* Pull quote (bio) */}
        <div className="mt-6 border-y-4 border-black bg-black/5 px-6 py-4">
          <p className="text-base font-medium leading-relaxed">
            &ldquo;{profile.bio}&rdquo;
          </p>
        </div>

        {/* Hobby tags */}
        <div className="mt-6 px-6">
          <p className="text-xs font-bold uppercase tracking-wide">취미</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {profile.hobbies.map((hobby) => (
              <span
                key={hobby}
                className="bg-black px-3 py-1 text-sm font-bold text-[#f4c430]"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mt-6 px-6">
          <p className="text-xs font-bold uppercase tracking-wide">관심사</p>
          <ul className="mt-2 space-y-1 text-sm font-medium">
            {profile.interests.map((interest) => (
              <li key={interest}>★ {interest}</li>
            ))}
          </ul>
        </div>

        {/* Footer: barcode + contact */}
        <div className="mt-10 flex items-end justify-between gap-4 border-t-4 border-black px-6 py-5">
          <div className="flex h-10 items-end gap-[2px]">
            {barcodeWidths.map((w, i) => (
              <span
                key={i}
                className="h-full bg-black"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>
          <div className="text-right text-xs font-bold leading-tight">
            {profile.links.map((link) => (
              <p key={link.label}>
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="underline decoration-2 underline-offset-2 hover:text-red-600"
                >
                  {link.value}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
