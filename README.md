# Portal Notícias

O **Portal Notícias** é um site web desenvolvido com **React** e **Vite**, utilizando a **News API** para fornecer notícias em tempo real. O projeto é organizado em duas páginas principais:

## 📄 Páginas do Projeto

### 🏠 Página Inicial (Home)
- Apresenta as notícias mais recentes fornecidas pela API.
- Layout organizado com títulos, resumos e links para as notícias completas.
- Permite ao usuário realizar pesquisas por notícias específicas com base em palavras-chave.
- As notícias são buscadas dinamicamente por meio da integração com a **News API**.

### ℹ️ Página Sobre (About)
- Contém informações sobre o site, incluindo o propósito e as tecnologias utilizadas no projeto.

---

## 🔍 Mecanismo de Busca de Notícias

O **Portal Notícias** utiliza dois principais endpoints da **News API** para buscar e organizar notícias em tempo real: **`/top-headlines`** e **`/everything`**. A seguir, explicamos como cada endpoint funciona.

### 📰 Endpoint `/top-headlines` (Manchetes Principais)
- **O que faz**: Pega as principais notícias em tempo real.
- **Como funciona**:
  - Você escolhe o **país** (ex.: EUA) e a **categoria** (ex.: tecnologia ou esportes).
  - A API devolve uma lista com as manchetes, resumos, autores e links.

---

### 🔎 Endpoint `/everything` (Busca Avançada)
- **O que faz**: Busca notícias específicas usando palavras-chave.
- **Como funciona**:
  - Você digita o que quer (ex.: "tecnologia").
  - Pode usar filtros, como:
    - Buscar frases exatas: `"Apple"`
    - Incluir palavras: `+bitcoin`
    - Excluir palavras: `-bitcoin`
  - Escolhe como ordenar as notícias:
    - Mais populares
    - Mais recentes
    - Mais relevantes
  - A API devolve resultados detalhados, como títulos e links.

---

## 🔍 Explicação dos Métodos

### 1. Função `getTopHeadlines`
- **Descrição**: Realiza uma solicitação para o endpoint `/top-headlines` da **News API**, retornando as principais manchetes de um país específico.
- **Retorno**: Um objeto JSON contendo os artigos das manchetes.
- **Funcionamento**:
  - No `useEffect`, a função `fetchNews` é chamada para buscar as manchetes do país `'us'`.
  - Os resultados retornados pela API (campo `articles`) são armazenados no estado `news`.
  - Enquanto os dados estão sendo carregados, o componente exibe a mensagem `Loading...`.
  - Após o carregamento, os títulos das manchetes são exibidos como uma lista de links.

---

### 2. Função `getEverything`
- **Descrição**: Realiza uma solicitação para o endpoint `/everything` da **News API**, buscando notícias com base em uma palavra-chave ou frase específica.
- **Retorno**: Um objeto JSON contendo os artigos relevantes à pesquisa.
- **Funcionamento**:
  - O componente possui um campo de entrada (`input`) para que o usuário digite uma palavra-chave.
  - Ao clicar no botão **"Buscar"**, a função `handleSearch` é chamada, utilizando a palavra-chave como parâmetro para a função `getEverything`.
  - Os resultados retornados pela API (campo `articles`) são armazenados no estado `news`.
  - As notícias correspondentes à busca são exibidas como uma lista de links.
