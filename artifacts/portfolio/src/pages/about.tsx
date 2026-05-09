import { MotionPage, MotionSection } from "@/components/motion-page";

export default function About() {
  return (
    <MotionPage className="pt-24">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-normal mb-12 tracking-tight">Hey — You made it.</h1>
        <p className="text-2xl md:text-3xl leading-relaxed mb-12">
          I'm Evan — an identity + packaging designer turned advertising + web designer turned digital native product designer.
        </p>
        <p className="text-xl md:text-2xl leading-relaxed opacity-70">
          I'm passionate about designing intuitive software that drives immediate and lasting impact. Through UX strategy, research, and design thinking, we can transform how people interact with products and businesses.
        </p>
      </div>

      <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <MotionSection>
          <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">UX Strategy</h2>
          <ul className="space-y-4 text-lg">
            <li>Innovation</li>
            <li>Short + long-term strategy</li>
            <li>UX thought-leadership</li>
            <li>Vision + focus</li>
            <li>Thoughtful sequencing + execution</li>
            <li>Alignment + collaboration</li>
            <li>User + experience evangelism</li>
          </ul>
        </MotionSection>

        <MotionSection delay={0.1}>
          <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">User Experience Design</h2>
          <ul className="space-y-4 text-lg">
            <li>End-to-end, inside and out</li>
            <li>Exploration + breaking things</li>
            <li>Prototyping + motion</li>
            <li>UX research + feedback analysis</li>
            <li>Persona + experience mapping</li>
            <li>Information architecture</li>
            <li>Testing + execution</li>
          </ul>
        </MotionSection>

        <MotionSection delay={0.2}>
          <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Design Thinking</h2>
          <ul className="space-y-4 text-lg">
            <li>Empathize</li>
            <li>Define</li>
            <li>Ideate</li>
            <li>Prototype</li>
            <li>Test</li>
            <li>Iterate</li>
            <li className="italic opacity-60 mt-4">Emphasis on iterate</li>
          </ul>
        </MotionSection>
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
        <MotionSection>
          <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Hobbies</h2>
          <p className="text-lg leading-loose">
            Surfing, Photography, Remodeling + Renovation, Interior design, Motorcycles, Ultra Running, Camping/Outdoors/Adventure, Business, Guitar
          </p>
        </MotionSection>

        <MotionSection delay={0.1}>
          <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Notables</h2>
          <ul className="space-y-3 text-lg">
            <li>7x Ironman Finisher</li>
            <li>6x Ultra Running Finisher</li>
            <li>Warped Tour Guitarist</li>
            <li>2x TeamUSA Triathlon Qualifier</li>
            <li>4x Camper Van Conversionist</li>
            <li>Work Shown in a Superbowl Commercial</li>
            <li>5x Failed Business Owner</li>
            <li>Father + Husband</li>
          </ul>
        </MotionSection>
      </div>

      <MotionSection className="mt-32 mb-16" delay={0.2}>
        <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Awards & Recognition</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-4 text-lg">
          <span>UI Design Patents (11)</span>
          <span>Addys (5)</span>
          <span>FWA (1)</span>
          <span>W3 Awards (3)</span>
          <span>Pixel Awards (2)</span>
          <span>Davey Awards (2)</span>
          <span>Crystal Achievement (2)</span>
        </div>
      </MotionSection>
    </MotionPage>
  );
}
