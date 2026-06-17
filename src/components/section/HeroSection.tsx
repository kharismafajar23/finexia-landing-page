"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  ArrowRight,
  FileSearchCorner,
  Play,
  ShieldCheck,
  Users,
  Waypoints,
} from "lucide-react";
import React from "react";
import heroImage from "@/assets/hero-img.png";
import Pill from "../ui/pill";
import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  const { ref: heroRef, isVisible } = useScrollReveal<HTMLElement>({ rootMargin: "-120px 0px" });

  const heroPoint = [
    {
      icon: <Waypoints />,
      name: "Semua Data Bisnis Terhubung dalam Satu Sistem",
    },
    {
      icon: <FileSearchCorner />,
      name: "Analisa Otomatis untuk Keputusan Lebih Cepat",
    },
    {
      icon: <Users />,
      name: "Mudah Digunakan oleh Semua Tim",
    },
  ];
  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary-soft/70 blur-3xl" />
      <div className="container-px relative mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div
          className={`flex flex-col justify-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <Pill
              text="Satu Sistem. Semua Terhubung"
              startIcon={<ShieldCheck size={18} strokeWidth={2.25} />}
            ></Pill>
          </div>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.2] tracking-tight md:text-5xl">
            <span className="text-slate-700">
              Bisnis Jalan, Tapi Data Terpisah?{" "}
            </span>
            <span className="text-primary">
              Saatnya Semua Jadi Satu di Finexia.
            </span>
          </h1>
          <p
            className={`mt-5 max-w-xl text-sm/5 text-muted-foreground transition-all duration-1000 delay-100 ease-out text-justify ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <span className="font-bold">Kelola keuangan,</span> stok barang, dan
            operasional bisnis dalam satu sistem terintegrasi. Tidak perlu lagi
            pindah-pindah aplikasi atau rekap manual semua data tersambung,
            otomatis, dan siap membantu Anda mengambil keputusan lebih cepat.
          </p>
          <ul
            className={`hidden md:block mt-6 space-y-3 text-sm md:text-base transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {heroPoint.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-primary">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
          <div
            className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <Button endIcon={<ArrowRight className="h-4 w-4" />}>
              Coba Gratis Sekarang
            </Button>
            <Button variant="outline" startIcon={<Play className="h-4 w-4" />}>
              Lihat Demo
            </Button>
          </div>
          <div
            className={`mt-6 flex items-center gap-3 text-xs text-muted-foreground transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-primary"
                />
              ))}
            </div>
            Dipercaya 100+ perusahaan di Indonesia
          </div>
        </div>
        <div
          className={`relative flex items-center justify-center transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="absolute inset-0 -z-10 rounded-[3rem]" />
          <Image
            src={heroImage}
            alt="Dashboard Finexia"
            className="w-full max-w-xl drop-shadow-2xl"
            width={1024}
            height={896}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
