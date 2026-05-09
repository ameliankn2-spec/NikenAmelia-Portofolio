import { MotionPage, MotionSection } from "@/components/motion-page";
import { PageContainer } from "@/components/page-container";

export default function MoreWork() {
  const works = [
    { title: "Agency Portfolio", category: "Web Design" },
    { title: "E-Commerce Replatform", category: "UX Strategy" },
    { title: "Brand Identity", category: "Art Direction" },
    { title: "Mobile App MVP", category: "Product Design" },
    { title: "Packaging System", category: "Identity" },
    { title: "Design System", category: "Visual Design" },
  ];

  return (
    <MotionPage>
      <PageContainer className="pt-24">
        <h1 className="text-4xl md:text-5xl font-normal mb-24 tracking-tight">More Work</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {works.map((work, i) => (
            <MotionSection key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-secondary mb-6 overflow-hidden flex items-center justify-center">
                  <span className="opacity-20 font-serif italic text-lg group-hover:scale-110 transition-transform duration-700">
                    Project
                  </span>
                </div>
                <h3 className="text-2xl font-normal tracking-tight mb-2">{work.title}</h3>
                <p className="text-sm tracking-widest uppercase opacity-40">{work.category}</p>
              </div>
            </MotionSection>
          ))}
        </div>
      </PageContainer>
    </MotionPage>
  );
}
