"use client";

interface TransacaoProps {
    id: string;
    date: string;
    description: string;
    type: string;
    amount: number;
    status: string;
}

interface ModalTransacaoProps {
    open: boolean;
    onClose: () => void;
    transaction: TransacaoProps | null;
}

export default function ModalTransacao({
    open,
    onClose,
    transaction,
}: ModalTransacaoProps){
    if (!open || !transaction) return null;

    return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-[20px] shadow-lg p-6 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[20px] font-bold text-primary-4">
            Detalhes da Transação
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
            <span className="font-semibold">ID:</span> {transaction.id}
          </p>

          <p>
            <span className="font-semibold">Data:</span> {transaction.date}
          </p>

          <p>
            <span className="font-semibold">Descrição:</span>{" "}
            {transaction.description}
          </p>

          <p>
            <span className="font-semibold">Tipo:</span>{" "}
            {transaction.type === "IN" ? "Entrada" : "Saída"}
          </p>

          <p>
            <span className="font-semibold">Valor:</span> R$ {transaction.amount}
          </p>

          <p>
            <span className="font-semibold">Status:</span> {transaction.status}
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-primary-1 text-white py-2 rounded-lg font-semibold hover:bg-primary-2 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}