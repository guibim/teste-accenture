import { faker } from '@faker-js/faker';

describe('Desafio API - Fluxo de Aluguel de Livros na DemoQA', () => {
  let userId;
  let accessToken;
  let firstBookIsbn;
  let secondBookIsbn;

  const dynamicUsername = faker.internet.username();
  const userPassword = 'Password@123!'; 
  const baseUrl = 'https://demoqa.com';

  before(() => {
    cy.log(`Usuario gerado para este teste: ${dynamicUsername}`);
  });

  it('Passo 1: Deve criar um novo usuario', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/Account/v1/User`,
      body: {
        userName: dynamicUsername,
        password: userPassword
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('userID');
      userId = response.body.userID; 
    });
  });

  it('Passo 2: Deve gerar um token de acesso', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/Account/v1/GenerateToken`,
      body: {
        userName: dynamicUsername,
        password: userPassword
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('Success');
      accessToken = response.body.token; 
    });
  });

  it('Passo 3: Deve confirmar se o usuario esta autorizado', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/Account/v1/Authorized`,
      body: {
        userName: dynamicUsername,
        password: userPassword
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.true; 
    });
  });

  it('Passo 4: Deve listar os livros disponiveis e escolher dois aleatoriamente', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/BookStore/v1/Books`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.books.length).to.be.greaterThan(1);
      
      cy.log('Lista de Livros Disponiveis:');
      response.body.books.forEach((book, index) => {
        cy.log(`${index + 1}. ${book.title}`);
      });
      
      const randomBooks = faker.helpers.arrayElements(response.body.books, 2);
      
      firstBookIsbn = randomBooks[0].isbn;
      secondBookIsbn = randomBooks[1].isbn;
      
      cy.log(`Livros escolhidos aleatoriamente: "${randomBooks[0].title}" e "${randomBooks[1].title}"`);
    });
  });

  it('Passo 5: Deve alugar dois livros de livre escolha', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/BookStore/v1/Books`,
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: {
        userId: userId,
        collectionOfIsbns: [
          { isbn: firstBookIsbn },
          { isbn: secondBookIsbn }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.books).to.have.length(2);
    });
  });

  it('Passo 6: Deve listar os detalhes do usuario com os livros escolhidos', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/Account/v1/User/${userId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(dynamicUsername);
      expect(response.body.books).to.have.length(2);
      
      const accountIsbns = response.body.books.map(book => book.isbn);
      expect(accountIsbns).to.include(firstBookIsbn);
      expect(accountIsbns).to.include(secondBookIsbn);
    });
  });
});