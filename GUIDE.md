# Guia Básico sobre Git

Este é um guia rápido para quem está iniciando no Git e deseja aprender o essencial sobre gerenciamento de repositórios, colaboração em equipe e comandos comuns.

---

## 1. O que é Git?
Git é um sistema de controle de versões que permite rastrear alterações no código, colaborar em projetos e gerenciar o histórico de desenvolvimento de forma eficiente.

---

## 2. Configuração Inicial
Antes de usar o Git, configure seu nome e email:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

---

## 3. Comandos Básicos

### Iniciar um Repositório
1. Crie um novo repositório local:
   ```bash
   git init
   ```

2. Adicione arquivos para controle de versão:
   ```bash
   git add .
   ```

3. Salve as alterações:
   ```bash
   git commit -m "Mensagem do commit"
   ```

### Conectar a um Repositório Remoto
1. Adicione o repositório remoto:
   ```bash
   git remote add origin <URL_DO_REPOSITORIO>
   ```

2. Envie os commits para o repositório na nuvem:
   ```bash
   git push -u origin main
   ```

---

## 4. Colaboração em Equipe

### Clonar um Repositório
Baixe um repositório remoto:
```bash
git clone <URL_DO_REPOSITORIO>
```

### Atualizar o Repositório Local
Busque as alterações mais recentes:
```bash
git pull
```

### Fazer Merge
Combine alterações de branches diferentes:
```bash
git merge <NOME_DA_BRANCH>
```

### Padronizar Mensagens de Commit
Siga este formato para manter organização:
```
[Tipo]: Descrição breve do que foi feito

Exemplos de tipo:
- feat: Nova funcionalidade
- fix: Correção de bug
- docs: Atualização de documentação
```
Exemplo de commit:
```bash
git commit -m "feat: Adiciona função de autenticação"
```

---

## 5. Instalar Dependências
Para projetos que usam gerenciadores de dependência:

### Node.js (npm ou Yarn)
- Com `npm`:
  ```bash
  npm install
  ```
NPM é a sigla para Node Package Manager, em resumo esse comando instalará todas as dependências em seu repositório, uma vez que estejam descritas no package.json criado no seu projeto. Neste projeto isso estará configurado, mas vejamos abaixo como fazer isso caso não estivesse:
  ```bash
  npm init
  ```

---

## 6. Resumo dos Comandos
- `git init`: Inicia um repositório local.
- `git add .`: Adiciona arquivos ao índice.
- `git commit -m "mensagem"`: Salva alterações.
- `git remote add origin <URL>`: Conecta ao repositório remoto.
- `git push`: Envia alterações para o repositório remoto.
- `git clone <URL>`: Clona um repositório remoto.
- `git pull`: Atualiza o repositório local.
- `git merge <BRANCH>`: Faz merge de branches.

---

Com este guia, você já pode começar a trabalhar com Git e colaborar com outras pessoas em projetos de maneira organizada!

