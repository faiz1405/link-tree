"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Globe, Share2, ShoppingBag } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LINKS = [
  {
    id: 1,
    title: "TikTok",
    url: "https://www.tiktok.com/@ceritacerdik",
    icon: TikTokIcon,
  },
  {
    id: 2,
    title: "Instagram",
    url: "https://www.instagram.com/ceritacerdik/",
    icon: InstagramIcon,
  },
  {
    id: 3,
    title: "Facebook",
    url: "https://www.tiktok.com/@ceritacerdik",
    icon: FacebookIcon,
  },
  {
    id: 4,
    title: "Website Resmi",
    url: "https://www.cerita-cerdik.my.id/",
    icon: Globe,
  },
];

const AFFILIATES = [
  { id: 1, title: "Spesial Pilihan 1", url: "https://s.shopee.co.id/BTpT9vMgK" },
  { id: 2, title: "Spesial Pilihan 2", url: "https://s.shopee.co.id/1VzD3T6i9c" },
  { id: 3, title: "Spesial Pilihan 3", url: "https://s.shopee.co.id/5fom141CCC" },
  { id: 4, title: "Spesial Pilihan 4", url: "https://s.shopee.co.id/20vSsOoeeB" },
  { id: 5, title: "Spesial Pilihan 5", url: "https://s.shopee.co.id/8AW4gcB8TO" },
  { id: 6, title: "Spesial Pilihan 6", url: "https://s.shopee.co.id/2gB6UDfNvG" },
  { id: 7, title: "Spesial Pilihan 7", url: "https://s.shopee.co.id/20vL0Dt8TG" },
  { id: 8, title: "Spesial Pilihan 8", url: "https://s.shopee.co.id/gPvnQpEks" },
  { id: 9, title: "Spesial Pilihan 9", url: "https://s.shopee.co.id/7AdNsBaYxY" },
  { id: 10, title: "Spesial Pilihan 10", url: "https://s.shopee.co.id/9AOQl8SbXq" },
  { id: 11, title: "Spesial Pilihan 11", url: "https://s.shopee.co.id/2BEend9xry" },
  { id: 12, title: "Spesial Pilihan 12", url: "https://s.shopee.co.id/4qFOKquWw3" },
  { id: 13, title: "Spesial Pilihan 13", url: "https://s.shopee.co.id/6fh0ugPbTq" },
  { id: 14, title: "Spesial Pilihan 14", url: "https://s.shopee.co.id/6q0PZ8b3yw" },
  { id: 15, title: "Spesial Pilihan 15", url: "https://s.shopee.co.id/2BEYLFjjGL" },
];

export default function LinktreePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAffiliates, setShowAffiliates] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".animate-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      );
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.4,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleShare = async () => {
    const shareData = {
      title: "Cerita Cerdik | Animasi Ki Udin",
      text: "Kisah Ki Udin & kelucuan warga desa. Tonton animasi stop-motion terseru di sini! 👇",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert("Tautan berhasil disalin ke clipboard!");
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center px-4 py-12 overflow-x-hidden selection:bg-primary selection:text-white">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#D7CCC8]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#C8E6C9]/40 rounded-full blur-3xl" />
      </div>

      <main
        ref={containerRef}
        className="w-full max-w-md flex flex-col items-center pb-12"
      >
        <header className="animate-item flex flex-col items-center text-center">
          <div className="relative w-28 h-28 mb-4 rounded-full p-1 bg-gradient-to-tr from-primary to-[#8D6E63] shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-white relative">
              <Image
                src="/logo.png"
                alt="Cerita Cerdik Avatar"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 128px) 100vw, 128px"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-[#3E2723] dark:text-[#F4F1EA]">
            Cerita Cerdik
          </h1>
          <p className="text-sm mt-1 font-medium text-[#5D4037] dark:text-[#D7CCC8]">
            Kisah Ki Udin & kelucuan warga desa. Tonton animasi stop-motion
            terseru di sini! 👇
          </p>
        </header>

        <section className="animate-item w-full mt-8 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="glassmorphism w-full flex items-center p-4 rounded-full transition-colors hover:bg-white/60 dark:hover:bg-black/40 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              tabIndex={0}
            >
              <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-black/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <link.icon className="w-5 h-5" />
              </div>
              <span className="flex-1 text-center font-semibold pr-10 text-[#4E342E] dark:text-[#EFEBE9]">
                {link.title}
              </span>
            </a>
          ))}
        </section>

        <section className="animate-item w-full mt-4 flex flex-col gap-4">
          <button
            onClick={() => setShowAffiliates(!showAffiliates)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="glassmorphism w-full flex items-center p-4 rounded-full transition-colors hover:bg-white/60 dark:hover:bg-black/40 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary relative overflow-hidden"
            tabIndex={0}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform z-10">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="flex-1 text-center font-bold pr-10 text-orange-700 dark:text-orange-300 z-10">
              🛍️ Promo Spesial Ki Udin (Shopee)
            </span>
          </button>

          {showAffiliates && (
            <div className="flex flex-col gap-3 mt-2 px-2 pb-4">
              {AFFILIATES.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glassmorphism flex items-center justify-between p-3 px-5 rounded-full transition-colors hover:bg-white/80 dark:hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="font-semibold text-sm text-[#4E342E] dark:text-[#EFEBE9]">
                    {item.title}
                  </span>
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-bold">
                    Lihat
                  </span>
                </a>
              ))}
            </div>
          )}
        </section>

        <footer className="animate-item w-full mt-14 flex flex-col items-center gap-6">
          <button
            onClick={handleShare}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#271714] shadow-sm text-[#4E342E] dark:text-[#EFEBE9] font-medium text-sm hover:shadow-md transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            tabIndex={0}
          >
            <Share2 className="w-4 h-4" />
            Bagikan Profil
          </button>
          <div className="text-center">
            <p className="text-xs font-medium text-[#795548] dark:text-[#BCAAA4]">
              © {new Date().getFullYear()} Cerita Cerdik.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
