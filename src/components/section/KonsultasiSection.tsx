"use client";

import React from "react";
import Pill from "../ui/pill";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import {
  ChartLine,
  HandHeart,
  History,
  LockKeyhole,
  MoveRight,
  ShieldCheck,
  SquareStar,
  Users,
  Zap,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Link from "next/link";
import Image from "next/image";
import KonsultasiImage from "@/assets/konsultasi-img.png";

const KonsultasiSection = () => {
  const { ref: konsultasiRef, isVisible } = useScrollReveal<HTMLElement>();

  const konsultasi1 = [
    {
      icon: <ChartLine size={16} />,
      title: "Satu Sistem",
      description: "Semua kebutuhan bisnis dalam satu platform.",
    },
    {
      icon: <Zap size={16} />,
      title: "Lebih Efisiem",
      description: "Hemat waktu dan biaya operasional.",
    },
    {
      icon: <ShieldCheck size={16} />,
      title: "Keputusan Lebih Cepat",
      description: "Data real-time untuk keputusan yang tepat.",
    },
  ];

  const konsultasi2 = [
    {
      icon: <Users />,
      title: "100+",
      description: "Perusahaan percaya",
    },
    {
      icon: <ShieldCheck />,
      title: "Aman & Terpercaya",
      description: "Sistem keamanan berlapis dan data selalu terlindungi",
    },
    {
      icon: <History />,
      title: "Support Responsif",
      description: "Tim support siap membantu kapan pun Anda butuhkan",
    },
    {
      icon: <HandHeart />,
      title: "Selalu Berkembang",
      description: "Fitur terus diperbarui sesuai kebutuhan bisnis Anda",
    },
  ];
  return (
    <section ref={konsultasiRef} className="py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-12 gap-6 items-center mb-4">
          <div
            className={`col-span-12 lg:col-span-6 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <Pill
              text="Saatnya Semua Jadi Lebih Mudah"
              startIcon={<SquareStar size={18} strokeWidth={2.25} />}
            ></Pill>
            <SectionTitle className="mb-4">
              Waktunya Ubah Cara Kerja, Satukan Semua Data,{" "}
              <span className="text-primary">Tumbuhkan Bisnis Anda.</span>
            </SectionTitle>
            <div className="h-1.5 w-18 bg-primary mb-4"></div>
            <SectionDescription className="text-justify mb-8">
              Finexia membantu Anda mengelola keuangan, stok, dan operasional
              dalam satu sistem terintegrasi. Lebih efisien, lebih akurat, dan
              siap membawa bisnis Anda ke level berikutnya.
            </SectionDescription>
            <div className="rounded-2xl border border-border bg-background shadow p-5 mb-5">
              <div className="grid grid-cols-12 gap-3">
                {konsultasi1.map((item, index) => (
                  <div className="col-span-12 md:col-span-4" key={index}>
                    <div className="flex items-center gap-4 h-full">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-slate-700 text-sm leading-5 font-bold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="#">
              <div className="bg-green-600/80 rounded-lg p-4">
                <div className="flex items-center justify-center gap-2 text-white">
                  <span className="text-sm font-semibold">
                    Konsultasi via WhatsApp Sekarang
                  </span>
                  <MoveRight />
                </div>
              </div>
            </Link>
            <div className="flex gap-1 items-center text-slate-500 mt-1">
              <LockKeyhole size={14} />
              <span className="text-xs">
                Gratis konsultasi. Tanpa komitmen.
              </span>
            </div>
          </div>
          <div
            className={`col-span-12 lg:col-span-6 transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Image
              src={KonsultasiImage}
              alt="Konsultasi tentang Finexia"
              className="w-full max-w-xl m-auto"
              width={1500}
              height={1000}
            />
          </div>
        </div>
        <div
          className={`w-full rounded-2xl border-3 border-border bg-background p-5 transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h3 className="text-center text-slate-800 font-semibold mb-5">
            Dipercaya 100+ bisnis di Indonesia
          </h3>
          <div className="grid grid-cols-12 gap-4">
            {konsultasi2.map((item, index) => (
              <div
                className="col-span-12 md:col-span-6 lg:col-span-3"
                key={index}
              >
                <div className="flex items-center gap-4 h-full">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-slate-700 text-sm leading-5 font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KonsultasiSection;
