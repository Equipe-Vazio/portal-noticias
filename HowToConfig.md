# Configuração do Ambiente de Desenvolvimento com Vite

Este guia descreve como configurar e importar o ambiente de desenvolvimento usando Vite para este projeto.

---

## 📦 Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Editor de código, como [VS Code](https://code.visualstudio.com/)

---

## 🚀 Passos para Configuração

### 1. Clonar o Repositório

Se o projeto já está hospedado em um repositório Git, clone-o para o seu ambiente local:
```bash
git clone https://github.com/Equipe-Vazio/portal-noticias.git
cd portal-noticias
```

### 2. Instalar Dependências

No diretório do projeto, execute:
```bash
npm install
```
ou, se estiver usando Yarn:
```bash
yarn install
```

### 3. Iniciar o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento do Vite:
```bash
npm run dev
```
ou com Yarn:
```bash
yarn dev
```

Por padrão, o Vite usará a porta `5173`. Acesse o projeto no navegador em [http://localhost:5173](http://localhost:5173).

---

## 🔧 Configuração Adicional

### Configurar Variáveis de Ambiente

Apague o .example do arquivo `.env` que está na raiz do projeto. Nos ajudará em armazenar variáveis de ambiente. Por exemplo:
```
API_URL=https://api.exemplo.com
```

Para acessar estas variáveis no código, por exemplo:
```javascript
console.log(import.meta.env.API_URL);
```

---

## 📺 Estrutura Padrão do Projeto

```
portal-noticias/
├── public/          # Arquivos estáticos (imagens, favicon, etc.)
├── src/             # Código-fonte principal
│   ├── components/  # Componentes React
│   ├── pages/       # Páginas do aplicativo
│   ├── App.jsx      # Componente raiz
│   ├── main.jsx     # Ponto de entrada do Vite
├── .env             # Variáveis de ambiente
├── package.json     # Configurações e dependências do projeto
├── vite.config.js   # Configuração do Vite
└── README.md        # Documentação do projeto
```

---

## 🛠️ Comandos Úteis

- **Iniciar o servidor de desenvolvimento**:
  ```bash
  npm run dev
  ```
- **Compilar o projeto para produção**:
  ```bash
  npm run build
  ```
- **Executar um servidor de pré-visualização**:
  ```bash
  npm run preview
  ```

---

## 📚 Recursos Adicionais

- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do React](https://react.dev/)

---

Com isso, você estará pronto para iniciar nosso desenvolvimento com Vite! 🎉
