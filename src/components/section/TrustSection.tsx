"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ShieldCheck, Trophy } from "lucide-react";
import React from "react";
import Pill from "../ui/pill";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import mapIndonesia from "@/assets/indonesia-map.png";
import Image from "next/image";
import { testimoni } from "@/constant/testimoni";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TrustSection = () => {
  const { ref: trustRef, isVisible } = useScrollReveal<HTMLElement>();

  const trustPoints = [
    {
      icon: <Trophy />,
      count: "17 +",
      title: "tahun pengalaman",
      description: "dalam transformasi digital",
    },
    {
      icon: <ShieldCheck />,
      count: "700 +",
      title: "organisasi",
      description:
        "telah mempercayakan pengelolaan keuangan mereka kepada kami",
    },
  ];

  const client = [
    {
      name: "Animasi Studio",
      logo: "animasi-studio.png",
    },
    {
      name: "Excelitas",
      logo: "excelitas.png",
    },
    {
      name: "Australian Aid",
      logo: "aus-aid.png",
    },
    {
      name: "Angkasa Tour",
      logo: "angkasa-tour.png",
    },
    {
      name: "Tifa",
      logo: "tifa.png",
    },
    {
      name: "Isuzu",
      logo: "isuzu.png",
    },
    {
      name: "Intan Banjar",
      logo: "intan-banjar.png",
    },
    {
      name: "JMC Indonesia",
      logo: "jmc.png",
    },
  ];

  return (
    <section
      ref={trustRef}
      className="border-y border-border/60 bg-muted/30 py-20"
    >
      <div className="container-px mx-auto grid max-w-7xl grid-cols-12 gap-14 items-center">
        <div
          className={`col-span-12 lg:col-span-6 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Pill
            text="Dipercaya & Direkomendasikan"
            startIcon={<ShieldCheck size={18} strokeWidth={2.25} />}
          ></Pill>
          <SectionTitle>
            Dipercaya oleh 700++ organisasi di Indonesia
          </SectionTitle>
          <SectionDescription>
            Finexia merupakan solusi pengelolaan keuangan yang terpercaya untuk
            berbagai sektor industri di seluruh Indonesia.
          </SectionDescription>

          <div className="flex flex-col gap-3 mt-4">
            {trustPoints.map((item, index) => (
              <div className="flex flex-row items-center gap-8" key={index}>
                <div>
                  <div className="w-15 h-15 bg-primary-soft rounded-full flex">
                    <div className="text-primary m-auto">{item.icon}</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold">
                    <span className="text-primary">{item.count}</span>{" "}
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Image
            src={mapIndonesia}
            alt="Peta Client Finexia"
            className="w-full max-w-xl drop-shadow-2xl mx-auto"
            width={1024}
            height={896}
          />
          <div className="mt-8 grid grid-cols-12 gap-3">
            {client.map((item, index) => (
              <div
                key={index}
                className={`col-span-6 sm:col-span-3 place-items-center rounded-lg border border-border bg-background text-xs font-bold tracking-wider text-muted-foreground transition-all duration-500 ease-out p-3 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${150 + index * 80}ms` }}
              >
                <Image
                  src={`/img/client/${item.logo}`}
                  alt={`${item.name} | Client Finexia`}
                  width={110}
                  height={30}
                  className="w-full h-7 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="border-4 border-border rounded-xl px-10 pt-9 pb-20">
            <div className="text-center">
              <h3 className="uppercase text-primary font-bold mb-2">
                Apa Kata Klien Kami
              </h3>
              <p className="font-semibold text-slate-800 leading-5 w-3/4 mx-auto mb-4">
                Pengalaman bekerja sama dalam pengembangan software finexia
              </p>

              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="max-w-full"
              >
                {testimoni.map((item, index) => (
                  <SwiperSlide key={index} className="pb-7">
                    <div className="text-slate-800 text-sm mt-2.5">
                      <Image
                        src={`/img/client/${item.company_photo}`}
                        alt={`Testimoni Finexia dari ${item.company}`}
                        width={127}
                        height={41}
                        className="w-25 h-10 object-contain mb-2.5 mx-auto"
                      ></Image>
                      <p className="mb-6">{item.text}</p>
                      <Image
                        src={`/img/client/${item.photo}`}
                        alt={`Testimoni Finexia dari ${item.name}`}
                        width={120}
                        height={120}
                        className="w-21 h-21 object-cover rounded-full mb-2.5 mx-auto"
                      ></Image>
                      <p className="font-bold">{item.name}</p>
                      <p className="">{item.position}</p>
                      <p className="">{item.company}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
