import React from 'react';

const markdownContent = `Insira o Markdown aqui`;

const Sobre = () => {
  return (<>
    <header className="navbar">
        <p>
          <strong>Sobre o site</strong>
        </p>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="section">
          <h2>Propósito</h2>
          <p>
            O propósito deste projeto é desenvolver um site dinâmico e
            interativo que utilize a News API para fornecer as últimas notícias
            em tempo real. O site tem como objetivo permitir que os usuários
            acompanhem eventos e acontecimentos de diversas áreas, oferecendo
            uma plataforma moderna e acessível para facilitar o acesso às
            informações atualizadas.
          </p>
        </section>

        <section className="section">
          <h2>Tecnologias e metodologias utilizadas</h2>
          <p>Para o desenvolvimento deste site, foi utilizado às seguintes tecnologias e metodologias:</p>
          <ul>
            <li>
              <strong>HTML5</strong> – Para estruturação do conteúdo;
            </li>
            <li>
              <strong>CSS3</strong> – Para estilização e layout responsivo;
            </li>
            <li>
              <strong>Vite + React</strong> – Para construir a página e consumir a API;
            </li>
            <li>
              <strong>Git</strong> – Para controle de versão e colaboração;
            </li>
            <li>
              <strong>GitHub</strong> – Para hospedagem e versionamento do código;
            </li>
            <li>
              <strong>Canva</strong> – Para criação do protótipo do site;
            </li>
            <li>
              <strong>Trello</strong> – Para o gerenciamento de tarefas;
            </li>
            <li>
              <strong>Painéis Kanban</strong> – Para definições de tarefas;
            </li>
            <li>
              <strong>Pair programming</strong> – Para auxiliar em dúvidas;
            </li>
            <li>
              <strong>Daily Scrum</strong> – Para reuniões diárias de alinhamento e identificação de impedimentos na
              equipe.
            </li>
          </ul>
        </section>
      </main>
  </>
  );
};

export default Sobre;