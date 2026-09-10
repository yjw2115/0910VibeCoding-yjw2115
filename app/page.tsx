import { profile } from "@/lib/profile";

const barcodeBars = [
  { w: 2, h: 100 },
  { w: 4, h: 78 },
  { w: 1, h: 100 },
  { w: 5, h: 62 },
  { w: 2, h: 100 },
  { w: 2, h: 84 },
  { w: 6, h: 100 },
  { w: 1, h: 70 },
  { w: 3, h: 100 },
  { w: 2, h: 55 },
  { w: 5, h: 100 },
  { w: 1, h: 88 },
];

const linkLabels: Record<string, string> = {
  Email: "이메일",
  Instagram: "인스타그램",
};

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden px-6 py-10 sm:py-16"
      style={{
        background:
          "radial-gradient(120% 90% at 15% 0%, #1b1b4a 0%, #0a0a20 45%, #05060d 100%)",
      }}
    >
      <div
        className="stars-layer-1 pointer-events-none absolute opacity-90"
        style={{ inset: "-20% -10%" }}
      />
      <div
        className="stars-layer-2 pointer-events-none absolute opacity-50"
        style={{ inset: "-20% -10%" }}
      />
      <div
        className="pointer-events-none absolute h-[520px] w-[520px] rounded-full opacity-55 blur-[2px]"
        style={{
          right: "-160px",
          top: "-140px",
          background:
            "radial-gradient(circle at 32% 28%, #4b5bd6 0%, #2a2a6e 45%, #12122e 75%, transparent 78%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl rounded border border-[#f4c430]/35 bg-gradient-to-b from-[#0c0d22]/[.82] to-[#060712]/90 px-6 pb-8 pt-8 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:px-10 sm:pt-10">
        {/* Masthead */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <h1
            className="text-[clamp(44px,8vw,84px)] leading-[0.9] tracking-tight text-[#f4c430]"
            style={{ fontFamily: "var(--font-black-han-sans)" }}
          >
            PROFILE.
          </h1>
          <div className="pt-2 text-right text-xs leading-loose tracking-[0.18em] text-[#9aa4c7]">
            <p>2026 SEP</p>
            <p>ISSUE NO. 01</p>
          </div>
        </div>

        <div className="my-5 h-px bg-gradient-to-r from-[#f4c430]/60 to-transparent" />

        {/* Cover lines */}
        <div className="grid grid-cols-1 gap-4 text-[13px] leading-relaxed text-[#d7ddf0] sm:grid-cols-2">
          <p>
            <span className="font-bold tracking-[0.1em] text-[#ff5a5f]">
              EXCLUSIVE
            </span>{" "}
            — 군 복무를 마치고 올해 복학
          </p>
          <p>
            <span className="font-bold tracking-[0.1em] text-[#7fd7ff]">
              INSIDE
            </span>{" "}
            — 나만의 개발 프로젝트를 향한 첫걸음
          </p>
        </div>

        {/* Headline */}
        <div className="mt-11">
          <h2
            className="name-glow text-[clamp(72px,17vw,168px)] leading-[0.88] tracking-tight text-white"
            style={{ fontFamily: "var(--font-black-han-sans)" }}
          >
            {profile.name}
          </h2>
          <div className="mt-4 flex flex-wrap items-baseline gap-4 text-sm tracking-[0.12em] text-[#9aa4c7]">
            <span className="text-[#f4c430]">{profile.department}</span>
            <span>자기소개</span>
          </div>
        </div>

        {/* Pull quote */}
        <p className="my-10 border-y-[3px] border-[#f4c430] py-7 text-[clamp(17px,2.4vw,22px)] font-light leading-relaxed text-[#eef1fa]">
          {profile.bio}
        </p>

        {/* Hobbies / interests */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-3.5 text-[11px] tracking-[0.28em] text-[#7f8ab0]">
              취미
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((hobby) => (
                <span
                  key={hobby}
                  className="rounded-full bg-[#f4c430] px-[18px] py-2 text-[13px] font-bold text-[#05060d]"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3.5 text-[11px] tracking-[0.28em] text-[#7f8ab0]">
              관심사
            </p>
            <div className="flex flex-col gap-2 text-[15px] text-[#e3e8f7]">
              {profile.interests.map((interest) => (
                <div key={interest} className="flex gap-2.5">
                  <span className="text-[#f4c430]">★</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: barcode + links */}
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-[#9aa4c7]/25 pt-5">
          <div className="flex h-11 items-end gap-[2px]">
            {barcodeBars.map((bar, i) => (
              <span
                key={i}
                className="bg-[#f4c430]"
                style={{ width: `${bar.w}px`, height: `${bar.h}%` }}
              />
            ))}
          </div>
          <div className="flex gap-6 text-[13px] tracking-wide">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[#f4c430] hover:text-white"
              >
                {linkLabels[link.label] ?? link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
