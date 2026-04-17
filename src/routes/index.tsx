import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/jornal/TopBar";
import { Header } from "@/components/jornal/Header";
import { TopBanner } from "@/components/jornal/TopBanner";
import { Poll } from "@/components/jornal/Poll";
import { PrefeituraBanner } from "@/components/jornal/PrefeituraBanner";
import { JornalCidade } from "@/components/jornal/JornalCidade";
import { NewsGrid } from "@/components/jornal/NewsGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jornal Marabá — Cidadania, Comércio e Notícias" },
      {
        name: "description",
        content:
          "Jornal Marabá: notícias, cidadania, comércio, política, saúde e eventos da cidade de Marabá - Pará.",
      },
      { property: "og:title", content: "Jornal Marabá" },
      {
        property: "og:description",
        content: "Notícias e informações de Marabá - Pará.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <TopBar />
      <main className="mx-auto max-w-6xl px-3 sm:px-4">
        <Header />
        <TopBanner />
        <div className="border-b-2 border-jm-green my-3" />
        <Poll />
        <div className="border-b-2 border-jm-green my-3" />
        <PrefeituraBanner />
        <div className="border-b-2 border-jm-green my-4" />
        <JornalCidade />
        <div className="border-b-2 border-jm-green my-4" />
        <NewsGrid />
      </main>
      <footer className="mt-8 bg-jm-green-dark py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Jornal Marabá — Todos os direitos reservados
      </footer>
    </div>
  );
}
