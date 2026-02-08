import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { portfolio } from "@/app/core/data/portfolio";

export default function CardTotalInvestido() {
  const totalInvestido = portfolio.reduce((acc, asset) => acc + asset.totalValue, 0);

  const sparkData = [20, 35, 30, 50, 60, 80, 70];

  return (
    <div className="w-full flex flex-col gap-4 min-w-62.5 min-h-45 bg-white rounded-[20px] p-6 shadow-md md:max-h-[220] md:max-w-[270] md:gap-6">

      <div className="flex items-center gap-2">
        <RiMoneyDollarCircleLine className="text-[26px] text-primary-1" />
        <p className="text-primary-4 text-[18px] font-montserrat">
          Total Investido
        </p>
      </div>

      <h1 className="text-primary-4 text-2xl font-bold">
        R${" "}
        {totalInvestido.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </h1>

      <div className="flex items-end gap-1 h-12 w-full">
        {sparkData.map((value, index) => (
          <div
            key={index}
            className="flex-1 rounded-sm bg-primary-1/70"
            style={{ height: `${value}%` }}
          />
        ))}
      </div>

    </div>
  );
}
