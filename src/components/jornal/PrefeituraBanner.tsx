import cardEditorial from "@/assets/card-editorial.jpg";
import cardSaude from "@/assets/card-saude.jpg";
import cardRodas from "@/assets/card-rodas.jpg";

export function PrefeituraBanner() {
  return (
    <section className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-stretch border border-foreground/10">
        <div className="sm:col-span-2 bg-jm-yellow flex items-center px-4 py-3">
          <p className="font-serif text-jm-green-dark text-lg sm:text-2xl leading-tight">
            <strong>PREFEITURA</strong> e você,
            <br />
            Mais <strong>CIDADANIA</strong> e<br />
            <strong>DESENVOLVIMENTO</strong>
          </p>
        </div>
        <div className="bg-jm-green text-white flex flex-col items-center justify-center py-4 px-3 text-center">
          <div className="text-[11px] uppercase tracking-wide">Prefeitura de</div>
          <div className="font-serif font-black text-2xl sm:text-3xl leading-none">MARABÁ</div>
          <div className="text-[10px] mt-1 opacity-80">UM GOVERNO POR VOCÊ</div>
        </div>
      </div>

      <div className="bg-jm-red text-white text-center font-bold text-[13px] sm:text-[15px] px-3 py-2">
        Leia e anuncie em 10.000 JORNAIS IMPRESSOS distribuídos
        <br className="hidden sm:block" />
        GRATUITAMENTE no COMÉRCIO e CONDOMÍNIOS da cidade!
      </div>

      <p className="text-center text-[12px] sm:text-[13px] italic text-foreground/70">
        “A penalização é por você não participar da política e acabar sendo governado pelos seus inferiores.”
        (Platão, filósofo grego — Livro: <em>A República</em>)
      </p>

    </section>
  );
}
