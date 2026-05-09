import { MotionPage, MotionSection } from "@/components/motion-page";

export default function Contact() {
  return (
    <MotionPage className="pt-24 min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-5xl md:text-7xl font-normal mb-8 tracking-tight">Hey — You made it.</h1>
      
      <p className="text-2xl md:text-4xl leading-relaxed opacity-70 max-w-3xl mb-16">
        I'm always willing to hop on a call or answer an email. What do you say?
      </p>

      <MotionSection className="space-y-8" delay={0.1}>
        <div>
          <span className="text-xs tracking-widest uppercase opacity-40 block mb-2">Email</span>
          <a href="mailto:kosowski.evan@gmail.com" className="text-2xl md:text-4xl font-normal hover:opacity-60 transition-opacity">
            kosowski.evan@gmail.com
          </a>
        </div>
        
        <div>
          <span className="text-xs tracking-widest uppercase opacity-40 block mb-4 mt-12">Also on</span>
          <div className="flex flex-col sm:flex-row gap-6 text-xl">
            <a href="https://instagram.com/evanwilliamk" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity underline decoration-1 underline-offset-8">
              Instagram (@evanwilliamk)
            </a>
            <a href="https://linkedin.com/in/evan-kosowski-20a32026" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity underline decoration-1 underline-offset-8">
              LinkedIn
            </a>
          </div>
        </div>
      </MotionSection>
    </MotionPage>
  );
}
