import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {portfolio} from "@/app/core/data/portfolio";

export default function CardTotalInvestido() {
  return (
    <div className="w-full flex flex-col  gap-4 min-w-62.5 min-h-45 bg-white rounded-[20px] p-6 shadow-md">

        <div className="flex items-center gap-2">
            <RiMoneyDollarCircleLine
                className="text-[26px]  text-primary-1"
            />
            <p className="text-primary-4 text-[18px]">
                Total Investido:
            </p>
        </div>

        <h1 className="text-primary-4 text-2xl font-bold">
            R${" "}
            {portfolio
              .reduce((acc, asset) => acc + asset.totalValue, 0)
              .toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </h1>

        <p className="inline-block text-[14px] rounded-[15px] border-2 border-[var(--color-primary-1)] bg-[var(--color-primary-1)]/10 text-black px-3 py-1 w-fit">
        Ativo
      </p>
      
    </div>
  );
}