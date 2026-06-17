"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React from "react";
import Pill from "../ui/pill";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import {
  ArrowRight,
  BarChart3,
  Book,
  Layers,
  LineChart,
  PieChart,
  Sparkles,
} from "lucide-react";

const InsightSection = () => {
  const { ref: insightRef, isVisible } = useScrollReveal<HTMLElement>({ rootMargin: "-120px 0px" });
  const articles = [
    { t: "5 Tanda Bisnis Anda Butuh Sistem Terintegrasi", c: "Operasional" },
    { t: "Cara Menyatukan Data dari Banyak Cabang", c: "Tips" },
    { t: "Panduan Lengkap Migrasi ke Cloud ERP", c: "Panduan" },
    { t: "Dashboard yang Membantu CEO Tidur Nyenyak", c: "Leadership" },
  ];

  return (
    <section ref={insightRef} className="py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Pill
            text="Insight Finexia"
            startIcon={<Book size={18} strokeWidth={2.25} />}
          ></Pill>
          <SectionTitle className="mb-4">
            Insight yang Relevan.<br className="hidden md:block"></br>Keputusan
            yang <span className="text-primary">Lebih Tepat.</span>
          </SectionTitle>
          <SectionDescription>
            Dapatkan insight, tips, dan tren terbaru seputar manajemen keuangan,
            operasional, dan transformasi digital untuk mendorong bisnis Anda
            terus bertumbuh.
          </SectionDescription>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          <div
            className={`md:col-span-2 md:row-span-2 transition-all duration-1000 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-foreground text-background">
              <div className="relative grid h-56 place-items-center bg-gradient-to-br from-primary to-primary/60">
                <Sparkles className="h-16 w-16 text-primary-foreground/60" />
                <span className="absolute left-4 top-4 rounded-full bg-background/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                  Unggulan
                </span>
              </div>
              <div className="flex-1 p-6">
                <div className="text-xs uppercase tracking-widest opacity-70">
                  E-Book Gratis
                </div>
                <h3 className="mt-2 text-2xl font-extrabold">
                  Panduan Lengkap Mengubah Data Jadi Keputusan
                </h3>
                <p className="mt-3 text-sm opacity-80">
                  Pelajari kerangka kerja praktis yang digunakan tim ops terbaik
                  di Indonesia.
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold"
                >
                  Unduh sekarang <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          {articles.map((a, i) => (
            <div
              key={a.t}
              className={`overflow-hidden rounded-2xl border border-border bg-background transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div
                className={`h-28 ${i % 2 === 0 ? "bg-primary-soft" : "bg-muted"} grid place-items-center`}
              >
                {[PieChart, BarChart3, LineChart, Layers][i % 4] &&
                  (() => {
                    const Ic = [PieChart, BarChart3, LineChart, Layers][i % 4];
                    return <Ic className="h-10 w-10 text-primary" />;
                  })()}
              </div>
              <div className="p-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {a.c}
                </div>
                <div className="mt-1 text-sm font-bold leading-snug">{a.t}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-2 border-primary-soft rounded-sm px-5 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Lihat semua artikel <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
