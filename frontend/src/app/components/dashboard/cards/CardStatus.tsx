"use client";

import { FiCheckCircle, FiClock } from "react-icons/fi";
import { HiDocumentSearch } from "react-icons/hi";


export default function CardStatus() {
  return (
    <div className="w-full flex flex-col  gap-4 min-w-[250] min-h-[230] bg-white rounded-[20px] p-6 shadow-md md:max-h-[220] md:max-w-[270] ">

        <div className="flex items-center justify-between">
            <HiDocumentSearch
                 className="text-[24px]  text-primary-1"
            /> 
            <p className="text-primary-4 text-[18px]">
                KYC Status
            </p>
            <span className="px-2 py-1 rounded-[15px] bg-yellow-500/20 text-yellow-800 font-semibold text-sm">
                 Pending
            </span>
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
                <FiCheckCircle className="text-green-500" />
                <span>Documento enviado</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <FiCheckCircle className="text-green-500" />
                <span>Selfie validada</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <FiClock className="text-yellow-500" />
                <span>Endereço confirmado</span>
            </div>
      </div>

            <button className="mt-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-white font-semibold py-2 px-4 rounded-[15px] shadow-md hover:brightness-105 transition md:mt-0 md:py-2">
                Atualizar KYC
            </button>
    </div>
  );
}