import { faker } from '@faker-js/faker';
import webTablesPage from '../../support/pages/WebTablesPage';

describe('Desafio 2 - Web Tables', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
    webTablesPage.accessWebTablesPage();
  });

  it('Deve criar, editar e deletar um novo registro', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const age = faker.string.numeric(2);
    const salary = faker.string.numeric(5);
    const department = faker.commerce.department();
    const newFirstName = faker.person.firstName();

    webTablesPage.fillRecordForm(firstName, lastName, email, age, salary, department);
    webTablesPage.validateRecordExists(email);

    webTablesPage.editRecordByEmail(email, newFirstName);
    
    webTablesPage.deleteRecordByEmail(email);
    webTablesPage.validateRecordDoesNotExist(email);
  });

});