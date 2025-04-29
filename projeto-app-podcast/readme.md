# 🎙️ Podcast Manager

**Um app para centralizar episódios de podcasts em vídeo, organizado por categorias.**  
Inspirado em plataformas de streaming como Netflix, o Podcast Manager facilita a descoberta de conteúdos audiovisuais de diferentes temas.

---

## 📚 Descrição

O **Podcast Manager** é um aplicativo focado em podcasts no formato de vídeo. Seu objetivo é listar e organizar episódios em sessões baseadas em categorias específicas, proporcionando uma experiência simples e intuitiva para o usuário.

---

## 🧠 Domínio

- **Conteúdo:** Podcasts em vídeo
- **Categorias disponíveis:**
  - Saúde
  - Bodybuilder
  - Mentalidade
  - Humor
  - Tecnologia
  - Ciência
  - Esporte

---

## 🚀 Funcionalidades

- Listar episódios organizados em categorias.
- Filtrar episódios pelo nome do podcast.

---

## 🔗 Como funciona

O app oferece dois endpoints principais utilizando HTTP:

### 📥 Listar episódios

**Rota:** `GET /list`  
**Descrição:** Retorna a lista completa de episódios disponíveis.

**Exemplo de resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "bodybuilder", "esporte"]
  },
  {
    "podcastName": "flow",
    "episode": "SERGIO SACANI E BRENO MASI - Flow #434",
    "videoId": "9i3bTzbYHAg",
    "cover": "https://i.ytimg.com/vi/9i3bTzbYHAg/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=9i3bTzbYHAg",
    "categories": ["ciência", "humor"]
  }
]
```

---

### 🔍 Filtrar episódios por nome de podcast

**Rota:** `GET /episode?podcastName={nome}`  
**Descrição:** Retorna episódios correspondentes ao nome de podcast informado como parâmetro.

**Exemplo de requisição:**

```
GET /episode?podcastName=flow
```

---

## 💻 Como usar

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute em modo de desenvolvimento:**

```bash
npm run start:dev
```

Ou para observar mudanças automaticamente:

```bash
npm run start:watch
```

4. **Compilar o projeto para produção:**

```bash
npm run dist
```

5. **Rodar o projeto compilado:**

```bash
npm run start:dist
```

---

## 📦 Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [TSX](https://www.npmjs.com/package/tsx) (para rodar TypeScript diretamente no Node.js)
- [Tsup](https://www.npmjs.com/package/tsup) (empacotador/bundler)
- [dotenv](https://www.npmjs.com/package/dotenv) (gerenciamento de variáveis de ambiente)
- [@types/node](https://www.npmjs.com/package/@types/node) (tipagens para o Node.js)

---

## 📋 Próximos passos (ideias de melhorias)

- Implementar paginação na listagem de episódios.
- Adicionar busca por categorias específicas.
- Integrar com APIs externas de podcasts em vídeo.
- Desenvolver uma interface gráfica (front-end) para o consumo dos dados.

---

## 🧑‍💻 Autor

**Tulio Perdigão**  
Projeto de estudo e aprimoramento em desenvolvimento backend com Node.js e TypeScript.
