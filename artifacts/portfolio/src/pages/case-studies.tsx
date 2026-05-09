import { MotionPage, MotionSection } from "@/components/motion-page";
import { PageContainer } from "@/components/page-container";

const projects = [
  {
    id: "ecommerce",
    title: "Toko Online dari Nol",
    client: "Website E-Commerce",
    category: "web development",
    period: "2024–2025",
    description: "Membangun website toko online lengkap dengan fitur katalog produk, keranjang belanja, dan checkout menggunakan HTML, PHP, dan MySQL.",
    stack: ["HTML", "PHP", "MySQL"],
  },
  {
    id: "blog",
    title: "Nulis & Berbagi Ide",
    client: "Blog & Konten",
    category: "content writing",
    period: "2025",
    description: "Menulis dan mempublikasikan artikel tentang lifestyle, pendidikan, dan teknologi. Mengelola blog pribadi di platform Blogger.",
    stack: ["Blogger", "Content Writing"],
  },
];

export default function CaseStudies() {
  return (
    <MotionPage>
      <PageContainer className="pt-24">
        <h1 className="text-4xl md:text-5xl font-normal mb-24 tracking-tight">Proyek yang Pernah Dikerjain</h1>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <MotionSection key={project.id} delay={i * 0.1}>
              <div className="border-t border-border pt-8">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h2 className="text-4xl md:text-6xl font-normal tracking-tight">
                    {project.client}
                  </h2>
                  <span className="text-sm tracking-widest uppercase opacity-40 mt-4 md:mt-0">
                    {project.category}
                  </span>
                </div>
                <p className="text-xl md:text-2xl opacity-60 mb-6">{project.title}</p>
                <p className="text-lg opacity-70 max-w-2xl mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs tracking-widest uppercase border border-border px-3 py-1 opacity-60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </PageContainer>
    </MotionPage>
  );
}
