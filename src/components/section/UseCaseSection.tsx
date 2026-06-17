"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React from "react";
import Pill from "../ui/pill";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import {
  BriefcaseBusiness,
  ChartLine,
  Factory,
  GraduationCap,
  HeartPulse,
  Puzzle,
  ShieldCheck,
  ShoppingCart,
  Waypoints,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import LogoRed from "@/assets/logo/logo-red.png";

const UseCaseSection = () => {
  const { ref: useCaseRef, isVisible } = useScrollReveal<HTMLElement>({ rootMargin: "-120px 0px" });
  const industries = [
    {
      icon: <ShoppingCart />,
      image: "retail.png",
      title: "Retail & Distributor",
      description:
        "Kelola stok, penjualan, dan keuangan dari banyak cabang dalam satu sistem.",
      points: [
        "Stok real-time multi gudang",
        "Penjualan & retur terintegrasi",
        "Laporan penjualan per cabang",
      ],
      color: "rgba(239, 51, 64, 1)",
      backgroundColor: "rgba(255, 214, 217, 1)",
    },
    {
      icon: <Factory />,
      image: "manufaktur.png",
      title: "Manufaktur",
      description:
        "Kontrol proses produksi, biaya, dan aset untuk tingkatkan efisiensi.",
      points: [
        "Bill of Material (BOM)",
        "Perhitungan HPP akurat",
        "Mesin & aset produksi terkelola",
      ],
      color: "rgba(109, 164, 255, 1)",
      backgroundColor: "rgba(234, 241, 253, 1)",
    },
    {
      icon: <Wrench />,
      image: "konstruksi.png",
      title: "Konstruksi & Proyek",
      description:
        "Pantau anggaran, progres proyek, dan arus kas secara real-time.",
      points: [
        "Budget vs realisasi proyek",
        "Manajemen subcontractor",
        "Progress & termin pembayaran",
      ],
      color: "rgba(255, 191, 0, 1)",
      backgroundColor: "rgba(254, 239, 230, 1)",
    },
    {
      icon: <BriefcaseBusiness />,
      image: "jasa.png",
      title: "Jasa & Konsultan",
      description:
        "Kelola proyek, tim, dan keuangan layanan dengan lebih terstruktur.",
      points: [
        "Manajemen proyek & task",
        "Timesheet & biaya layanan",
        "Profitabilitas per proyek",
      ],
      color: "rgba(197, 132, 255, 1)",
      backgroundColor: "rgba(244, 236, 251, 1)",
    },
    {
      icon: <HeartPulse />,
      image: "kesehatan.png",
      title: "Kesehatan",
      description:
        "Kelola operasional fasilitas kesehatan dan keuangan dengan patuh regulasi.",
      points: [
        "Manajemen inventaris medis",
        "Aset & peralatan terpantau",
        "Laporan keuangan terstandar",
      ],
      color: "rgba(72, 116, 44, 1)",
      backgroundColor: "rgba(227, 247, 238, 1)",
    },
    {
      icon: <GraduationCap />,
      image: "pendidikan.png",
      title: "Pendidikan",
      description:
        "Kelola biaya, aset, dan operasional institusi pendidikan lebih mudah.",
      points: [
        "Manajemen biaya pendidikan",
        "Aset sekolah & fasilitas",
        "Laporan keuangan institusi",
      ],
      color: "rgba(221,198,131,1)",
      backgroundColor: "rgba(245, 237, 215, 1)",
    },
  ];

  const points = [
    {
      icon: <Puzzle />,
      title: "Fleksibel",
      description:
        "Menyesuaikan alur kerja dan kebutuhan unik setiap industri.",
    },
    {
      icon: <Waypoints />,
      title: "Terintegrasi",
      description:
        "Semua modul terhubung untuk data yang konsisten dan akurat.",
    },
    {
      icon: <ChartLine />,
      title: "Scalable",
      description: "Siap tumbuh bersama bisnis Anda, dari today hingga future.",
    },
    {
      icon: <ShieldCheck />,
      title: "Aman",
      description:
        "Keamanan data kelas enterprise untuk ketenangan bisnis Anda.",
    },
  ];

  return (
    <section id="use-case" ref={useCaseRef} className="py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <Pill text="Use Case Industri"></Pill>
          <SectionTitle className="mb-4">
            Hadir untuk Berbagai Industri,
            <br className="hidden sm:block" />
            <span className="text-primary">Dukung Cara Kerja Anda</span>
          </SectionTitle>
          <SectionDescription>
            Finexia digunakan di berbagai industri dengan kebutuhan yang
            berbeda. Satu sistem terintegrasi untuk mengelola operasional dan
            keuangan bisnis Anda secara efisien.
          </SectionDescription>
        </div>

        <div className="grid grid-cols-12 gap-5 mt-10">
          {industries.map((item, index) => (
            <div
              key={index}
              className={`col-span-6 md:col-span-4 lg:col-span-2 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="group rounded-xl border-3 border-gray-300/30 bg-background p-4 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl h-full">
                <div
                  className="w-15 h-15 rounded-2xl hidden lg:flex mx-auto"
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <div className="m-auto" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <Image
                  src={`/img/use-case/${item.image}`}
                  alt={item.title}
                  width={200}
                  height={150}
                  className="my-4 rounded-xl"
                ></Image>
                <div className="">
                  <h3 className="text-slate-600 font-bold leading-5 mb-2">
                    {item.title}
                  </h3>
                  <div className="w-10 h-1 bg-primary mb-2"></div>
                  <p className="text-slate-600 text-sm mb-3">
                    {item.description}
                  </p>
                  {item.points.map((data, index) => (
                    <div className="flex gap-3" key={index}>
                      <div className="mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
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
          className={`mt-10 rounded-3xl bg-primary-soft/30 p-6 hidden lg:block transition-all duration-1000 delay-200 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid grid-cols-5 gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={LogoRed}
                alt="Logo Finexia"
                width={100}
                height={100}
                className="w-15 h-15 bg-slate-700 rounded-2xl"
              ></Image>
              <div className="min-w-0">
                <p className="font-bold text-sm text-slate-700">
                  Finexia beradaptasi dengan model bisnis Anda, bukan
                  sebaliknya.
                </p>
              </div>
            </div>
            {points.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <div>
                  <div className="h-12 w-12 flex place-items-center rounded-full bg-primary-soft">
                    <span className="text-primary m-auto">{item.icon}</span>
                  </div>
                </div>
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

export default UseCaseSection;
