import { FaWallet } from "react-icons/fa";
import { conta } from "@/app/core/data/conta";

export default function CardSaldoTotal() {
  return (
    <div className="w-full flex flex-col  gap-4 min-w-[250] min-h-[180]  bg-white rounded-[20px] p-6 shadow-md
    md:max-h-[220] md:max-w-[270] md:gap-6">

        <div className="flex items-center gap-2">
            <FaWallet
                className="text-[20px]  text-primary-1"
            />
            <p className="text-primary-4 text-[18px]">
                Saldo Total:
            </p>
        </div>

        <h1 className="text-primary-4 text-2xl font-bold">
            R$ {conta[0]?.availableBalance.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) || "0,00"}
        </h1>

        <p className="text-[14px] rounded-[15px] border-2 border-[var(--color-primary-1)] bg-[var(--color-primary-1)]/10 text-black px-3 py-1 w-fit">
        +38.89% este mês
        </p>
      
    </div>
  );
}