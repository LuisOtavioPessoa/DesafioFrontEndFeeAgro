import CardIndicadoresAgro from "@/app/components/dashboard/cards/CardIndicadoresAgro";
import CardPortfolio from "@/app/components/dashboard/cards/CardPortfolio";
import CardSaldoTotal from "@/app/components/dashboard/cards/CardSaldoTotal"
import CardStatus from "@/app/components/dashboard/cards/CardStatus";
import CardTotalInvestido from "@/app/components/dashboard/cards/CardTotalInvestido";
import { IoIosAlert } from "react-icons/io";
import { conta } from "@/app/core/data/conta";
import CardRentabilidade from "@/app/components/dashboard/cards/CardRentabilidade";
import CardPrecoAtual from "@/app/components/dashboard/cards/CardPrecoAtual";
import CardAlerta from "@/app/components/dashboard/cards/CardAlerta";

export default function Dashboard() {
  return (
    <main className='flex items-start  bg-primary-3 min-h-svh p-4 pb-8'>
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-primary-4 font-montserrat">
          Dashboard
        </h1>

        <div className="flex items-center gap-3 w-full max-w-xl bg-white border-2 border-primary-1 rounded-xl p-2 shadow-sm">
          <div className="flex items-center justify-center w-10 h-10 rounded-full ">
              <IoIosAlert className="text-primary-1 text-[24px]" />
          </div>
  
          <p className="text-primary-4 text-sm md:text-base leading-snug">
             Olá {conta[0]?.ownerName || "Cliente"}, aqui você acompanha suas operações e investimentos em ativos reais, com todos os detalhes e status atualizados.
          </p>
        </div>

        <div className="grid gap-4 w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <CardSaldoTotal/>
          <CardTotalInvestido/>
          <CardPortfolio/>
          <CardIndicadoresAgro/>
        </div>

        <div className="grid gap-4 w-full grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          <CardPrecoAtual/>
          <CardRentabilidade/>
          <CardStatus/>
          <CardAlerta/>
        </div>

      </div>
    </main>
  );
}
