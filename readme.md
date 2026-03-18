# 🚀 Accenture Technical Challenge - DemoQA Automation

Este repositório contém a solução do desafio técnico de automação de testes para a **Accenture**, utilizando o ecossistema **DemoQA**. O projeto abrange testes de interface (UI) e de API, priorizando a escalabilidade através do padrão **Page Object Model (POM)** e a legibilidade via **BDD**.

---

## 🗂️ Índice de Desafios

* **Desafio 1:** API Book Store (Cypress)
* **Desafio 1_Alternativo:** API Book Store via Collections (Postman)
* **Desafio 2:** Frontend
* **Desafio 2.1:** Forms
* **Desafio 2.2:** UI Browser Windows
* **Desafio 2.3:** UI Web Tables 
* **Desafio 2.4:** UI Progress Bar
* **Desafio 2.5:** UI Sortable


---

## 🛠️ Tecnologias e Ferramentas
* **Cypress:** Framework principal para automação E2E e API.
* **JavaScript:** Linguagem base do projeto.
* **Faker.js:** Biblioteca para geração de massa de dados dinâmica e randômica.
* **Postman:** Coleção alternativa para validação do fluxo de API.
* **Gherkin:** Utilizado para a escrita da documentação BDD (Living Documentation).

---

## 📂 Estrutura do Projeto
```text
├── cypress/
│   ├── e2e/
│   │   ├── api/             # Scripts de teste de API (BookStore)
│   │   └── ui/              # Scripts de teste Front-end (WebTables, Forms, etc)
│   ├── support/
│   │   └── pages/           # Page Object Model (Seletores e Ações)
│   └── fixtures/            # Arquivos para upload e massas estáticas
│
├── postman/                 # Exportação da Collection JSON (Desafio 1 Alternativo)
├── cypress.config.js        # Configuração global do ambiente
└── BDD_Desafio.pdf    # Documentação do desafio em BDD
```

## ⚡ Instalação e Execução

### Pré-requisitos

O ambiente deve possuir os seguintes componentes instalados:

- **Node.js** ≥ 18.x  
- **npm** ≥ 9.x  
- **Git** (opcional, para clonagem do repositório)  
- **Postman** (opcional, para execução da collection alternativa de API)

