 #Portal Notícias
O Portal Notícias é um site web desenvolvido com React e Vite, utilizando a News API para fornecer notícias em tempo real. O projeto é organizado em duas páginas principais, descritas a seguir:

#📄 Páginas do Projeto
🏠 Página Inicial (Home)
Apresenta as notícias mais recentes fornecidas pela API.
Layout organizado com títulos, resumos e links para as notícias completas.
Permite ao usuário realizar pesquisas por notícias específicas com base em palavras-chave.
As notícias são buscadas dinamicamente por meio da integração com a News API.

#ℹ️ Página Sobre (About)
Contém informações sobre o site, incluindo o propósito e as tecnologias utilizadas no projeto.

Se precisar de mais ajustes ou quiser integrar diretamente ao seu README.md, posso ajudar com isso também! 😊



#🔍 Mecanismo de Busca de Notícias
O Portal Notícias utiliza dois principais endpoints da News API para buscar e organizar notícias em tempo real: /top-headlines e /everything. A seguir, explicamos como cada endpoint funciona e como as buscas são realizadas.

#📰 Endpoint /top-headlines
Este endpoint é utilizado para obter as principais manchetes (headlines) de notícias em tempo real, organizadas por país e/ou categorias específicas.
Funcionamento:
Fazemos uma solicitação GET para o endpoint /top-headlines com os seguintes parâmetros:
country: Define o país de origem das notícias (por exemplo, us para os Estados Unidos).
category: Filtra por categorias, como business, technology, ou sports.
apiKey: Chave de autenticação necessária para acessar a API.
A API retorna um objeto JSON contendo os resultados:
status: Indica se a requisição foi bem-sucedida (ok) ou se houve um erro.
totalResults: Número total de manchetes disponíveis para a solicitação.
articles: Uma matriz contendo os artigos. Cada artigo possui informações como título, resumo, autor, URL, entre outros.
Exemplo de uso: Buscando as principais manchetes nos EUA:
javascript
CopiarEditar
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=SUA_CHAVE_DE_API`;
const response = await fetch(url);
const data = await response.json();
console.log(data.articles);


#🔎 Endpoint /everything
Este endpoint é usado para realizar buscas mais específicas e avançadas, incluindo a pesquisa de notícias por palavras-chave, com opções para filtrar e ordenar os resultados.
Funcionamento:
Fazemos uma solicitação GET para o endpoint /everything com os seguintes parâmetros:
q: Palavra-chave ou frase para buscar nos títulos e conteúdos das notícias. Suporta pesquisa avançada:
Frases exatas: Use aspas (") para buscas exatas (ex.: "Apple").
Palavras obrigatórias: Use o símbolo + (ex.: +bitcoin).
Palavras proibidas: Use o símbolo - (ex.: -bitcoin).
Operadores lógicos: Combine AND, OR, NOT (ex.: crypto AND (ethereum OR litecoin) NOT bitcoin).
sortBy: Define a ordem dos resultados:
relevancy: Por relevância.
popularity: Pelas fontes mais populares.
publishedAt: Pelas notícias mais recentes.
apiKey: Chave de autenticação.
A API retorna um objeto JSON semelhante ao /top-headlines, mas com mais flexibilidade nos filtros e parâmetros de busca.
Exemplo de uso: Buscando artigos que mencionam "Apple" hoje, ordenados por popularidade:
javascript
CopiarEditar
const url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=SUA_CHAVE_DE_API`;
const response = await fetch(url);
const data = await response.json();
console.log(data.articles);


#🔑 Parâmetros Principais
Os parâmetros mais utilizados no mecanismo de busca são:
Parâmetro
Tipo
Descrição
apiKey
String
Obrigatório. Chave de autenticação da API.
q
String
Palavra-chave ou frase para busca. Suporta operadores avançados (ex.: "Apple" AND technology).
country
String
Código do país para restringir a busca (apenas no /top-headlines).
category
String
Categoria de notícias para filtrar (apenas no /top-headlines).
sortBy
String
Ordena os resultados (valores: relevancy, popularity, publishedAt).


#📋 Objeto de Resposta
O JSON retornado pela API contém os seguintes campos principais:
Campo
Tipo
Descrição
status
String
Indica se a requisição foi bem-sucedida (ok) ou se houve um erro.
totalResults
Integer
Número total de resultados disponíveis.
articles
Array[Object]
Matriz contendo os artigos retornados. Cada artigo inclui título, resumo, autor, URL, etc.

Exemplo de artigo:
json
CopiarEditar
{
  "source": { "id": "techcrunch", "name": "TechCrunch" },
  "author": "Jane Doe",
  "title": "Apple anuncia novo iPhone",
  "description": "A Apple lançou hoje seu mais novo modelo...",
  "url": "https://techcrunch.com/apple-novo-iphone",
  "publishedAt": "2025-01-15T12:00:00Z",
  "content": "Detalhes do artigo..."
}



#🔍 Explicação dos Métodos
1. Função getTopHeadlines
Descrição: Realiza uma solicitação para o endpoint /top-headlines da News API, retornando as principais manchetes de um país específico.
Retorno: Um objeto JSON contendo os artigos das manchetes.
2. Função getEverything
Descrição: Realiza uma solicitação para o endpoint /everything da News API, buscando notícias com base em uma palavra-chave ou frase específica.
Retorno: Um objeto JSON contendo os artigos relevantes à pesquisa.

#🛠️ Componentes e Implementação
1. Componente TopHeadlines
Este componente implementa a lógica da função getTopHeadlines, mostrando as manchetes mais recentes de um país.
Funcionamento:
No useEffect, a função fetchNews é chamada para buscar as manchetes do país 'us'.
Os resultados retornados pela API (campo articles) são armazenados no estado news.
Enquanto os dados estão sendo carregados, o componente exibe a mensagem Loading....
Após o carregamento, os títulos das manchetes são exibidos como uma lista de links.
2. Componente SearchNews
Este componente implementa a lógica da função getEverything, permitindo que o usuário realize buscas por notícias específicas.
Funcionamento:
O componente possui um campo de entrada (input) para que o usuário digite uma palavra-chave.
Ao clicar no botão "Buscar", a função handleSearch é chamada, utilizando a palavra-chave como parâmetro para a função getEverything.
Os resultados retornados pela API (campo articles) são armazenados no estado news.
As notícias correspondentes à busca são exibidas como uma lista de links.

#🌐 Sobre as Páginas HTML
1. Página sobre.html
Descrição: Página que apresenta informações sobre o site, incluindo seu propósito e tecnologias utilizadas.
Estrutura:
Cabeçalho (Header):
Contém um título "Sobre o site".
Inclui uma barra de navegação com links para a página inicial (Home) e para a própria página (Sobre).
Seções (Sections):
Propósito:
Explica que o site utiliza a News API para fornecer notícias em tempo real.
Destaca o objetivo de facilitar o acesso a informações atualizadas.
Tecnologias e Metodologias:
Lista as ferramentas e práticas empregadas no desenvolvimento do site, como:
HTML5, CSS3, React para construção e estilização.
Git e GitHub para versionamento.
Canva e Trello para prototipagem e gerenciamento de tarefas.
Métodos ágeis como Kanban, pair programming e Daily Scrum para coordenação da equipe.

2. Página home.html
Descrição: Página inicial do site, onde o usuário pode buscar por notícias.
Estrutura:
Cabeçalho (Header):
Título "Portal de Notícias".
Barra de navegação com links para as páginas Home e Sobre.
Barra de Pesquisa:
Contém um campo de entrada para que o usuário digite palavras-chave.
Inclui um botão que dispara a função handleSearch para buscar notícias.

#⚛️ Componente React: Hero.js
Descrição Geral
Hero.js é um componente React que implementa a interface de busca por notícias de forma estilizada.
Objetivo: Fornecer uma experiência de pesquisa interativa e intuitiva para o usuário.

#Funcionamento
Estado Local:
Utiliza o hook useState para gerenciar a palavra-chave digitada no campo de busca (query).
Função de Pesquisa (handleSearch):
Quando o botão "Pesquisar" é clicado, chama a função onSearch recebida como prop, passando a palavra-chave (query) como argumento.

#Estilo 
Design Responsivo:
O componente é projetado para centralizar os elementos e proporcionar uma interface limpa e moderna.
Elementos Principais:
Título (h1): Tamanho grande (36px) para chamar a atenção.
Campo de Entrada (input):
Bordas arredondadas (20px e 10px).
Integração fluida com o botão.

