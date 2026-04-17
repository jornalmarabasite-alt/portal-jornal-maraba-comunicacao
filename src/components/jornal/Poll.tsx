import { useState } from "react";
import { toast } from "sonner";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const VEREADORES = [
  "Aerton Grande – União Brasil (Aerton Lima da Cruz)",
  "Cabo Rodrigo – PL (Rodrigo Lima da Silva)",
  "Dato do Ônibus – União Brasil (Deodato do Espírito Santo)",
  "Dean Guimarães – PSD (Claudean Pereira Guimarães)",
  "Drª Cristina Mutran – MDB (Maria Cristina Coimbra Mutran)",
  "Fernando Henrique – PL (Fernando Henrique Pereira da Silva)",
  "Ilker Moraes – MDB (Ilker Moraes Ferreira)",
  "Jocenilson Souza – PRD (Jocenilson Silva Souza)",
  "Maiana Stringari – PDT (Maiana Clara Rodrigues Stringari)",
  "Marcelo Alves – PT (Marcelo Alves dos Santos)",
  "Márcio do São Félix – PSDB (Antônio Márcio Farias Gonçalves)",
  "Marcos Andrade – PSD (Marcos Almeida Sousa de Andrade)",
  "Marcos Paulo da Agricultura – PDT (Marcos Paulo Eleres Pereira)",
  "Orlando Elias – PSB (Orlando da Silva Elias)",
  "Pacheco – PL (Jimmyson Mesquita Pacheco)",
  "Pastor Ronisteu – PL (Ronisteu da Silva Araújo)",
  "Pedrinho Corrêa – PRD (Pedro Corrêa Lima)",
  "Priscila Veloso – PSD (Priscila Duarte Veloso da Silva)",
  "Ronaldo da 33 – PDT (Ronaldo Alves Araújo)",
  "Ubirajara Sompré – MDB (Ubirajara Nazareno Sompré)",
  "Vanda Américo – União Brasil (Vanda Régia Américo Gomes)",
];

export function Poll() {
  const [bons, setBons] = useState<string[]>([]);
  const [destaque, setDestaque] = useState("");
  const [desempenho, setDesempenho] = useState("");
  const [voted, setVoted] = useState(false);

  const toggleBom = (nome: string) => {
    setBons((prev) => {
      if (prev.includes(nome)) return prev.filter((n) => n !== nome);
      if (prev.length >= 5) {
        toast.error("Selecione no máximo 5 vereadores.");
        return prev;
      }
      return [...prev, nome];
    });
  };

  const handleVote = () => {
    if (!desempenho || bons.length === 0 || !destaque) {
      toast.error("Responda todas as perguntas antes de votar.");
      return;
    }
    const stored = JSON.parse(localStorage.getItem("jm-poll") || "{}");
    stored[`desempenho:${desempenho}`] = (stored[`desempenho:${desempenho}`] || 0) + 1;
    bons.forEach((n) => {
      stored[`bons:${n}`] = (stored[`bons:${n}`] || 0) + 1;
    });
    stored[`destaque:${destaque}`] = (stored[`destaque:${destaque}`] || 0) + 1;
    localStorage.setItem("jm-poll", JSON.stringify(stored));
    setVoted(true);
    toast.success("Voto registrado. Obrigado pela participação!");
  };

  const handleResult = () => {
    const stored = JSON.parse(localStorage.getItem("jm-poll") || "{}") as Record<string, number>;
    const entries = Object.entries(stored);
    if (entries.length === 0) {
      toast("Ainda não há votos registrados.");
      return;
    }
    const top = entries
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([k, v]) => `${k.replace(/^(bons|destaque):/, "")}: ${v}`)
      .join(" • ");
    toast(top, { duration: 8000 });
  };

  return (
    <section className="py-2 text-center">
      <div className="inline-block bg-black text-jm-yellow font-bold px-4 py-1 text-[15px]">
        Enquete Popular
      </div>

      <p className="mt-3 text-[15px] sm:text-[17px]">
        O <strong>desempenho</strong> da <strong>Câmara Municipal de Marabá</strong> em 2025 foi
      </p>

      <div className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[14px] font-bold">
        {[
          { label: "BOM", value: "BOM", color: "bg-blue-500" },
          { label: "RAZOÁVEL", value: "RAZOÁVEL", color: "bg-gray-500" },
          { label: "RUIM", value: "RUIM", color: "bg-jm-red" },
        ].map(({ label, value, color }) => (
          <button
            key={value}
            onClick={() => setDesempenho(value)}
            className={`flex items-center gap-2 px-3 py-1 rounded-sm border-2 transition-all ${
              desempenho === value
                ? "border-foreground/60 bg-foreground/10 scale-105"
                : "border-transparent hover:border-foreground/20"
            }`}
          >
            <span className={`h-3 w-3 rounded-full ${color} inline-block`} />
            {label}
          </button>
        ))}
      </div>

      <p className="mt-4 font-['Arial'] text-[15px] sm:text-[17px]">
        Escolha <strong>ATÉ 5 VEREADORES(as) DE BONS PROJETOS DE LEI</strong> em 2025:
      </p>
      <div className="mt-2 mx-auto w-full max-w-md">
        <Popover>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-2 border border-foreground/30 bg-white px-3 py-2 text-[14px] rounded-sm hover:border-jm-green focus:outline-none focus:border-jm-green text-left"
            >
              <span className="flex flex-wrap gap-1 flex-1 min-w-0">
                {bons.length === 0 ? (
                  <span className="text-foreground/50">Selecione até 5 vereadores...</span>
                ) : (
                  bons.map((b) => (
                    <Badge key={b} variant="secondary" className="gap-1 pr-1">
                      {b.split(" (")[0]}
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBom(b);
                        }}
                        className="hover:text-jm-red"
                        aria-label={`Remover ${b}`}
                      >
                        <X className="h-3 w-3" />
                      </span>
                    </Badge>
                  ))
                )}
              </span>
              <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
            <Command>
              <CommandInput placeholder="Buscar vereador..." />
              <CommandList>
                <CommandEmpty>Nenhum vereador encontrado.</CommandEmpty>
                <CommandGroup>
                  {VEREADORES.map((v) => {
                    const checked = bons.includes(v);
                    const [nomeCurto, nomeCivil] = v.split(" (");
                    return (
                      <CommandItem
                        key={v}
                        value={v}
                        onSelect={() => toggleBom(v)}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            checked ? "opacity-100 text-jm-green" : "opacity-0",
                          )}
                        />
                        <span className="font-['Arial']">
                          {nomeCurto}{" "}
                          {nomeCivil && <span className="italic text-foreground/60">({nomeCivil}</span>}
                        </span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <p className="text-[11px] text-foreground/60 mt-1">
          Selecionados: {bons.length}/5
        </p>
      </div>

      <p className="mt-4 font-['Arial'] text-[15px] sm:text-[17px]">
        De até 5 escolhas, <strong>O MAIOR DESTAQUE na EXCELÊNCIA DO MANDATO</strong> foi:
      </p>
      <div className="mt-2 flex justify-center">
        <select
          value={destaque}
          onChange={(e) => setDestaque(e.target.value)}
          className="w-full max-w-md border border-foreground/30 bg-white px-3 py-2 text-[14px] rounded-sm focus:outline-none focus:border-jm-green"
        >
          <option value="">Selecione...</option>
          {VEREADORES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={handleVote}
          disabled={voted}
          className="bg-black text-jm-yellow font-extrabold px-5 py-1.5 text-[16px] hover:brightness-95 disabled:opacity-60"
        >
          Votar
        </button>
        <button
          onClick={handleResult}
          className="bg-black text-jm-yellow font-extrabold px-5 py-1.5 text-[16px] hover:brightness-95"
        >
          Resultado
        </button>
      </div>
    </section>
  );
}
