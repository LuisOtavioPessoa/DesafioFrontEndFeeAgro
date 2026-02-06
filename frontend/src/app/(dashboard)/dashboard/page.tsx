import CardIndicadoresAgro from "@/app/components/dashboard/cards/CardIndicadoresAgro";
import CardPortfolio from "@/app/components/dashboard/cards/CardPortfolio";
import CardSaldoTotal from "@/app/components/dashboard/cards/CardSaldoTotal"
import CardStatus from "@/app/components/dashboard/cards/CardStatus";
import CardTotalInvestido from "@/app/components/dashboard/cards/CardTotalInvestido";

export default function Dashboard() {
  return (
    <main className='flex items-start  bg-primary-3 min-h-svh p-4 pb-8'>
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-primary-4">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardSaldoTotal/>
          <CardTotalInvestido/>
          <CardPortfolio/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardIndicadoresAgro/>
          <CardStatus/>
        </div>

      </div>
    </main>
  );
}
