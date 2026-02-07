"use client";

import InputField from "@/app/components/operacao/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Resolver } from "react-hook-form";
import { maskOnlyNumbers } from "@/app/utils/InputMasks";

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
    formState: { errors },
  } = useForm<FormData>({
    resolver,
  });

  function onSubmit(data: FormData) {
    console.log("Dados enviados:", data);
  }

  return (
    <main className="flex items-start bg-primary-3 min-h-svh p-4 pb-8">
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-4">
          Operações
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-y-8 w-full max-w-[400px] bg-white rounded-[20px] p-6 shadow-md"
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
            label="Network (opcional)"
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
      </div>
    </main>
  );
}
