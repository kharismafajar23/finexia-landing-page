import DashboardSection from "@/components/section/DashboardSection";
import FaqSection from "@/components/section/FaqSection";
import HeroSection from "@/components/section/HeroSection";
import InsightSection from "@/components/section/InsightSection";
import IntegrasiSection from "@/components/section/IntegrasiSection";
import KonsultasiSection from "@/components/section/KonsultasiSection";
import MainFeatureSection from "@/components/section/MainFeatureSection";
import TrustSection from "@/components/section/TrustSection";
import UseCaseSection from "@/components/section/UseCaseSection";
import WhyUsSection from "@/components/section/WhyUsSection";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Finexia menyatukan seluruh data bisnis Anda dalam satu platform terintegrasi. Real-time, sederhana, dan dipercaya 700+ organisasi di Indonesia.",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <WhyUsSection />
      <MainFeatureSection />
      <IntegrasiSection />
      <DashboardSection />
      <UseCaseSection />
      <InsightSection />
      <FaqSection />
      <KonsultasiSection />
    </>
  );
}
