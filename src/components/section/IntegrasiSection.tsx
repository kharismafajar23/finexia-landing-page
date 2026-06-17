"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  ArrowLeftRight,
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  Database,
  FileText,
  History,
  Link,
  ShieldCog,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import React from "react";
import Pill from "../ui/pill";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import IntegrasiImg from "@/assets/integrasi-img.png";
import Image from "next/image";

const IntegrasiSection = () => {
  const { ref: integrasiRef, isVisible } = useScrollReveal<HTMLElement>({ rootMargin: "-120px 0px" });
  const integrations = [
    { i: Database, l: "Database" },
    { i: ShoppingCart, l: "Marketplace" },
    { i: Wallet, l: "Payment" },
    { i: Truck, l: "Logistik" },
    { i: Users, l: "CRM" },
    { i: FileText, l: "ERP" },
  ];

  const integrasi = [
    "Integrasi melalui API yang aman dan stabil",
    "Terhubung dengan sistem lama maupun modern",
    "Sinkronisasi data real-time dan otomatis",
    "Tidak mengganggu proses bisnis yang berjalan",
    "Lebih efisien tanpa perlu mengganti aplikasi existing",
  ];

  const benefit = [
    {
      icon: <ShieldCog />,
      title: "Aman & Terpercaya",
      description:
        "Standar keamanan enterprise-grade untuk melindungi data bisnis Anda.",
    },
    {
      icon: <ArrowLeftRight />,
      title: "Data Mengalir Lancar",
      description:
        "Kurangi input manual dan hindari duplikasi data di berbagai sistem.",
    },
    {
      icon: <History />,
      title: "Lebih Cepat & Efisien",
      description:
        "Proses lebih cepat, keputusan lebih tepat, bisnis makin gesit.",
    },
    {
      icon: <ChartNoAxesColumnIncreasing />,
      title: "Siap Bertumbuh",
      description:
        "Integrasi fleksibel untuk mendukung skala bisnis yang terus berkembang.",
    },
  ];

  return (
    <section ref={integrasiRef} className="relative overflow-hidden py-20">
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary-soft blur-3xl" />
      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div
          className={`relative transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <Image
            src={IntegrasiImg}
            alt="Integrasi Sistem Finexia"
            className="w-full max-w-xl drop-shadow-2xl mt-9 mx-auto"
            width={1500}
            height={100}
          />
        </div>
        <div
          className={`transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Pill text="Integrasi Tanpa Batas"></Pill>
          <SectionTitle className="mb-4">
            Finexia Terintegrasi dengan Aplikasi Apa Pun,
            <span className="text-primary">Tanpa Ubah Sistem yang Ada</span>
          </SectionTitle>
          <SectionDescription>
            Finexia dirancang terbuka dan fleksibel. Hubungkan dengan aplikasi
            yang sudah Anda gunakan saat ini, agar data mengalir otomatis, rapi,
            dan akurat serta perputaran proses bisnis tanpa perubahan besar.
          </SectionDescription>
          <ul className="mt-6 grid gap-3 grid-cols-1">
            {integrasi.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center text-primary">
                  <CircleCheck className="h-4.5 w-4.5" strokeWidth={2} />
                </span>
                <span className="text-slate-700">{t}</span>
              </li>
            ))}
          </ul>
          <div className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 rounded-2xl bg-primary-soft/50 shadow-sm p-4 transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {benefit.map((item, index) => (
              <div
                key={index}
                className="grid place-items-center gap-1 text-center"
              >
                <span className="h-7 w-7 text-primary">{item.icon}</span>
                <h3 className="text-slate-700 font-bold leading-5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-px mx-auto mt-10 max-w-7xl">
        <div className={`rounded-lg border border-primary/80 bg-primary-soft/20 px-6 py-4 w-6/7 mx-auto transition-all duration-1000 delay-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex items-center gap-4">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary">
                <Link />
              </span>
            </div>
            <div>
              <p className="text-sm font-bold">
                Satu platform yang menyatukan semua data. Anda tetap pakai
                aplikasi favorit Anda.
              </p>
              <p className="text-sm text-primary">
                Finexia menghubungkan semua, tanpa mengubah apa yang sudah
                berjalan baik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrasiSection;
