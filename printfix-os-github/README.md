# PrintFix OS

SaaS multiempresa para assistências de informática, manutenção de impressoras e venda de suprimentos.

## Executar

1. Copie `.env.example` para `.env.local` e preencha Supabase, Stripe e URL da aplicação.
2. No painel do Supabase, execute `supabase/migrations/0001_initial.sql` no SQL Editor (ou use a CLI do Supabase).
3. Instale dependências e inicie: `pnpm install` e `pnpm dev`.
4. No Stripe, crie três preços mensais e informe os IDs nas variáveis `STRIPE_PRICE_*`.
5. Aponte o webhook Stripe a `https://seu-dominio.com/api/stripe/webhook`, com os eventos: `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.paid`, `invoice.payment_failed`.

## Arquitetura e segurança

- Supabase Auth mantém sessão por cookies.
- Todas as tabelas operacionais têm `company_id`; RLS consulta `is_member(company_id)`.
- A criação de venda e a baixa de estoque acontecem em `register_sale`, uma transação no banco que bloqueia estoque negativo.
- Stripe Checkout usa o preço escolhido apenas no servidor. O webhook assinado é a fonte de verdade para status e plano, e `stripe_events` impede reprocessamento.
- `SUPABASE_SERVICE_ROLE_KEY`, Stripe secret e webhook secret são usados somente em rotas do servidor.

## Pendências dependentes de conta

Sem suas credenciais não é possível criar o projeto Supabase, preços Stripe ou configurar o endpoint externo. A estrutura está pronta e as variáveis necessárias estão em `.env.example`.
