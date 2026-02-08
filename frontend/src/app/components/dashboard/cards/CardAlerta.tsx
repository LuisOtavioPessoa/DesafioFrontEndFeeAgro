"use client";

import { FaLightbulb } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { GoAlertFill } from "react-icons/go";
import { FaChartLine } from "react-icons/fa";

export default function CardAlerta() {
  return (
    <div className="w-full flex flex-col  gap-4 min-w-[250] min-h-[200] bg-white rounded-[20px] p-6 shadow-md md:max-h-[220] md:max-w-[270] md:gap-6 ">

        <div className="flex items-center gap-2">
            <IoMdAlert
                 className="text-[24px]  text-primary-1"
            /> 
            <p className="text-primary-4 text-[18px] font-montserrat">
                Alertas
            </p>
        </div>

        <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-2 text-sm">
                <GoAlertFill className="text-[#D4AF37] text-[15px]" />
                <span>Seu saldo disponível está baixo</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <FaChartLine className="text-[#D4AF37] text-[15px]" />
                <span>Milho está em alta hoje</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <FaLightbulb  className="text-[#D4AF37] text-[15px]" />
                <span>Diversifique para reduzir risco</span>
            </div>
      </div>
    </div>
  );
}