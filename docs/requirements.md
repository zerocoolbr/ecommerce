## Requisitos funcionais
- Criar Produtos
- Listagem de produtos
  - Filtros (busca, ordenação, preço)
  - Páginação
- Detalhes do produto
- Atualizar Produtos
- Carrinho de compras
- Compra / Checkout
- Autenticação / autorização
- Cadastro de usuários

## Modelagem de dados

### Produtos
id -> SERIAL
title -> TEXT
description -> TEXT
price -> DECIMAL
image -> TEXT
created_at -> TIMESTAMP
updated_at -> TIMESTAMP

### Usuários
id -> SERIAL
first_name -> TEXT
last_name -> TEXT
email -> TEXT
password -> TEXT
cpf -> TEXT
phone -> TEXT
gender -> TEXT
date_of_birth -> DATE
created_at -> TIMESTAMP
updated_at -> TIMESTAMP

### Endereços
id -> SERIAL
user_id -> INTEGER
zip_code -> TEXT
country -> TEXT
state -> TEXT
city -> TEXT
address_line_1 -> TEXT
address_line_2 -> TEXT
created_at -> TIMESTAMP
updated_at -> TIMESTAMP


## Stack de Tecnologias
Backend - Node.js -> Express.js
Frontend - Next.js
Banco de dados: PostgreSQL
