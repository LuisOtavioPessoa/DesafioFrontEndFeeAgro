'use client';

import { useState } from "react";
import { transacao } from "@/app/core/data/transacao";

export default function Transacoes() {

const [filterType, setFilterType] = useState("Todos");
const [filterStatus, setFilterStatus] = useState("Todos");
const [filterPeriod, setFilterPeriod] = useState("Últimos 7 dias");

const filteredTransactions = transacao.filter(tx => {
    const typeMatch = filterType === "Todos" || tx.type === filterType;
    const statusMatch = filterStatus === "Todos" || tx.status === filterStatus;

    return typeMatch && statusMatch;
});

  return (
    <main className='flex items-start  bg-primary-3 min-h-svh p-4 pb-8'>
      <div className="flex flex-col items-center gap-6 w-full max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-primary-4">
          Transações
        </h1>

        <div className="flex flex-wrap gap-4 mb-4">
            <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-white text-primary-4"
            >
                <option>Todos</option>
                <option>IN</option>
                <option>OUT</option>
            </select>

            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-white text-primary-4"
            >
                <option>Todos</option>
                <option>Concluída</option>
                <option>Pendente</option>
                <option>Cancelada</option>
            </select>

            <select
                value={filterPeriod}
                onChange={(e) => setFilterPeriod(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-white text-primary-4"
            >
                <option>Todos</option>
                <option>Útimos 7 dias</option>
                <option>Útimos 30 dias</option>
            </select>
        </div>

        <div className="flex flex-col gap-2">
            {filteredTransactions.map(tx => (
                <div
                    key={tx.id}
                    className="flex items-center min-w-[350px] min-h-[100px] justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition"
                >
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">{tx.date}</span>
                        <span className="font-semibold text-primary-4">{tx.description}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className={tx.type === "IN" ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                            {tx.type === "IN" ? "+" : "-"} R$ {tx.amount}
                        </span>
                        <span className={
                        `px-2 py-1 rounded-full text-xs font-semibold
                            ${tx.status === "Concluída" ? "bg-green-200 text-green-800" : ""}
                            ${tx.status === "Pendente" ? "bg-yellow-200 text-yellow-800" : ""}
                            ${tx.status === "Cancelada" ? "bg-red-200 text-red-800" : ""}
                        `}>
                            {tx.status}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
