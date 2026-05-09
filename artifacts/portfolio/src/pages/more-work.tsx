import { MotionPage, MotionSection } from "@/components/motion-page";
import { PageContainer } from "@/components/page-container";
import imgKatalog from "@assets/Contoh-katalog-produk-skincare_1778317660552.webp";
import imgKeranjang from "@assets/image_1778317765452.png";
import imgCheckout from "@assets/image_1778317809030.png";
import imgArtikel from "@assets/gambar2-980x551_1778318009312.png";
import imgDesainUI from "@assets/image_1778318145686.png";
import imgDatabase from "@assets/image_1778318205356.png";

export default function MoreWork() {
  const works = [
    { title: "Fitur Katalog Produk", category: "Web Development", image: imgKatalog },
    { title: "Sistem Keranjang Belanja", category: "PHP & MySQL", image: imgKeranjang },
    { title: "Halaman Checkout", category: "Web Development", image: imgCheckout },
    { title: "Artikel Lifestyle & Teknologi", category: "Content Writing", image: imgArtikel },
    { title: "Desain UI Toko Online", category: "UI/UX Design", image: imgDesainUI },
    { title: "Manajemen Database Produk", category: "SQL / MySQL", image: imgDatabase },
  ];

  return (
    <MotionPage>
      <PageContainer className="pt-24">
        <h1 className="text-4xl md:text-5xl font-normal mb-24 tracking-tight">Hal Lain yang Pernah Dibuat</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {works.map((work, i) => (
            <MotionSection key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/3] bg-secondary mb-6 overflow-hidden flex items-center justify-center">
                  {work.image ? (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <span className="opacity-20 font-serif italic text-lg group-hover:scale-110 transition-transform duration-700">
                      Project
                    </span>
                  )}
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
