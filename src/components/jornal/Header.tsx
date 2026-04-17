import { useState } from "react";
import { Moon } from "lucide-react";
import logoPonte from "@/assets/logo-ponte.png";
import iconLibras from "@/assets/libras.png";
import iconWhatsapp from "@/assets/icon-whatsapp.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconFacebook from "@/assets/icon-facebook.png";

export function Header() {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  return (
    <div className="pt-3 pb-2 relative">
      {/* Mobile: barra de ícones acima do logo (oculta em sm+) */}
      <div className="flex sm:hidden items-center justify-center gap-5 mb-3 px-1">
        <a href="#" aria-label="WhatsApp" className="hover:opacity-80 transition-opacity">
          <img src={iconWhatsapp} alt="WhatsApp" className="h-6 w-6 object-contain" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
          <img src={iconInstagram} alt="Instagram" className="h-6 w-6 object-contain" />
        </a>
        <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
          <img src={iconFacebook} alt="Facebook" className="h-6 w-6 object-contain" />
        </a>
        <button aria-label="Modo escuro" className="text-foreground/80 hover:opacity-70 transition-opacity">
          <Moon size={22} />
        </button>
        <button aria-label="Libras" className="hover:opacity-70 transition-opacity">
          <img src={iconLibras} alt="Libras" className="h-6 w-6 object-contain" />
        </button>
      </div>

      {/* Desktop: ícones de lua e libras no canto superior direito (oculto em mobile) */}
      <div className="hidden sm:flex absolute right-0 top-3 flex-col items-center gap-2">
        <button aria-label="Modo escuro" className="text-foreground/80 hover:opacity-70 transition-opacity">
          <Moon size={22} />
        </button>
        <button aria-label="Libras" className="hover:opacity-70 transition-opacity">
          <img src={iconLibras} alt="Libras" className="h-6 w-6 object-contain" />
        </button>
      </div>

      <h1 className="font-['Oswald'] font-bold text-jm-green-dark text-center leading-none tracking-tight text-[44px] sm:text-[68px] md:text-[88px] flex items-center justify-center gap-2 sm:gap-4">
        <span>Jornal</span>
        <img src={logoPonte} alt="Ponte de Marabá" className="h-[0.7em] w-auto inline-block" />
        <span>Marabá</span>
      </h1>

      <nav className="mt-3 text-center font-bold text-[15px] sm:text-[17px] text-foreground">
        <span className="inline-flex flex-wrap justify-center gap-x-2 gap-y-1">
          {[
            "Cidadania",
            "Comércio",
            "Notícias",
            "Política",
            "Saúde",
            "Colunistas",
            "Veículos",
            "Imóveis",
            "Eventos",
            "Fala Povo",
          ].map((item, i, arr) => (
            <span key={item} className="inline-flex items-center gap-2">
              <a href="#" className="hover:text-jm-green">
                {item}
              </a>
              {i < arr.length - 1 && <span className="text-foreground/40">-</span>}
            </span>
          ))}
        </span>
      </nav>

      {!cookieAccepted && (
      <div className="mt-3 rounded-sm bg-jm-cream/80 px-3 py-2 text-[12px] sm:text-[13px] text-foreground/80 flex items-start sm:items-center justify-between gap-3 border border-jm-yellow/40">
        <p className="leading-snug">
          Utilizamos cookies e outras tecnologias semelhantes para melhorar a sua experiência no portal,
          personalizando publicidades, recomendando conteúdos e oferecendo serviços. Saiba a respeito consultando
          a nossa página de{" "}
          <a href="#" className="text-jm-green underline">
            Política de Privacidade
          </a>
          .
        </p>
        <button
          onClick={() => setCookieAccepted(true)}
          className="shrink-0 bg-[#1e6fe0] hover:bg-[#1859b8] text-white text-[12px] font-bold px-3 py-2 rounded-sm">
          OK, PROSSEGUIR!
        </button>
      </div>
      )}
    </div>
  );
}

function BridgeIcon() {
  return (
    <svg
      viewBox="0 0 120 60"
      className="h-[0.7em] w-auto inline-block text-jm-green-dark"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
    >
      <path d="M5 50 L60 10 L115 50" />
      <path d="M5 50 L115 50" />
      <path d="M30 50 L40 28" />
      <path d="M50 50 L55 18" />
      <path d="M70 50 L65 18" />
      <path d="M90 50 L80 28" />
    </svg>
  );
}
