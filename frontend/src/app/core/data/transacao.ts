export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: "IN" | "OUT";
  amount: number;
  status: "Concluída" | "Pendente" | "Cancelada";
};


export const transacao: Transaction[] = [
  { id: "T001", 
    date: "2026-02-06", 
    description: "Depósito via PIX", 
    type: "IN", 
    amount: 1200, 
    status: "Concluída" 
},

  { id: "T002", 
    date: "2026-02-05", 
    description: "Investimento RWA Agro", 
    type: "OUT", 
    amount: 350, 
    status: "Pendente" 
}
];