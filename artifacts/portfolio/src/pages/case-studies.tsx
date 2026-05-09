import { MotionPage, MotionSection } from "@/components/motion-page";
import { PageContainer } from "@/components/page-container";
import { Link } from "wouter";

const caseStudies = [
  {
    id: "gopro",
    title: "Years of Growth",
    client: "GoPro",
    category: "user experience",
  },
  {
    id: "hulu",
    title: "Modernizing Streaming",
    client: "Hulu",
    category: "ux/visual design",
  },
];

export default function CaseStudies() {
  return (
    <MotionPage>
      <PageContainer className="pt-24">
        <h1 className="text-4xl md:text-5xl font-normal mb-24 tracking-tight">Featured Case Studies</h1>

        <div className="space-y-32">
          {caseStudies.map((study, i) => (
            <MotionSection key={study.id} delay={i * 0.1}>
              <Link href="#" className="group block">
                <div className="border-t border-border pt-8 relative">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <h2 className="text-4xl md:text-6xl font-normal tracking-tight group-hover:opacity-60 transition-opacity">
                      {study.client}
                    </h2>
                    <span className="text-sm tracking-widest uppercase opacity-40 mt-4 md:mt-0">
                      {study.category}
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl opacity-60">{study.title}</p>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
              </Link>
            </MotionSection>
          ))}
        </div>
      </PageContainer>
    </MotionPage>
  );
}
