import { MotionPage, MotionSection } from "@/components/motion-page";
import { PageContainer } from "@/components/page-container";

export default function About() {
  return (
    <MotionPage>
      <PageContainer className="pt-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-normal mb-12 tracking-tight">Hai — Selamat datang!</h1>
          <p className="text-2xl md:text-3xl leading-relaxed mb-12">
            Aku Niken — siswa Software Engineering & Game Development yang suka bikin sesuatu dari nol, entah itu website, game, atau tulisan di blog.
          </p>
          <p className="text-xl md:text-2xl leading-relaxed opacity-70">
            Aku senang memecahkan masalah dan terus belajar hal baru. Bagiku, teknologi bukan cuma soal kode — tapi tentang bagaimana kita bisa bikin sesuatu yang beneran berguna buat orang lain.
          </p>
        </div>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <MotionSection>
            <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Pemrograman</h2>
            <ul className="space-y-4 text-lg">
              <li>HTML</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>SQL / MySQL</li>
            </ul>
          </MotionSection>

          <MotionSection delay={0.1}>
            <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Desain & Tools</h2>
            <ul className="space-y-4 text-lg">
              <li>UI/UX Design (Dasar)</li>
              <li>Microsoft Office</li>
              <li>Blogger Platform</li>
            </ul>
          </MotionSection>

          <MotionSection delay={0.2}>
            <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Soft Skills</h2>
            <ul className="space-y-4 text-lg">
              <li>Kerja sama tim</li>
              <li>Komunikasi</li>
              <li>Problem solving</li>
              <li>Ingin terus belajar</li>
            </ul>
          </MotionSection>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          <MotionSection>
            <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Pendidikan</h2>
            <ul className="space-y-6 text-lg">
              <li>
                <p className="font-medium">SMK Telekomunikasi Tunas Harapan</p>
                <p className="opacity-60">Software Engineering & Game Development — 2023–2026</p>
              </li>
              <li>
                <p className="font-medium">Pondok Modern Darussalam</p>
                <p className="opacity-60">Boarding School — 2018–2021</p>
              </li>
            </ul>
          </MotionSection>

          <MotionSection delay={0.1}>
            <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8 border-b border-border pb-4">Bahasa</h2>
            <ul className="space-y-3 text-lg">
              <li>Indonesia</li>
              <li>Inggris</li>
            </ul>
          </MotionSection>
        </div>
      </PageContainer>
    </MotionPage>
  );
}
