import React from "react";
import Pill from "../ui/pill";
import {
  ChartLine,
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  History,
  Quote,
  ScreenShare,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import Image from "next/image";
import DashboardImage from "@/assets/dashboard-img.png";

const DashboardSection = () => {
  const points = [
    "Ringkasan KPI penting dalam satu tampilan eksekutif",
    "Pantau performa bisnis real-time, kapan saja di mana saja",
    "Deteksi masalah lebih awal dengan insight dan notifikasi cerdas",
    "Tidak mengganggu proses bisnis yang berjalan",
  ];

  const benefit = [
    {
      icon: <ChartNoAxesColumnIncreasing />,
      title: "Visibilitas Menyeluruh",
      description:
        "Lihat semua aspek bisnis dalam satu dashboard terintegrasi.",
    },
    {
      icon: <History />,
      title: "Keputusan Lebih Cepat",
      description: "Akses data real-time untuk keputusan strategis yang tepat.",
    },
    {
      icon: <ShieldCheck />,
      title: "Kontrol Lebih Baik",
      description: "Pantau kinerja, anggaran, dan risiko dengan lebih efektif.",
    },
    {
      icon: <ChartLine />,
      title: "Pertumbuhan Berkelanjutan",
      description:
        "Data yang akurat membantu Anda merencanakan pertumbuhan bisnis.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Pill
              text="Dashboard Finexia"
              startIcon={<ScreenShare size={18} strokeWidth={2.25} />}
            ></Pill>
            <SectionTitle className="mb-4">
              Satu Dashboard untuk Mengendalikan{" "}
              <span className="text-primary">
                Seluruh Bisnis Secara Real-Time
              </span>
            </SectionTitle>
            <SectionDescription className="text-justify">
              Dashboard Finexia memberikan visibilitas menyeluruh atas kondisi
              keuangan, operasional, aset, dan performa bisnis Anda dalam satu
              layar. Semua data terintegrasi, akurat, dan selalu up-to-date
              untuk membantu Anda mengambil keputusan strategis lebih cepat dan
              tepat.
            </SectionDescription>
            <ul className="mt-4 grid gap-3 grid-cols-1">
              {points.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center text-primary">
                    <CircleCheck className="h-4.5 w-4.5" strokeWidth={2} />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-lg border-2 border-primary/80 bg-primary-soft/20 px-6 py-4 mt-7">
              <div className="flex items-center gap-4">
                <div>
                  <span className="grid h-12 w-12 place-items-center text-primary">
                    <Quote size={24} strokeWidth={2} />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">
                    Dari melihat laporan, menjadi mengendalikan bisnis.
                  </p>
                  <p className="text-sm text-primary">
                    Finexia, pusat kendali bisnis untuk para pemimpin.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Image
              src={DashboardImage}
              alt="Integrasi Sistem Finexia"
              className="w-full max-w-xl drop-shadow-2xl mt-9 mx-auto"
              width={1500}
              height={100}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 rounded-2xl bg-primary-soft/50 shadow-sm px-4 py-10">
          {benefit.map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              <div>
                <div className="h-12 w-12 flex place-items-center rounded-full bg-primary-soft">
                  <span className=" m-auto text-primary">{item.icon}</span>
                </div>
              </div>
              <div>
                <h5 className="text-sm text-slate-700 font-bold">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
