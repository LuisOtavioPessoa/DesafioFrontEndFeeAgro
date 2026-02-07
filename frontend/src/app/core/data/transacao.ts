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
    date: "06/02/2026", 
    description: "Depósito via PIX", 
    type: "IN", 
    amount: 1200, 
    status: "Concluída" 
},

  { id: "T002", 
    date: "05/02/2026", 
    description: "Investimento RWA Agro", 
    type: "OUT", 
    amount: 350, 
    status: "Pendente" 
},

  { 
    id: "T003", 
    date: "20/01/2026", 
    description: "Pagamento boleto", 
    type: "OUT", 
    amount: 200, 
    status: "Concluída" 
},

  { 
    id: "T004", 
    date: "15/01/2026", 
    description: "Compra de ações RWA Tech", 
    type: "OUT", 
    amount: 1500, 
    status: "Cancelada" 
},

  { 
    id: "T005", 
    date: "01/01/2026", 
    description: "Transferência recebida", 
    type: "IN", 
    amount: 800, 
    status: "Concluída" 
}
];