import { FaWallet } from "react-icons/fa";


export default function CardSaldoTotal() {
  return (
    <div className="w-full flex flex-col  gap-4 min-w-62.5 min-h-45 bg-white rounded-[20px] p-6 shadow-md">

        <div className="flex items-center gap-2">
            <FaWallet
                className="text-[20px]  text-primary-1"
            />
            <p className="text-primary-4 text-[18px]">
                Saldo Total:
            </p>
        </div>

        <h1 className="text-primary-4 text-2xl font-bold">
            R$ 12.450,90
        </h1>

        <p className="text-[14px] rounded-[15px] border-2 border-[var(--color-primary-1)] bg-[var(--color-primary-1)]/10 text-black px-3 py-1 w-fit">
        +2,4% este mês
        </p>
      
    </div>
  );
}