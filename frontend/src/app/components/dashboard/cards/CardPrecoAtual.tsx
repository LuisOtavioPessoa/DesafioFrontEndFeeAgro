"use client";

import { MdOutlinePriceChange } from "react-icons/md";
import { portfolio } from "@/app/core/data/portfolio";

export default function CardPrecoAtual() {
  const variacaoFake = [2.4, -1.1]; 

  return (
    <div className="w-full flex flex-col gap-4 min-w-[250] min-h-[200] bg-white rounded-[20px] p-6 shadow-md md:max-h-[220] md:max-w-[270]  md:gap-6">
      <div className="flex items-center gap-2">
        <MdOutlinePriceChange className="text-[24px] text-primary-1" />
        <p className="text-primary-4 text-[18px]  font-montserrat">
          Preço Atual dos Ativos
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        {portfolio.map((asset, index) => {
          const color = index === 0 ? "#16A34A" : "#D4AF37";
          const variacao = variacaoFake[index] || 0;

          return (
            <div key={asset.tokenSymbol} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>

                <p
                  className="font-semibold text-sm"
                  style={{ color: color }}
                >
                  {asset.assetName}: R$ {asset.price}
                </p>
              </div>

              <p
                className="text-[12px] font-semibold ml-5"
                style={{ color: color }}
              >
                {variacao >= 0 ? `↑ +${variacao}%` : `↓ ${variacao}%`} no mês
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
