"use client";

import { MdOutlineQueryStats } from "react-icons/md";

export default function CardIndicadoresAgro() {
  return (
    <div className="w-full flex flex-col  gap-4 min-w-[250px] min-h-[20px] bg-white rounded-[20px] p-6 shadow-md">

        <div className="flex items-center gap-2">
            <MdOutlineQueryStats
                 className="text-[24px]  text-primary-1"
            /> 
            <p className="text-primary-4 text-[18px]">
                Indicadores Agro:
            </p>  
        </div>

        <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#16A34A]"></span>
                <p className="font-semibold text-primary-1 text-sm">
                    Soja vendida: 1.250 t
                </p>
            </div>

            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
                <p className="font-semibold text-[#D4AF37] text-sm">
                    Milho vendido: 800 t
                </p>
        </div>

            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FFD700]/50"></span>
                <p className="font-semibold text-primary-4 text-sm">
                    Lucro líquido: R$ 12.450
                </p>
            </div>
        </div>
    </div>
  );
}