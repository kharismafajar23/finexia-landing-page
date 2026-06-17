"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React from "react";
import Pill from "../ui/pill";
import {
  Building,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  CircleGauge,
  FileClock,
  FileSearch,
  History,
  PackageOpen,
  PhoneCall,
  ShieldCheck,
  SquaresUnite,
  Users,
  Wallet,
} from "lucide-react";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import Image from "next/image";
import PlatformImage from "@/assets/platform-img.png";
import LogoRed from "@/assets/logo/logo-red.png";

const MainFeatureSection = () => {
  const { ref: mainFeatureRef, isVisible } = useScrollReveal<HTMLElement>({ rootMargin: "-120px 0px" });
  const mainFeature = [
    {
      icon: <ChartNoAxesCombined />,
      title: "Dashboard Bisnis Terpadu",
      points: [
        "Ringkasan keuangan, stok, aset, dan performa bisnis dalam satu dashboard.",
        "Data real-time untuk keputusan cepat dan akurat.",
        "KPI penting tersaji otomatis dan mudah dipahami.",
      ],
      color: "rgba(239, 51, 64, 1)",
      backgroundColor: "rgba(255, 214, 217, 1)",
    },
    {
      icon: <Wallet />,
      title: "Pengelolaan Keuangan Lebih Mudah",
      points: [
        "Pencatatan pemasukan, pengeluaran, dan transfer",
        "Laporan keuangan otomatis (Laba Rugi, Neraca, Arus Kas)",
        "Budgeting serta kontrol pengeluaran yang lebih terstruktur.",
      ],
      color: "rgba(255, 191, 0, 1)",
      backgroundColor: "rgba(254, 239, 230, 1)",
    },
    {
      icon: <PackageOpen />,
      title: "Manajemen Stok & Barang",
      points: [
        "Pantau stok real-time di setiap gudang atau lokasi",
        "Notifikasi stok menipis dan barang mendekati expired",
        "Riwayat keluar-masuk barang tercatat otomatis.",
      ],
      color: "rgba(72, 116, 44, 1)",
      backgroundColor: "rgba(227, 247, 238, 1)",
    },
    {
      icon: <Building />,
      title: "Manajemen Aset & Inventaris",
      points: [
        "Catat seluruh aset perusahaan dengan lengkap",
        "Pantau kondisi, lokasi, dan jadwal perawatan aset",
        "Kelola depresiasi dan umur ekonomis aset dengan mudah.",
      ],
      color: "rgba(109, 164, 255, 1)",
      backgroundColor: "rgba(234, 241, 253, 1)",
    },
    {
      icon: <FileSearch />,
      title: "Kontrol Anggaran & Pengeluaran",
      points: [
        "Pengajuan anggaran online dengan alur persetujuan",
        "Plafon pembiayaan untuk menghindari over budget.",
        "Pantau realisasi anggaran secara otomatis.",
      ],
      color: "rgba(197, 132, 255, 1)",
      backgroundColor: "rgba(244, 236, 251, 1)",
    },
    {
      icon: <FileClock />,
      title: "Laporan & Analisa Otomatis",
      points: [
        "Laporan keuangan, operasional, stok, dan aset siap dalam hitungan detik.",
        "Analisa performa bisnis dengan visualisasi interaktif.",
        "Export mudah ke PDF / Excel kapan saja.",
      ],
      color: "rgba(239, 51, 64, 1)",
      backgroundColor: "rgba(254, 235, 237, 1)",
    },
  ];

  const controlItems = [
    {
      icon: <SquaresUnite />,
      title: "Data Terintegrasi",
      description: "Catat seluruh aset perusahaan dengan lengkap.",
    },
    {
      icon: <ShieldCheck />,
      title: "Aman & Terpercaya",
      description: "Sistem on-premise dengan keamanan data berlapis.",
    },
    {
      icon: <CircleGauge />,
      title: "Lebih Efisien",
      description: "Proses lebih cepat, kerja tim lebih produktif.",
    },
    {
      icon: <ChartNoAxesColumnIncreasing />,
      title: "Siap Bertumbuh",
      description: "Fleksibel mengikuti kebutuhan dan pertumbuhan bisnis Anda.",
    },
  ];

  const points = [
    {
      icon: <Users />,
      title: "700++",
      description: "Organisasi telah bergabung",
    },
    {
      icon: <ChartNoAxesColumnIncreasing />,
      title: "100K+",
      description: "Transaksi setiap hari",
    },
    {
      icon: <CircleGauge />,
      title: "99,9%",
      description: "Uptime sistem",
    },
    {
      icon: <PhoneCall />,
      title: "24/7",
      description: "Support siap membantu",
    },
  ];

  return (
    <section ref={mainFeatureRef} className="relative bg-muted/30 py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-"}`}
        >
          <Pill text="Fitur Utama Finexia"></Pill>
          <SectionTitle className="mb-4">
            Semua yang Anda butuhkan,
            <br className="hidden sm:block" />
            dalam{" "}
            <span className="text-primary">Satu Sistem Terintegerasi</span>
          </SectionTitle>
          <SectionDescription>
            Finansia menyatukan keuangan, operasional, aset, dan pelaporan dalam
            satu platform agar bisnis Anda lebih terkontrol, efisien, dan siap
            bertumbuh
          </SectionDescription>
        </div>

        <div className="grid grid-cols-12 gap-5 mt-10">
          {mainFeature.map((item, index) => (
            <div
              className={`col-span-12 sm:col-span-6 lg:col-span-4 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              key={index}
              style={{ transitionDelay: `${100 + index * 120}ms` }}
            >
              <div className="group rounded-xl border-3 border-gray-300/30 bg-background p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl h-full">
                <div className="flex justify-between items-center">
                  <div
                    className="w-15 h-15 rounded-2xl flex"
                    style={{ backgroundColor: item.backgroundColor }}
                  >
                    <div className="m-auto" style={{ color: item.color }}>
                      {item.icon}
                    </div>
                  </div>
                  <div
                    className="flex w-10 h-10 rounded-full"
                    style={{ backgroundColor: item.backgroundColor }}
                  >
                    <div
                      className="m-auto font-bold"
                      style={{ color: item.color }}
                    >
                      0{index + 1}
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-slate-600 font-bold mb-4">
                    {item.title}
                  </h3>
                  <div className="w-10 h-1 bg-primary mb-6"></div>
                  {}
                  {item.points.map((data, index) => (
                    <div className="flex gap-3 mb-2" key={index}>
                      <div className="mt-2">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      </div>
                      <p className="text-slate-600 text-sm">{data}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 rounded-3xl border-3 border-primary-soft/50 bg-background p-6 md:p-10 transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="h-1 w-20 bg-primary mb-4"></div>
          <div className="font-bold">
            Satu Platform,{" "}
            <span className="text-primary">Kontrol Penuh Bisnis Anda</span>
          </div>
          <div className="grid grid-cols-12 items-end mt-3 sm:mt-0">
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-12 gap-3">
                {controlItems.map((item, index) => (
                  <div
                    className="col-span-12 md:col-span-6 lg:col-span-3"
                    key={index}
                  >
                    <div className="w-13 h-13 bg-primary-soft rounded-2xl flex mb-6">
                      <div className="m-auto text-primary">{item.icon}</div>
                    </div>
                    <h3 className="text-base text-slate-700 font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Image
                src={PlatformImage}
                alt="Mengapa memilih Finexia"
                className="w-full max-w-xl drop-shadow-2xl mt-9"
                width={1024}
                height={896}
              />
            </div>
          </div>
        </div>

        <div
          className={`mt-10 rounded-3xl border-3 border-primary-soft/50 bg-primary-soft/30 p-6 md:p-10 hidden lg:block transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid grid-cols-5">
            <div className="flex items-center gap-3">
              <Image
                src={LogoRed}
                alt="Logo Finexia"
                width={100}
                height={100}
                className="w-15 h-15 bg-slate-700 rounded-2xl"
              ></Image>
              <div className="min-w-0">
                <h5 className="text-lg text-slate-600 font-bold">Finexia</h5>
                <p className="text-sm text-slate-600">
                  Sistem terintegrasi untuk mengelola bisnis lebih efektif dan
                  efisien.
                </p>
              </div>
            </div>
            {points.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <span className="text-primary">{item.icon}</span>
                <div>
                  <h5 className="text-base text-slate-700 font-bold">
                    {item.title}
                  </h5>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeatureSection;
