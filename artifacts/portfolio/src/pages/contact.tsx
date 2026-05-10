import { MotionPage, MotionSection } from "@/components/motion-page";
import { PageContainer } from "@/components/page-container";

export default function Contact() {
  return (
    <MotionPage>
      <PageContainer className="pt-24 min-h-[60vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-normal mb-8 tracking-tight">Yuk, ngobrol!</h1>

        <p className="text-2xl md:text-4xl leading-relaxed opacity-70 max-w-3xl mb-16">
          Mau nanya, kolaborasi, atau sekedar say hi — aku selalu siap balesin.
        </p>

        <MotionSection className="space-y-8" delay={0.1}>
          <div>
            <span className="text-xs tracking-widest uppercase opacity-40 block mb-2">Email</span>
            <a
              href="mailto:ameliankn2@gmail.com"
              className="text-2xl md:text-4xl font-normal hover:opacity-60 transition-opacity"
              data-testid="link-email"
            >
              ameliankn2@gmail.com
            </a>
          </div>

          <div>
            <span className="text-xs tracking-widest uppercase opacity-40 block mb-2">WhatsApp / Telepon</span>
            <a
              href="tel:+6208783597232"
              className="text-2xl md:text-3xl font-normal hover:opacity-60 transition-opacity"
            >
              0878 3539 7232
            </a>
          </div>

          <div>
            <span className="text-xs tracking-widest uppercase opacity-40 block mb-2">Alamat</span>
            <p className="text-lg opacity-70">
              Jl. Raden Fatah, Kalibening, Tingkir, Salatiga, Jawa Tengah
            </p>
          </div>
        </MotionSection>
      </PageContainer>
    </MotionPage>
  );
}
