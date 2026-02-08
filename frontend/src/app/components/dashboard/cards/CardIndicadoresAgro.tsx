"use client";

import { MdOutlineQueryStats } from "react-icons/md";
import { conta } from "@/app/core/data/conta";
import {portfolio} from "@/app/core/data/portfolio";

export default function CardIndicadoresAgro() {

const totalInvested = portfolio.reduce((acc, asset) => acc + asset.totalValue, 0);
const lucroLiquido = (conta[0]?.availableBalance || 0) - totalInvested;

  return (
    <div className="w-full flex flex-col gap-4 min-w-[250] min-h-[200] bg-white rounded-[20px] p-6 shadow-md md:max-h-[200] md:max-w-[270]  md:gap-6">

        <div className="flex items-center gap-2">
            <MdOutlineQueryStats
                 className="text-[24px]  text-primary-1"
            /> 
            <p className="text-primary-4 text-[18px]">
                Indicadores Agro:
            </p>  
        </div>

        <div className="flex flex-col gap-3 mt-2">
            {portfolio.map((asset, index) => (
              <div key={asset.tokenSymbol} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: index === 0 ? "#16A34A" : "#D4AF37" }}
                  ></span>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: index === 0 ? "#16A34A" : "#D4AF37" }}
                  >
                    {asset.assetName} vendido(a): {asset.quantity} u
                  </p>
              </div>
            ))}

            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FFD700]/50"></span>
                <p className="font-semibold text-primary-4 text-sm">
                    Lucro líquido: R$ {lucroLiquido.toLocaleString("pt-BR")}
                </p>
            </div>
        </div>
    </div>
  );
}