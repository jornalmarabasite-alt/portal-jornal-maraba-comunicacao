import { useEffect, useState } from "react";
import iconWhatsapp from "@/assets/icon-whatsapp.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconFacebook from "@/assets/icon-facebook.png";

// Marabá - PA coordinates
const LAT = -5.3686;
const LON = -49.1178;

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function TopBar() {
  const [temp, setTemp] = useState<number | null>(null);
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setToday(formatDate(new Date()));

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m&timezone=America%2FBelem`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const t = data?.current?.temperature_2m;
        if (typeof t === "number") setTemp(Math.round(t));
      })
      .catch(() => {
        /* silent fail — keep placeholder */
      });
  }, []);

  return (
    <div className="w-full bg-jm-yellow-light border-b border-jm-yellow/60">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13px] text-foreground/80">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>{temp !== null ? `${temp}º` : "--º"} Marabá - Pará</span>
          <span suppressHydrationWarning>{today || "Carregando..."}</span>
          <span className="hidden md:inline">113ª ano de emancipação</span>
        </div>
        <div className="flex items-center gap-3">
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
            <a href="#" className="hover:text-jm-green">Home</a>
            <span className="text-foreground/30">·</span>
            <a href="#" className="hover:text-jm-green">Quem Somos</a>
            <span className="text-foreground/30">·</span>
            <a href="#" className="hover:text-jm-green">Fale Conosco</a>
            <span className="text-foreground/30">·</span>
            <a href="#" className="hover:text-jm-green">Política de Privacidade</a>
          </nav>
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-jm-yellow/60">
            <a href="#" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
              <img src={iconWhatsapp} alt="WhatsApp" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
              <img src={iconInstagram} alt="Instagram" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
              <img src={iconFacebook} alt="Facebook" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
