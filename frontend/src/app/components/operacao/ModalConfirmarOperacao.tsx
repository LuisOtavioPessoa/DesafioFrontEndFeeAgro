"use client";

interface OperacaoProps {
    toAddress: string;
    amount: string;
    memo: string;
    network?: string;
    onConfirm?: () => void;
}

interface ModalConfirmarOperacaoProps {
    open: boolean;
    onClose: () => void;
    operacao: OperacaoProps | null;
}

export default function ModalConfirmarOperacao({
    open,
    onClose,
    operacao,
}: ModalConfirmarOperacaoProps){

    if (!open || !operacao) return null;

    return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white border-2 border-primary-1 rounded-[20px] shadow-lg p-6 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold text-primary-4">
            Detalhes da Operação
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-2 text-sm text-primary-4">
          <p>
            <span className="font-semibold">Beneficiário:</span> {operacao.toAddress}
          </p>

          <p>
            <span className="font-semibold">Valor:</span> R${operacao.amount}
          </p>

          <p>
            <span className="font-semibold">Descrição:</span> {operacao.memo}
          </p>

          {operacao.network && (
            <p>
              <span className="font-semibold">Network:</span> {operacao.network}
            </p>
          )}
        </div>

        <button
          onClick={() => {
            operacao.onConfirm?.();
            onClose();
          }}
          className="w-full bg-primary-1 text-white py-2 rounded-lg font-semibold hover:bg-primary-2 transition"
        >
          Confirmar antes de enviar
        </button>
      </div>
    </div>
  );
}