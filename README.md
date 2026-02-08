# RWA Bank | Agro + Web3
Aplicação web desenvolvida em Next.js simulando um ambiente de banco digital moderno voltado para investimentos em RWA (Real World Assets) do setor agro, utilizando conceitos de Web3 com foco em interface limpa, responsiva e bem estruturada.

O projeto apresenta um dashboard com informações financeiras, portfólio de ativos tokenizados, transações e operações simuladas, trazendo uma experiência visual inspirada em fintechs.

## 🚀 Tecnologias Utilizadas
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Zustand (gerenciamento de estado global)
- React Icons
- tailwind-merge
- React Hook Form (em componentes reutilizáveis)

## ▶️ Como Rodar o Projeto
### **Requisitos**:  
  - Node.js instalado (recomendado: Node 18+).
  - NPM ou Yarn.
### **Instalação**:  
Clone o repositório e instale as dependências:
```bash
npm install
```
### **Rodando em ambiente de desenvolvimento**:  
```bash
npm run dev
```
O projeto ficará disponível em:
```bash
http://localhost:3000
```
### **Build de produção**:  
```bash
npm run build
```
### **Verificação e lint**:  
```bash
npm run lint
```
## 🧩 Scripts Disponíveis
| Script          | Função                             |
| --------------- | ---------------------------------- |
| `npm run dev`   | roda o projeto em desenvolvimento  |
| `npm run build` | gera build otimizado para produção |
| `npm run lint`  | analisa e valida padrões de código |

## ⚙️ Escolhas Técnicas (Decisões de Arquitetura)
### **✅ Next.js com App Router**:  
O projeto utiliza a estrutura moderna do Next.js (/app), facilitando organização de páginas e layouts.
### **✅ React + TypeScript**:  
A tipagem segura proporciona:
- Autocompletar no editor
- Detecção de erros em tempo de desenvolvimento
- Maior manutenção e escalabilidade do código
### **✅ Componentização e reutilização**:  
A interface foi construída com componentes separados por domínio, principalmente no dashboard e modais.
### **✅ Tailwind CSS**:  
Utilizado para acelerar o desenvolvimento e manter consistência visual com:
- sombras
- arredondamento padrão
- responsividade
- tipografia
### **✅ Dados mockados em /core/data**:  
Separar dados em arquivos próprios facilita:
- leitura do projeto
- manutenção
- futura integração com API
### **✅ react-hook-form + Zod**:  
Validação de formulários robusta, tipada e integrada ao React, oferecendo:
- Feedback de erros em tempo real
- Integração com TypeScript
- Facilidade para expandir campos e regras de validação
### **✅ react-chartjs-2 + Chart.js**:  
Gráficos dinâmicos e responsivos para visualização de dados de portfólio, com:
- Configurações flexíveis de cores e estilos
- Suporte a tooltips e interações
- Facilidade para adicionar novos tipos de gráficos
### **✅ Zustand para controle de layout mobile**:  
O menu mobile é controlado globalmente usando Zustand, evitando prop drilling e mantendo o layout limpo.

## ⚖️ Trade-offs (Compromissos do Projeto)
### **🔸 Dados estáticos (mock)**:  
**Vantagem:** desenvolvimento rápido e fácil demonstração <br/>
**Desvantagem:** não representa persistência real de banco ou blockchain
### **🔸 Variação de preços simulada**:  
**Vantagem:** Permite mostrar o comportamento do dashboard e cards. <br/>
**Desvantagem:** Valores não refletem dados reais do mercado, então gráficos e indicadores não são 100% precisos.
### **🔸 Sem integração real Web3**:  
O envio para endereço Ethereum é apenas simulado para fins de interface e fluxo.
**Vantagem:** Permite foco no front-end e experiência do usuário sem complexidade de blockchain.<br/>
**Desvantagem:** Operações Ethereum e tokens são apenas simuladas.
### **🔸 Modais implementados manualmente**:  
Os modais foram feitos sem bibliotecas externas.<br/>
**Vantagem:** maior controle visual <br/>
**Desvantagem:** acessibilidade e animações poderiam ser mais completas
### **🔸 Charts e dashboards com react-chartjs-2**:  
**Vantagem:** Flexível e visualmente completo. <br/>
**Desvantagem:** Configuração de estilo e cores é manual; não há atualizações em tempo real nem integração automática com dados dinâmicos.

## 🔥 O que eu melhoraria com mais tempo
Se tivesse mais tempo de desenvolvimento, as melhorias ideais seriam:

✅ Integração com API real (backend ou mock server) <br/>
✅ Persistência de dados (MongoDB / PostgreSQL / Firebase) <br/>
✅ Integração real com Web3 (WalletConnect / MetaMask) <br/>
✅ Autenticação e fluxo de login <br/>
✅ Página de perfil do usuário e configurações <br/>
✅ Implementação de gráficos (ex: Recharts) <br/>
✅ Paginação e filtros avançados de transações <br/>
✅ Melhorias de acessibilidade <br/>
✅ Dark mode <br/>
✅ Testes automatizados (Jest / Testing Library) <br/>

## 🖥️ Preview / Contexto
O sistema simula funcionalidades típicas de um banco digital como:
- Dashboard com cards informativos
- Consulta de portfólio
- Listagem de transações
- Nova operação simulada
- Modal de detalhes de transação
- Modal de confirmação de operação
- Sidebar com navegação por módulos
- Menu mobile com botão hamburguer

## 📌 Funcionalidades Implementadas
✅ Dashboard
- Cards de status KYC
- Cards de alertas financeiros
- Cards de preço atual dos ativos (com variação)

✅ Portfólio de investimentos
- Lista de ativos tokenizados (ex: Soja, Milho)
- Quantidade, preço e valor total

✅ Transaçõe
- Lista de transações com status (Concluída, Pendente, Cancelada)
- Modal para visualizar detalhes completos de uma transação

✅ Nova operação
- Simulação de envio para endereço Web3
- Modal de confirmação antes de finalizar operação

✅ Layout Responsivo
- Sidebar desktop
- Menu mobile com Drawer (via Zustand)
