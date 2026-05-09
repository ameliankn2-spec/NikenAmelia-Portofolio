import { motion } from "framer-motion";
import { Link } from "wouter";
import videoLeft from "@assets/WhatsApp_Video_2026-05-09_at_14.52.53_1778315012465.mp4";
import videoCenter from "@assets/WhatsApp_Video_2026-05-09_at_14.52.51_1778313569577.mp4";
import videoRight from "@assets/WhatsApp_Video_2026-05-09_at_14.53.19_1778315014877.mp4";
import imgRun1 from "@assets/WhatsApp_Image_2026-05-09_at_14.45.22_1778315873117.jpeg";
import imgRun2 from "@assets/WhatsApp_Image_2026-05-09_at_14.45.23_1778315871796.jpeg";
import imgRun3 from "@assets/WhatsApp_Image_2026-05-09_at_14.45.26_1778315870284.jpeg";
import imgRun4 from "@assets/WhatsApp_Image_2026-05-09_at_14.50.13_1778315868572.jpeg";
import imgRun5 from "@assets/WhatsApp_Image_2026-05-09_at_14.50.53_1778315867150.jpeg";
import imgRun6 from "@assets/WhatsApp_Image_2026-05-09_at_14.50.19_1778315990623.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#111] text-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative w-full flex items-end overflow-hidden" style={{ height: "100vh" }}>
        <div className="absolute inset-0 flex">
          <video autoPlay loop muted playsInline className="h-full object-cover" style={{ filter: "grayscale(100%)", width: "33.333%" }}>
            <source src={videoLeft} type="video/mp4" />
          </video>
          <video autoPlay loop muted playsInline className="h-full object-cover" style={{ filter: "grayscale(100%)", width: "33.333%" }}>
            <source src={videoCenter} type="video/mp4" />
          </video>
          <video autoPlay loop muted playsInline className="h-full object-cover" style={{ filter: "grayscale(100%)", width: "33.334%" }}>
            <source src={videoRight} type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#111]" />

        <div className="relative z-10 w-full px-8 sm:px-16 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-[10rem] font-normal tracking-tight leading-none"
          >
            Welcome
          </motion.h1>
        </div>

        <motion.a
          href="#info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors z-10"
        >
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        </motion.a>
      </section>

      {/* ── THREE COLUMNS ── */}
      <section id="info" className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 py-20 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <Section>
            <h2 className="text-xs tracking-widest uppercase text-white/40 mb-4">Sekarang</h2>
            <p className="text-white text-lg font-normal">SMK Telekomunikasi Tunas Harapan</p>
            <p className="text-white/50 text-sm mt-1">Software Engineering & Game Dev</p>
            <p className="text-white/40 text-sm">Salatiga, Jawa Tengah</p>
          </Section>

          <Section>
            <h2 className="text-xs tracking-widest uppercase text-white/40 mb-4">Sebelumnya</h2>
            <p className="text-white text-lg font-normal">Pondok Modern Darussalam</p>
            <p className="text-white/50 text-sm mt-1">Boarding School</p>
            <p className="text-white/40 text-sm">2018 – 2021</p>
          </Section>

          <Section>
            <h2 className="text-xs tracking-widest uppercase text-white/40 mb-4">Keahlian</h2>
            <ul className="text-white/80 text-sm space-y-1">
              <li>HTML, PHP, JavaScript</li>
              <li>SQL / MySQL</li>
              <li>UI/UX Design</li>
              <li>Microsoft Office</li>
            </ul>
          </Section>
        </div>
      </section>

      {/* ── ABOUT + SKILLS ── */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 py-20">
          <Section className="mb-12">
            <span className="text-xs tracking-widest uppercase text-[#00ff9d] block mb-4">Tentang Aku</span>
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal leading-snug max-w-3xl text-white/90">
              Niken Amelia — siswa SMK Telekomunikasi Tunas Harapan, Salatiga, jurusan Software Engineering & Game Development.
            </p>
            <p className="text-lg sm:text-xl font-normal leading-relaxed max-w-3xl text-white/60 mt-6">
              Gemar membangun website, menulis artikel di blog, dan berlari marathon. Pernah menempuh pendidikan di pondok pesantren selama tiga tahun — dari sana tumbuh kedisiplinan, kemampuan berbahasa Arab, dan kemandirian yang menjadi bekal hingga kini.
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12">
            <Section>
              <h3 className="text-xs tracking-widest uppercase text-white/40 mb-4">Pemrograman</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>HTML</li>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>SQL / MySQL</li>
              </ul>
            </Section>

            <Section>
              <h3 className="text-xs tracking-widest uppercase text-white/40 mb-4">Hobi</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>Marathon & Lari Jarak Jauh</li>
                <li>Menulis & Blogging</li>
                <li>Game Development</li>
              </ul>
            </Section>

            <Section>
              <h3 className="text-xs tracking-widest uppercase text-white/40 mb-4">Bahasa</h3>
              <ul className="text-white/70 text-sm space-y-2">
                <li>Arab</li>
                <li>Inggris</li>
              </ul>
            </Section>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8 sm:px-16 py-20">
          <Section>
            <span className="text-xs tracking-widest uppercase text-[#00ff9d] block mb-6">Kontak</span>
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal leading-relaxed text-white/80 max-w-2xl">
              Bisa hubungi aku lewat email atau WhatsApp kapan saja.{" "}
              <a
                href="mailto:ameliankn2@gmail.com"
                className="text-[#00ff9d] hover:opacity-70 transition-opacity underline decoration-1 underline-offset-4"
              >
                ameliankn2@gmail.com
              </a>
            </p>
            <p className="text-xl sm:text-2xl font-normal leading-relaxed text-white/80 mt-4">
              WhatsApp:{" "}
              <a
                href="tel:+6208783597232"
                className="text-[#00ff9d] hover:opacity-70 transition-opacity underline decoration-1 underline-offset-4"
              >
                0878 3539 7232
              </a>
            </p>
          </Section>
        </div>
      </section>

      {/* ── IMAGE GRID ── */}
      <section>
        {/* Row 1: foto 3, 2, 1 (foto 3 jadi pertama) */}
        <div className="grid grid-cols-3">
          {[imgRun3, imgRun2, imgRun1].map((src, i) => (
            <div key={i} className="overflow-hidden aspect-square">
              <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          ))}
        </div>
        {/* Row 2: 3 foto baru */}
        <div className="grid grid-cols-3">
          {[imgRun4, imgRun5, imgRun6].map((src, i) => (
            <div key={i} className="overflow-hidden aspect-square">
              <img src={src} alt="" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
