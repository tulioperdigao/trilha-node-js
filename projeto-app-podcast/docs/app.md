# Podcast Manager

### Descrição
Um app ao estilo Netflix, aonde possa centralizar diferentes episódios de podcasts separados por categoria.

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor, tecnologia, ciência, esporte]
- Filtrar episódios por nome de podcast

## Como

### Feature:
- Listar os episódios de podcasts em sessões de categorias

#### Como vou implementar:
Vou retornar em uma API Rest (JSON) o nome do podcast, nome do episódio, imagem de capa, link, category

```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "bodybuilder", "esporte"]
    },
    {
        podcastName: "flow",
        episode: "SERGIO SACANI E BRENO MASI - Flow #434",
        videoId: "9i3bTzbYHAg",
        cover: "https://i.ytimg.com/vi/9i3bTzbYHAg/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=9i3bTzbYHAg",
        categories: ["ciência", "humor"]
    }
]
```