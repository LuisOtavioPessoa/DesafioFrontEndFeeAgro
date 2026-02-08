"use client";

import InputField from "@/app/components/operacao/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { maskOnlyNumbers } from "@/app/utils/InputMasks";
import { IoIosAlert } from "react-icons/io";
import ModalConfirmarOperacao from "@/app/components/operacao/ModalConfirmarOperacao";
import { useState } from "react";

export const schema = z.object({
  toAddress: z
  .string()
  .min(1, "Beneficiário obrigatório"),

  amount: z
  .string()
  .min(1, "Insira o valor da operação")
  .refine((val) => {
    const numeric = Number(maskOnlyNumbers(val));
    return !isNaN(numeric) && numeric > 0;
  }, {message: "Insira um valor válido"}),

  memo: z
  .string()
  .min(1, "Descrição obrigatória"),

  network: z
  .string()
  .optional(),
});

type FormData = z.infer<typeof schema>;

const resolver: Resolver<FormData> = zodResolver(schema);

export default function Operacao() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver,
  });

const [openModalOperacao, setopenModalOperacao] = useState(false);
const [operacaoAtual, setOperacaoAtual] = useState<FormData | null>(null);
const [successMessage, setSuccessMessage] = useState("");

function handlePreview(data: FormData){
  setOperacaoAtual(data);
  setopenModalOperacao(true);
}

function handleConfirm(data: FormData){
  console.log("Dados enviados:", data);
  setSuccessMessage("Operação realizada com sucesso!");
  reset();
  setOperacaoAtual(null);
}

  return (
    <main className="flex items-start bg-primary-3 min-h-svh p-4 pb-8">
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-4">
          Operações
        </h1>

        <div className="flex items-center gap-3 w-full max-w-xl bg-white border-2 border-primary-1 rounded-xl p-2 shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-full ">
                <IoIosAlert className="text-primary-1 text-[24px]" />
            </div>
        
            <p className="text-primary-4 text-sm md:text-base leading-snug">
                Aqui você realiza suas operações e investimentos em ativos reais (RWA), definindo valores, beneficiários e detalhes de cada transação.
            </p>
        </div>

        <form
          onSubmit={handleSubmit(handlePreview)}
          className="grid grid-cols-1 gap-y-8 w-full max-w-[400] bg-white rounded-[20px] p-6 shadow-md"
        >
          <InputField
            id="toAddress"
            label="Beneficiário"
            register={register("toAddress")}
            error={errors.toAddress}
          />

          <InputField
            id="amount"
            label="Valor"
            type="text" 
            register={register("amount", {
              onChange(event) {
                setValue("amount", maskOnlyNumbers(event.target.value));
              }
            })}
            error={errors.amount}
          />

          <InputField
            id="memo"
            label="Descrição da Operação"
            register={register("memo")}
            error={errors.memo}
          />

          <InputField
            id="network"
            label="Blockchain"
            register={register("network")}
            error={errors.network}
          />

          <button
            type="submit"
            className="w-full bg-primary-1 text-white font-semibold py-3 rounded-lg hover:bg-primary-2 transition"
          >
            Confirmar Operação
          </button>
        </form>

        {successMessage && (
          <div className="w-full max-w-xl bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg">
            {successMessage}
          </div>
        )}

        <ModalConfirmarOperacao
          open = {openModalOperacao}
          onClose={() => setopenModalOperacao(false)}
          operacao={
            operacaoAtual
              ? {...operacaoAtual, onConfirm: () => handleConfirm(operacaoAtual)}
              : null
          }
        />
      </div>
    </main>
  );
}
