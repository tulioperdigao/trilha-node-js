# 🏎️ API F1 2025 - Equipes e Pilotos (Minimal API)

Esta é uma **Minimal API** construída com [Fastify](https://www.fastify.io/) e [TypeScript](https://www.typescriptlang.org/), que fornece informações sobre as **equipes** e **pilotos** da Fórmula 1 em 2025. Simples, rápida e sem banco de dados — ideal para testes, aprendizado ou protótipos.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://www.fastify.io/)
- [@fastify/cors](https://www.npmjs.com/package/@fastify/cors)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Estrutura de Dados

### 🔸 Equipes (`/teams`)

Cada equipe possui:
```json
{
  "id": 1,
  "name": "Ferrari",
  "country": "Itália"
}
```

### 🔸 Pilotos (`/drivers`)

Cada piloto possui:
```json
{
  "id": 1,
  "name": "Max Verstappen",
  "team": "Red Bull Racing"
}
```

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/f1-api-2025.git
cd f1-api-2025
```

2. Instale as dependências:

```bash
npm install
```

---

## ▶️ Como Usar

Inicie o servidor com:

```bash
npm run dev
```

O servidor estará disponível em:  
👉 `http://localhost:3333`

---

## 📡 Rotas Disponíveis

### 🔹 `GET /teams`

Retorna todas as equipes de F1.

### 🔹 `GET /teams/:id`

Retorna os dados da equipe com o ID informado.

**Exemplo:**  
`GET /teams/1`  
**Resposta:**  
```json
{
  "team": {
    "id": 1,
    "name": "Ferrari",
    "country": "Itália"
  }
}
```

### 🔹 `GET /drivers`

Retorna todos os pilotos de F1.

### 🔹 `GET /drivers/:id`

Retorna os dados do piloto com o ID informado.

**Exemplo:**  
`GET /drivers/1`  
**Resposta:**  
```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

---

## 🌐 CORS

Esta Minimal API está com CORS liberado para todas as origens (`origin: "*"`) utilizando o plugin `@fastify/cors`.

---

## 🧑‍💻 Autor

Desenvolvido por **Tulio Castro**  
🔗 [LinkedIn](https://www.linkedin.com/in/tulio-perdigao/) • [GitHub](https://github.com/tulioperdigao)

---

## 📄 Licença

Este projeto está licenciado sob a Licença **MIT**.
