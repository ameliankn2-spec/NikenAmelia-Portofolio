import { MotionPage, MotionSection } from "@/components/motion-page";

export default function Home() {
  return (
    <MotionPage className="pt-32 lg:pt-48">
      <div className="max-w-4xl">
        <span className="text-sm tracking-widest uppercase opacity-60 mb-6 block">I'm Niken.</span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight">
          I design thoughtful digital experiences & beautiful brand aesthetics.
        </h1>
      </div>

      <div className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-24">
        <MotionSection>
          <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Current</h2>
          <div className="text-2xl leading-relaxed">
            <p>GoPro</p>
            <p className="opacity-60">San Diego, California</p>
          </div>
        </MotionSection>

        <MotionSection delay={0.2}>
          <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Past</h2>
          <ul className="text-2xl leading-relaxed space-y-4">
            <li>Hulu <span className="opacity-60 text-xl ml-2">(LA)</span></li>
            <li>Huge <span className="opacity-60 text-xl ml-2">(LA)</span></li>
            <li>Digital Operative <span className="opacity-60 text-xl ml-2">(SD)</span></li>
            <li>BXC Inc. <span className="opacity-60 text-xl ml-2">(OC)</span></li>
          </ul>
        </MotionSection>
      </div>
    </MotionPage>
  );
}
