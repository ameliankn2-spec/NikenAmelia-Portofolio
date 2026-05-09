import { motion } from "framer-motion";
import { MotionSection } from "@/components/motion-page";
import { PageContainer } from "@/components/page-container";
import videoLeft from "@assets/WhatsApp_Video_2026-05-09_at_14.52.53_1778315012465.mp4";
import videoCenter from "@assets/WhatsApp_Video_2026-05-09_at_14.52.51_1778313569577.mp4";
import videoRight from "@assets/WhatsApp_Video_2026-05-09_at_14.53.19_1778315014877.mp4";

export default function Home() {
  return (
    <div>
      <section
        className="relative w-full flex items-center justify-center text-white overflow-hidden"
        style={{ height: "100vh" }}
        data-testid="section-hero"
      >
        <div className="absolute inset-0 flex">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full object-cover"
            style={{ filter: "grayscale(100%)", width: "33.333%" }}
          >
            <source src={videoLeft} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full object-cover"
            style={{ filter: "grayscale(100%)", width: "33.333%" }}
          >
            <source src={videoCenter} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full object-cover"
            style={{ filter: "grayscale(100%)", width: "33.334%" }}
          >
            <source src={videoRight} type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-7xl mx-auto px-10 sm:px-16"
        >
          <h1
            className="text-7xl sm:text-8xl md:text-9xl font-normal tracking-tight leading-none"
            data-testid="text-hero-welcome"
          >
            Welcome
          </h1>
        </motion.div>

        <motion.a
          href="#content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          data-testid="link-scroll-down"
        >
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </motion.a>
      </section>

      <PageContainer id="content" className="pt-32 lg:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <span className="text-sm tracking-widest uppercase opacity-60 mb-6 block">I'm Niken.</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.1] tracking-tight">
            I design thoughtful digital experiences & beautiful brand aesthetics.
          </h2>
        </motion.div>

        <div className="mt-48 grid grid-cols-1 md:grid-cols-2 gap-24">
          <MotionSection>
            <h3 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Current</h3>
            <div className="text-2xl leading-relaxed">
              <p>GoPro</p>
              <p className="opacity-60">San Diego, California</p>
            </div>
          </MotionSection>

          <MotionSection delay={0.2}>
            <h3 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Past</h3>
            <ul className="text-2xl leading-relaxed space-y-4">
              <li>Hulu <span className="opacity-60 text-xl ml-2">(LA)</span></li>
              <li>Huge <span className="opacity-60 text-xl ml-2">(LA)</span></li>
              <li>Digital Operative <span className="opacity-60 text-xl ml-2">(SD)</span></li>
              <li>BXC Inc. <span className="opacity-60 text-xl ml-2">(OC)</span></li>
            </ul>
          </MotionSection>
        </div>
      </PageContainer>
    </div>
  );
}
