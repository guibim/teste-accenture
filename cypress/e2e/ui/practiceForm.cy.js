import { faker } from '@faker-js/faker';
import practiceFormPage from '../../support/pages/PracticeFormPage';

describe('Desafio 2 - Formulario', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const mobileNumber = faker.string.numeric(10);
  const currentAddress = faker.location.streetAddress();
  const filePath = 'cypress/fixtures/files/teste.txt';

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
  });

  it('Deve preencher o formulario, fazer upload de arquivo txt e validar o popup', () => {
    practiceFormPage.accessPracticeFormPage();
    
    practiceFormPage.fillPersonalDetails(firstName, lastName, email, mobileNumber);
    practiceFormPage.fillDateOfBirth('January', '1990');
    practiceFormPage.fillSubjectsAndHobbies('Math');
    
    practiceFormPage.uploadFile(filePath);
    practiceFormPage.fillAddressDetails(currentAddress);
    
    practiceFormPage.submitForm();
    
    practiceFormPage.validateModalOpened();
    practiceFormPage.validateDataInModal(firstName, email);
    
    practiceFormPage.closeModal();
  });
});