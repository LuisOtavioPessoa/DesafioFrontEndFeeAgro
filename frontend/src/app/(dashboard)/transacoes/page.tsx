'use client';

import { useState } from "react";
import { transacao, Transaction } from "@/app/core/data/transacao";
import ModalTransacao from "@/app/components/transacoes/ModalTransacao";
import { IoIosAlert , IoMdSwap, IoIosCloseCircle } from "react-icons/io";
import { useRouter } from 'next/navigation';

export default function Transacoes() {

const router = useRouter();

const [filterType, setFilterType] = useState("Todos");
const [filterStatus, setFilterStatus] = useState("Todos");
const [filterPeriod, setFilterPeriod] = useState("Todos");
const [sortAmount, setSortAmount] = useState("Todos");
const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
const [openModalTransacao, setopenModalTransacao] = useState(false);

const filteredTransactions = transacao.filter(tx => {
    const typeMatch = filterType === "Todos" || tx.type === filterType;
    const statusMatch = filterStatus === "Todos" || tx.status === filterStatus;

    let periodMatch = true;
    if (filterPeriod !== "Todos"){
        const today = new Date();
        const dateParts = tx.date.split("/");
        const date = new Date(
            parseInt(dateParts[2]),
            parseInt(dateParts[1]) - 1,
            parseInt(dateParts[0])
        );

    if(filterPeriod === "Últimos 7 dias"){
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 7);
        periodMatch = date >= sevenDaysAgo && date <= today;
    }

    if(filterPeriod === "Últimos 30 dias"){
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30);
        periodMatch = date >= thirtyDaysAgo && date <= today;
    }
}

    return typeMatch && statusMatch && periodMatch;
});

const sortedTransactions = [...filteredTransactions].sort((a,b) => {
    if (sortAmount === "Maior para menor") return b.amount - a.amount;
    if (sortAmount === "Menor para maior") return a.amount - b.amount;
    return 0;
});

function handleOpenModal(tx: Transaction){
    setSelectedTransaction(tx);
    setopenModalTransacao(true);
}

function handleCloseModal(){
    setSelectedTransaction(null);
    setopenModalTransacao(false);
}


function handleSubmit() {
    router.push('/operacao'); 
}

  return (
    <main className='flex items-start  bg-primary-3 min-h-svh p-4 pb-8'>
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-primary-4">
          Transações
        </h1>

        <div className="flex items-center gap-3 w-full max-w-xl bg-white border-2 border-primary-1 rounded-xl p-2 shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-full ">
                <IoIosAlert className="text-primary-1 text-[24px]" />
            </div>

            <p className="text-primary-4 text-sm md:text-base leading-snug">
                Aqui você acompanha suas transações e investimentos em ativos reais (RWA), com status e detalhes de cada operação.
            </p>
        </div>

        <div className="flex flex-col gap-4 mb-4 rounded-[20px]  bg-white min-h-[100px] min-w-[300px] p-6 border-2 border-primary-1 shadow-sm">

            <h1 className="flex items-center justify-center text-[20px] md:text-[24px] font-bold text-primary-4 ">Filtrar por:</h1>

            <div className="flex flex-row items-center gap-2">
            <p className="w-[70px] text-right items-center font-semibold text-primary-4 text-[16px]">Tipo:</p>
            <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-white text-primary-4 w-[150px] md:w-[150px]"
            >
                <option>Todos</option>
                <option>IN</option>
                <option>OUT</option>
            </select>
            </div>

            <div className="flex flex-row items-center gap-2">
            <p className="w-[70px] text-right items-center font-semibold text-primary-4 text-[16px]">Status:</p>
            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-white text-primary-4 w-[150px] md:w-[150px]"
            >
                <option>Todos</option>
                <option>Concluída</option>
                <option>Pendente</option>
                <option>Cancelada</option>
            </select>
            </div>

            <div className="flex flex-row items-center gap-2">
            <p className="w-[70px] text-right items-center font-semibold text-primary-4 text-[16px]">Data:</p>
            <select
                value={filterPeriod}
                onChange={(e) => setFilterPeriod(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-white text-primary-4 w-[150px] md:w-[150px]"
            >
                <option>Todos</option>
                <option>Últimos 7 dias</option>
                <option>Últimos 30 dias</option>
            </select>
            </div>
        </div>

        <div className="flex items-center gap-2 min-w-[250px] max-w-xl bg-white border-2 border-primary-1 rounded-xl p-2 shadow-sm mb-4">
          <IoMdSwap className="text-primary-1 text-[24px]" />
          <select
            value={sortAmount}
            onChange={(e) => setSortAmount(e.target.value)}
            className="p-2 rounded-md border border-gray-300 bg-white text-primary-4 w-[200px]"
          >
            <option>Todos</option>
            <option>Maior para menor</option>
            <option>Menor para maior</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
        {sortedTransactions.length === 0 ? (
            <div className="flex items-center w-full max-w-xl bg-white border-2 border-primary-1 rounded-xl p-2 shadow-sm">
            <div className="flex items-center justify-center w-10 h-10 rounded-full ">
                <IoIosCloseCircle className="text-primary-1 text-[24px]" />
            </div>

            <p className="text-primary-4 text-sm md:text-base leading-snug">
                Nenhuma transação encontrada.
            </p>
        </div>
        ) : sortedTransactions.map(tx => (
                <div
                    key={tx.id}
                    className="relative flex items-center min-w-[350px] min-h-[100px] justify-between p-4  bg-white rounded-lg shadow hover:shadow-md transition gap-3"
                    onClick={() => handleOpenModal(tx)}
                >
                    <span className="absolute top-2 left-4 text-xs text-gray-500">
                        {tx.date}
                    </span>

                    <div className="flex flex-col">
                        <span className="font-semibold text-primary-4  text-[16px] max-w-[130px]">
                            {tx.description}
                        </span>
                        
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={tx.type === "IN" 
                            ? "text-green-600 font-bold" 
                            : "text-red-600 font-bold"}>
                            {tx.type === "IN" ? "+" : "-"} R$ {tx.amount}
                        </span>
                        <span className={
                        `px-2 py-1 rounded-[5px] text-xs font-semibold
                            ${tx.status === "Concluída" ? "bg-green-200 text-green-800" : ""}
                            ${tx.status === "Pendente" ? "bg-yellow-200 text-yellow-800" : ""}
                            ${tx.status === "Cancelada" ? "bg-red-200 text-red-800" : ""}
                        `}>
                            {tx.status}
                        </span>
                    </div>
                </div>
            ))}

            <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-primary-1 text-white font-semibold py-3 rounded-lg hover:bg-primary-2 transition"
          >
            Nova Operação
          </button>
            
        </div>
            <ModalTransacao
            open={openModalTransacao}
            onClose={handleCloseModal}
            transaction={selectedTransaction}
            />
      </div>
    </main>
  );
}
