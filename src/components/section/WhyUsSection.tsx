"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React from "react";
import Pill from "../ui/pill";
import {
  BadgeCheck,
  FileChartLine,
  History,
  Monitor,
  Puzzle,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import Image from "next/image";
import WhyUsImage from "@/assets/why-choose-us-img.png";
import LogoRed from "@/assets/logo/logo-red.png";

const WhyUsSection = () => {
  const { ref: whyUsRef, isVisible } = useScrollReveal<HTMLElement>();
  const features = [
    {
      icon: <Puzzle />,
      title: "Tidak Perlu Banyak Sistem Lagi",
      description:
        "Seluruh kebutuhan bisnis mulai dari pencatatan hingga pemantauan tersedia dalam satu aplikasi.",
    },
    {
      icon: <FileChartLine />,
      title: "Mengurangi Kesalahan Manual",
      description:
        "Tidak ada lagi input data berulang atau rekap manual yang rentan kesalahan.",
    },
    {
      icon: <History />,
      title: "Lebih Hemat Waktu & Biaya Operasional",
      description:
        "Proses yang biasanya memakan waktu berjam-jam kini dapat diselesaikan dalam hitungan menit.",
    },
    {
      icon: <ShieldCheck />,
      title: "Kontrol Bisnis Lebih Jelas",
      description:
        "Anda dapat mengetahui aliran pengeluaran, performa bisnis, serta hal-hal yang perlu diperbaiki.",
    },
    {
      icon: <Monitor />,
      title: "Monitoring Lebih Mudah & Real-Time",
      description:
        "Kondisi bisnis bisa dipantau kapan saja tanpa harus menunggu laporan bulanan.",
    },
    {
      icon: <Rocket />,
      title: "Siap untuk Bisnis yang Bertumbuh",
      description:
        "Finexia dirancang mengikuti pertumbuhan  bisnis Anda, tanpa perlu mengganti  di tengah jalan.",
    },
  ];

  const bullet = [
    "Laporan dan Analisa",
    "Keuangan",
    "Stok & Inventori",
    "Penjualan",
    "Pembelian",
    "Dan Lainnya",
  ];

  return (
    <section ref={whyUsRef} className="relative overflow-hidden py-20">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-soft blur-3xl" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10">
          <div
            className={`col-span-2 lg:col-span-1 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <Pill
              text="Mengapa Finexia Tepat untuk Organisasi Anda"
              startIcon={<ShieldCheck size={18} strokeWidth={2.25} />}
            ></Pill>
            <SectionTitle>
              Semua yang Anda butuhkan, ada dalam satu Platform yang{" "}
              <span className="text-primary">Lebih Sederhana & Efisien</span>
            </SectionTitle>
            <div className="bg-primary h-1.5 w-15 mb-6"></div>
            <SectionDescription>
              Finexia memudahkan Anda dalam mengelola keuangan serta operasional
              bisnis, dengan cara yang lebih cepat, praktis, dan saling
              terhubung.
            </SectionDescription>
            <Image
              src={WhyUsImage}
              alt="Mengapa memilih Finexia"
              className="w-full max-w-xl drop-shadow-2xl mt-9 mx-auto"
              width={1024}
              height={896}
            />
          </div>
          <div
            className={`col-span-2 lg:col-span-1 mb-10 transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="grid grid-cols-2 gap-2">
              {features.map((item, index) => (
                <div className="col-span-2 sm:col-span-1" key={index}>
                  <div className="rounded-2xl border border-border bg-background p-5 transition hover:border-primary/40 hover:shadow-md h-full shadow">
                    <div className="flex items-center gap-4">
                      <div className="grid h-15 w-15 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-primary font-bold">
                          0{index + 1}
                        </div>
                        <div className="text-slate-700 leading-5 font-bold mb-4">
                          {item.title}
                        </div>
                        <div className="bg-primary h-1 w-10"></div>
                      </div>
                    </div>
                    <div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`bg-slate-200 p-5 rounded-sm w-full lg:w-5/6 mx-auto transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex items-center gap-3">
              <div className="bg-slate-700 rounded-sm sm:rounded-2xl">
                <Image
                  src={LogoRed}
                  alt="Logo Finexia"
                  width={100}
                  height={100}
                ></Image>
              </div>
              <h3 className="block sm:hidden text-lg text-slate-700 font-bold">
                Satu Platform Terintegerasi untuk Semua Kebutuhan Bisnis Anda
              </h3>
            </div>
            <div>
              <h3 className="hidden sm:block text-2xl text-slate-700 font-bold mb-6">
                Satu Platform Terintegerasi untuk Semua Kebutuhan Bisnis Anda
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                {bullet.map((item, index) => (
                  <div key={index}>
                    <BadgeCheck
                      size={20}
                      strokeWidth={2.5}
                      className="inline text-primary me-1"
                    />
                    <span className="text-slate-700 font-semibold text-base sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
