# RWA Bank | Simulação de Banco Digital para Ativos do Agro

> **Simulação de banco digital para ativos tokenizados do agronegócio (Real World Assets - RWA) – Fev 2026**

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://rwabank.vercel.app/dashboard)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0.11-brown?style=for-the-badge)](https://zustand-demo.pmnd.rs/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.5.1-FF6384?style=for-the-badge&logo=chart.js)](https://www.chartjs.org/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.71-EC5990?style=for-the-badge&logo=reacthookform)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-4.3.6-3E67B1?style=for-the-badge&logo=zod)](https://zod.dev/)

---

### 🔗 Links do Projeto
- 🌐 **Deploy em Produção**: [https://rwabank.vercel.app/dashboard](https://rwabank.vercel.app/dashboard)
- 💻 **Repositório no GitHub**: [https://github.com/LuisOtavioPessoa/DesafioFrontEndFeeAgro](https://github.com/LuisOtavioPessoa/DesafioFrontEndFeeAgro)

---

## 📌 Sobre o Projeto

Desenvolvido individualmente como **desafio técnico**, o **RWA Bank** é o front-end de uma aplicação web que simula um banco digital moderno voltado para investimentos e custódia de ativos tokenizados do agronegócio (**Real World Assets - RWA**), utilizando dados simulados.

A interface foi projetada com foco em experiência do usuário (UX/UI), responsividade e clareza analítica inspirada em fintechs de alto padrão. Utilizando **Next.js (App Router)**, **React** e **TypeScript**, a aplicação conta com **3 telas principais** e **2 modais interativos**:

1. **Dashboard Financeiro**: com 8 indicadores analíticos de negócio e gráfico em formato Doughnut via **Chart.js** (com estado global de navegação gerenciado por **Zustand**);
2. **Extrato de Transações**: com listagem dinâmica, ordenação por valor e **3 filtros independentes** (Tipo, Status e Período), integrado ao **Modal de Detalhes da Transação**;
3. **Formulário de Operações**: fluxo de transferência/investimento validado rigorosamente com **React Hook Form** e **Zod**, integrado ao **Modal de Confirmação de Operação**.

---

## 🖥️ Telas e Modais da Aplicação

### 1. 📊 Dashboard (`/dashboard`)
Hub central de monitoramento patrimonial e de indicadores de mercado agro com **8 indicadores/cards**:
- **Saldo Total**: Saldo disponível em conta corrente (BRL).
- **Total Investido**: Patrimônio consolidado alocado em tokens de commodities agrícolas.
- **Portfólio Agro (Gráfico em Chart.js)**: Gráfico interativo Doughnut (`react-chartjs-2`) renderizando a proporção dos ativos tokenizados (Soja e Milho) com cálculo percentual dinâmico em tooltips.
- **Indicadores Agro**: Acompanhamento de volume negociado por commodity e apuração de lucro líquido consolidado.
- **Preço Atual dos Ativos**: Cotação em tempo real simulada por token e percentual de variação de mercado.
- **Rentabilidade do Mês**: Cálculo automatizado de rentabilidade percentual líquida, com destaque dinâmico para o melhor e o pior ativo da carteira.
- **Status da Conta**: Indicador visual de conformidade cadastral e nível de verificação de KYC.
- **Alertas Financeiros**: Notificações de risco, vencimentos e pendências regulatórias.
- **Estado Global com Zustand**: Controle da abertura, fechamento e colapso do menu mobile e sidebar desacoplado de componentes visuais e livre de *prop drilling*.

### 2. 💳 Extrato de Transações (`/transacoes`)
Visão detalhada do fluxo financeiro com:
- **3 Filtros combináveis**:
  - **Tipo**: Todos, Entrada (`IN`) e Saída (`OUT`);
  - **Status**: Todos, Concluída, Pendente e Cancelada;
  - **Período**: Todos, Últimos 7 dias e Últimos 30 dias (cálculo dinâmico baseado na data atual).
- **Ordenação Dinâmica**: Ordenação instantânea por montante financeiro (Maior para menor / Menor para maior).
- **Identificação Visual**: Badges coloridos por status e formatação contextual de valores monetários.
- 🪟 **Modal 1: Detalhes da Transação (`ModalTransacao`)**: Exibição em janela modal acessível ao clicar em qualquer item da listagem, apresentando ID único, data formatada, descrição completa, tipo (Entrada/Saída), valor em BRL e status operacional.

### 3. 📝 Formulário de Operações (`/operacao`)
Interface para emissão de novas operações e envio simulado de recursos/tokens via blockchain:
- **Campos Estruturados**: Beneficiário (`toAddress`), Valor da Operação (`amount`), Descrição (`memo`) e Rede/Blockchain (`network`).
- **Validação com React Hook Form + Zod**:
  - Schema de validação estrito com inferência de tipos TypeScript via `z.infer<typeof schema>`;
  - Validação de preenchimento obrigatório e regras de validação numérica customizada via `zod.refine`;
  - Máscaras de entrada (`maskOnlyNumbers`) para sanitização de dados no input;
  - Exibição de mensagens de erro específicas por campo em tempo real.
- 🪟 **Modal 2: Confirmação de Operação (`ModalConfirmarOperacao`)**: Etapa de segurança que intercepta a submissão do formulário, permitindo ao usuário revisar minuciosamente todos os dados da transação antes do envio final e disparo do feedback de sucesso.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade no Projeto |
| :--- | :--- |
| **Next.js 16 (App Router)** | Estrutura de rotas agrupadas `(dashboard)`, layouts persistentes e renderização híbrida |
| **React 19** | Biblioteca base para construção de componentes reativos da UI |
| **TypeScript** | Tipagem estática rigorosa para contratos de dados, props, schemas e estados |
| **Tailwind CSS 4** | Estilização utilitária de alta performance e design system customizado |
| **Zustand** | Gerenciamento de estado global leve e conciso para controle do layout e menu mobile |
| **Chart.js + react-chartjs-2** | Visualização de dados analíticos com gráfico Doughnut dinâmico no portfólio |
| **React Hook Form** | Gerenciamento performático do formulário sem renderizações desnecessárias |
| **Zod** | Declaração e validação de schemas de entrada com integração total ao TypeScript |
| **React Icons** | Pacote de ícones semânticos para identificação visual de fintech |
| **Vercel** | Plataforma de build contínuo, edge network e hospedagem de produção |

---

## 📂 Estrutura do Projeto

```text
frontend/
├── src/
│   ├── app/
│   │   ├── (dashboard)/               # Route Group compartilhado
│   │   │   ├── layout.tsx             # Layout estrutural com Sidebar e TopBarMobile
│   │   │   ├── dashboard/             # Tela 1: Dashboard
│   │   │   │   └── page.tsx
│   │   │   ├── transacoes/            # Tela 2: Extrato de Transações
│   │   │   │   └── page.tsx
│   │   │   └── operacao/              # Tela 3: Nova Operação
│   │   │       └── page.tsx
│   │   ├── components/                # Componentes divididos por domínio
│   │   │   ├── dashboard/cards/       # 8 Cards/Indicadores analíticos
│   │   │   │   ├── CardSaldoTotal.tsx
│   │   │   │   ├── CardTotalInvestido.tsx
│   │   │   │   ├── CardPortfolio.tsx  # Gráfico Doughnut (Chart.js)
│   │   │   │   ├── CardIndicadoresAgro.tsx
│   │   │   │   ├── CardPrecoAtual.tsx
│   │   │   │   ├── CardRentabilidade.tsx
│   │   │   │   ├── CardStatus.tsx
│   │   │   │   └── CardAlerta.tsx
│   │   │   ├── transacoes/
│   │   │   │   └── ModalTransacao.tsx          # Modal 1: Detalhes
│   │   │   ├── operacao/
│   │   │   │   ├── InputField.tsx
│   │   │   │   └── ModalConfirmarOperacao.tsx  # Modal 2: Confirmação
│   │   │   ├── sidebar/               # Sidebar desktop navegável
│   │   │   └── header/                # TopBar com trigger do menu mobile
│   │   ├── context/
│   │   │   └── useControlSidebar.ts   # Store global (Zustand)
│   │   ├── core/data/                 # Mocks tipados (conta, portfólio, transações)
│   │   └── utils/
│   │       └── InputMasks.ts          # Máscaras de input numérico
└── package.json
```

---

## ⚙️ Decisões Técnicas e Arquitetura

- **Next.js com App Router e Route Groups `(dashboard)`**: Permite compartilhar o layout com sidebar persistente e barra superior entre as 3 telas sem remounting de componentes visuais.
- **Tipagem Estrita com TypeScript e Zod**: As interfaces de dados (como `Transaction`, `Portfolio`, `Conta`) e o schema de formulário (`z.infer<typeof schema>`) garantem previsibilidade e eliminam erros em tempo de execução.
- **Gerenciamento de Estado Global com Zustand**: Escolhido por ser consideravelmente mais leve e direto que o Redux ou a Context API padrão, eliminando *boilerplate* e evitando re-renderizações desnecessárias na manipulação do menu mobile e sidebar.
- **Formulários Desacoplados com React Hook Form + Zod Resolver**: O hook form registra os inputs sem causar re-renderizações a cada caractere digitado, e o Zod valida os dados contra o schema antes de autorizar a abertura do modal de confirmação.
- **Separação de Dados em `/core/data`**: Os mocks de dados simulam o formato esperado de respostas REST/GraphQL, viabilizando uma futura conexão com APIs reais sem necessidade de refatorar a estrutura visual.

---

## ⚖️ Trade-offs Conscientes

- **Dados Simulados (Mock)**: A opção por utilizar dados mockados visa acelerar a entrega da interface e experiência de uso no escopo do desafio técnico, sem necessidade de dependências de infraestrutura de banco de dados ou RPC de blockchain no momento.
- **Transações em Memória**: As operações registradas produzem feedback visual e logs na aplicação, mas não persistem em disco por não haver um backend acoplado nesta etapa.
- **Modais Customizados**: Construídos sem bibliotecas externas pesadas (como Radix UI ou Headless UI), priorizando simplicidade de código e controle total sobre o design e paleta de cores.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior recomendada)
- Gerenciador de pacotes **npm** (ou yarn/pnpm)

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LuisOtavioPessoa/DesafioFrontEndFeeAgro.git
   ```

2. **Acesse a pasta do frontend:**
   ```bash
   cd DesafioFrontEndFeeAgro/frontend
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   Acesse [http://localhost:3000](http://localhost:3000) (o roteamento raiz redirecionará automaticamente para `/dashboard`).

### Outros Scripts Disponíveis

```bash
# Gera o build de produção otimizado
npm run build

# Executa o servidor com a versão de produção
npm run start

# Executa o linter ESLint
npm run lint
```

---

## 👤 Autor

Desenvolvido por **Luís Otávio Pessoa**.  
- **GitHub**: [@LuisOtavioPessoa](https://github.com/LuisOtavioPessoa)  
- **Projeto**: [Desafio Front-End FeeAgro](https://github.com/LuisOtavioPessoa/DesafioFrontEndFeeAgro)  
- **Deploy**: [rwabank.vercel.app/dashboard](https://rwabank.vercel.app/dashboard)
