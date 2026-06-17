"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React, { useState } from "react";
import Pill from "../ui/pill";
import {
  ChevronDown,
  Headset,
  MessageCircleQuestionMark,
  MessagesSquare,
  Puzzle,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";
import SectionTitle from "../ui/section-title";
import SectionDescription from "../ui/section-description";
import Image from "next/image";
import FaqImage from "@/assets/faq-img.png";

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  const { ref: faqRef, isVisible } = useScrollReveal<HTMLElement>({ rootMargin: "-120px 0px" });

  const faqs = [
    {
      icon: <MessageCircleQuestionMark size={20} />,
      question: "Apa itu Finexia?",
      answer: "-",
    },
    {
      icon: <Users size={20} />,
      question: "Siapa saja yang bisa menggunakan Finexia?",
      answer:
        "Finexia dirancang untuk berbagai jenis bisnis, mulai dari UMKM, perusahaan dagang, jasa, hingga manufaktur. Sistem kami fleksibel dan dapat disesuaikan dengan kebutuhan bisnis Anda.",
    },
    {
      icon: <ShieldCheck size={20} />,
      question: "Apakah data bisnis saya aman di Finexia?",
      answer: "-",
    },
    {
      icon: <MessageCircleQuestionMark size={20} />,
      question: "Apakah Finexia sulit digunakan?",
      answer: "-",
    },
    {
      icon: <Puzzle size={20} />,
      question: "Bisakah Finexia terintegrasi dengan sistem lain?",
      answer: "-",
    },
    {
      icon: <Wallet size={20} />,
      question: "Berapa biaya menggunakan Finexia?",
      answer: "-",
    },
    {
      icon: <Headset size={20} />,
      question: "Bagaimana jika saya butuh bantuan?",
      answer: "-",
    },
  ];
  return (
    <section ref={faqRef} className="py-20">
      <div className="container-px mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Pill
            text="FAQ"
            startIcon={<MessagesSquare size={18} strokeWidth={2.25} />}
          ></Pill>
          <SectionTitle className="mb-4">
            Pertanyaan yang Sering Diajukan{" "}
            <span className="text-primary">Seputar Finexia</span>
          </SectionTitle>
          <div className="h-1.5 w-18 bg-primary"></div>
          <SectionDescription className="text-justify mt-4">
            Kami mengerti setiap bisnis punya kebutuhan yang berbeda. Berikut
            jawaban atas pertanyaan yang paling sering kami terima dari para
            pengguna.
          </SectionDescription>
          <div className="mt-6 overflow-hidden rounded-3xl"></div>
          <Image
            src={FaqImage}
            alt="FAQ tentang Finexia"
            className="w-full max-w-xl drop-shadow-2xl mt-9 mx-auto"
            width={1500}
            height={100}
          />
          <div className="-mt-12 z-5 relative w-6/7 mx-auto">
            <div className="flex items-center flex-row gap-4 bg-primary-soft rounded-2xl p-5">
              <div>
                <div className="flex place-items-center w-10 h-10 rounded-full bg-primary/50">
                  <span className="text-primary m-auto">
                    <ShieldCheck size={24} />
                  </span>
                </div>
              </div>
              <span className="text-xs md:text-sm text-slate-700">
                Keamanan data Anda adalah prioritas kami. Finansia menggunakan
                sistem keamanan berlapis untuk melindungi informasi bisnis Anda.
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <button
              key={index}
              onClick={() => setOpen(open === index ? null : index)}
              className={`w-full rounded-2xl border-3 border-border bg-background p-5 text-left transition-all duration-700 ease-out hover:border-primary/40 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div>
                    <div className="flex place-items-center w-10 h-10 rounded-full bg-primary-soft">
                      <span className="text-primary m-auto">{item.icon}</span>
                    </div>
                  </div>
                  <span className="font-semibold">{item.question}</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition ${open === index ? "rotate-180" : ""}`}
                />
              </div>
              {open === index && (
                <div className="bg-gray-200 rounded-2xl p-4 mt-3">
                  <p className="text-sm text-justify text-slate-700">
                    {item.answer}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
