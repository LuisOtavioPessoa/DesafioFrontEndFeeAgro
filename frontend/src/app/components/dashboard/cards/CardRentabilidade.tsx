"use client";

import { FaChartLine } from "react-icons/fa";
import { conta } from "@/app/core/data/conta";
import { portfolio } from "@/app/core/data/portfolio";

export default function CardRentabilidade() {
  const totalInvested = portfolio.reduce((acc, asset) => acc + asset.totalValue, 0);
  const saldoDisponivel = conta[0]?.availableBalance || 0;

  const lucroLiquido = saldoDisponivel - totalInvested;

  const rentabilidade = totalInvested > 0 
    ? ((lucroLiquido / totalInvested) * 100).toFixed(2)
    : "0.00";

  const melhorAtivo = portfolio.reduce((prev, curr) =>
    curr.totalValue > prev.totalValue ? curr : prev
  );

  const piorAtivo = portfolio.reduce((prev, curr) =>
    curr.totalValue < prev.totalValue ? curr : prev
  );

  return (
    <div className="w-full flex flex-col gap-4 min-w-[250] min-h-[200] bg-white rounded-[20px] p-6 shadow-md md:max-h-[200] md:gap-6">
      <div className="flex items-center gap-2">
        <FaChartLine className="text-[24px] text-primary-1" />
        <p className="text-primary-4 text-[18px]">
          Rentabilidade do Mês:
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-2">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
          <p className="font-semibold text-sm text-[#16A34A]">
            Rentabilidade: {Number(rentabilidade) >= 0 ? "+" : ""}
            {rentabilidade}%
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
          <p className="font-semibold text-sm text-[#16A34A]">
            Melhor ativo: {melhorAtivo.assetName}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
          <p className="font-semibold text-sm text-[#D4AF37]">
            Pior ativo: {piorAtivo.assetName}
          </p>
        </div>
      </div>
    </div>
  );
}
