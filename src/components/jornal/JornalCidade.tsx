import jornalImpresso from "@/assets/jornal-impresso.png";

export function JornalCidade() {
  return (
    <section className="grid grid-cols-1 gap-4">
      <div>
        <div className="overflow-hidden border border-foreground/10">
          <img
            src={jornalImpresso}
            alt="Capa da edição impressa do Jornal da Cidade de Marabá"
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
        <p className="mt-2 text-[12px] text-foreground/70 italic leading-snug">
          Personalidades atuantes no município planejam e sugerem fortalecimento na qualidade de vida e bem-estar
          da população com modernidade profissionalismo e capacitação a partir deste e dos próximos meses de 2026.
        </p>
      </div>
    </section>
  );
}
