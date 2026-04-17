import newsCidadania from "@/assets/news-cidadania.jpg";
import newsPolitica from "@/assets/news-politica.jpg";
import newsComercio from "@/assets/news-comercio.jpg";
import newsSaude from "@/assets/news-saude.jpg";
import newsNoticia from "@/assets/news-noticia.jpg";
import newsRedacao from "@/assets/news-redacao.jpg";

const NEWS = [
  {
    cat: "Cidadania",
    title:
      "Procon Marabá, Guarda Municipal e Vigilância Sanitária promovem ações defendendo consumidores",
    img: newsCidadania,
  },
  {
    cat: "Política",
    title:
      'Prefeito Toni Cunha (PL) versus impeachment e a cambeta "Teoria do Cavalo Morto" dos opositores',
    img: newsPolitica,
  },
  {
    cat: "Comércio",
    title:
      "MIX IMPORTADOS revela qualidade a preços imbatíveis desde a Black Friday, Natal e também no material escolar",
    img: newsComercio,
  },
  {
    cat: "Saúde",
    title:
      "Cirurgia refrativa marca a excelência em Marabá do procedimento capaz de eliminar uso dos óculos",
    img: newsSaude,
  },
  {
    cat: "Notícia",
    title:
      "Expansão da doença Leishmaniose pode causar óbitos em pets ameaçando também humanos. Prevenção começa em casa",
    img: newsNoticia,
  },
  {
    cat: "Da Redação",
    title:
      "Jornal da Cidade Marabá impresso e Jornal Marabá digital são bem recebidos pelos políticos da cidade",
    img: newsRedacao,
  },
];

export function NewsGrid() {
  return (
    <section className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-6 py-2">
      {NEWS.map((n) => (
        <article key={n.title} className="border-b border-foreground/15 pb-3">
          <h3 className="font-serif italic font-bold text-jm-green-dark text-lg border-b border-jm-yellow mb-2 pb-1">
            {n.cat}
          </h3>
          <div className="flex gap-2">
            <img
              src={n.img}
              alt={n.cat}
              width={512}
              height={512}
              loading="lazy"
              className="aspect-square w-14 sm:w-20 shrink-0 object-cover border border-foreground/10"
            />
            <p className="text-[13px] leading-snug">
              <strong>{n.title.split(" ").slice(0, 3).join(" ")}</strong>{" "}
              {n.title.split(" ").slice(3).join(" ")}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
