class PracticeFormPage {
  get formsCategoryCard() { return cy.contains('.card', 'Forms', { timeout: 15000 }); } //utilizei longo timeout pois o site demora para carregar
  get practiceFormMenu() { return cy.contains('.text', 'Practice Form', { timeout: 15000 }); }
  get firstNameInput() { return cy.get('#firstName'); }
  get lastNameInput() { return cy.get('#lastName'); }
  get emailInput() { return cy.get('#userEmail'); }
  get genderMaleRadio() { return cy.get('label[for="gender-radio-1"]'); }
  get mobileNumberInput() { return cy.get('#userNumber'); }
  get dateOfBirthInput() { return cy.get('#dateOfBirthInput'); }
  get monthSelect() { return cy.get('.react-datepicker__month-select'); }
  get yearSelect() { return cy.get('.react-datepicker__year-select'); }
  get daySelect() { return cy.get('.react-datepicker__day--015'); }
  get subjectsInput() { return cy.get('#subjectsInput'); }
  get sportsCheckbox() { return cy.get('label[for="hobbies-checkbox-1"]'); }
  get uploadPictureInput() { return cy.get('#uploadPicture'); }
  get currentAddressInput() { return cy.get('#currentAddress'); }
  get stateInput() { return cy.get('#state input'); }
  get cityInput() { return cy.get('#city input'); }
  get submitButton() { return cy.get('#submit'); }
  get modalTitle() { return cy.get('#example-modal-sizes-title-lg'); }
  get modalTable() { return cy.get('table'); }

  accessPracticeFormPage() {
    cy.visit('https://demoqa.com/');
    this.formsCategoryCard.scrollIntoView().click({ force: true });
    this.practiceFormMenu.scrollIntoView().click({ force: true });
  }

  fillPersonalDetails(firstName, lastName, email, mobile) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.genderMaleRadio.click({ force: true });
    this.mobileNumberInput.type(mobile);
  }

  fillDateOfBirth(month, year) {
    this.dateOfBirthInput.click();
    this.monthSelect.select(month);
    this.yearSelect.select(year);
    this.daySelect.click();
  }

  fillSubjectsAndHobbies(subject) {
    this.subjectsInput.type(`${subject}{enter}`);
    this.sportsCheckbox.click({ force: true });
  }

  uploadFile(filePath) {
    this.uploadPictureInput.selectFile(filePath);
  }

  fillAddressDetails(address) {
    this.currentAddressInput.type(address);
    this.stateInput.type('NCR{enter}', { force: true });
    this.cityInput.type('Delhi{enter}', { force: true });
  }

  submitForm() {
    this.submitButton.scrollIntoView().click({ force: true });
  }

  validateModalOpened() {
    this.modalTitle.should('be.visible').and('have.text', 'Thanks for submitting the form');
  }

  validateDataInModal(firstName, email) {
    this.modalTable.contains('td', firstName).should('be.visible');
    this.modalTable.contains('td', email).should('be.visible');
  }

  closeModal() {
    cy.get('body').type('{esc}');
    this.modalTitle.should('not.exist');
  }
}

export default new PracticeFormPage();