class WebTablesPage {
  get elementsCategoryCard() { return cy.get('.category-cards').contains('Elements'); }
  get webTablesMenu() { return cy.get('.menu-list').contains('Web Tables'); }
  
  get addButton() { return cy.get('#addNewRecordButton'); }
  get firstNameInput() { return cy.get('#firstName'); }
  get lastNameInput() { return cy.get('#lastName'); }
  get userEmailInput() { return cy.get('#userEmail'); }
  get ageInput() { return cy.get('#age'); }
  get salaryInput() { return cy.get('#salary'); }
  get departmentInput() { return cy.get('#department'); }
  get submitButton() { return cy.get('#submit'); }
  
  get searchBox() { return cy.get('#searchBox'); }

  accessWebTablesPage() {
    cy.visit('https://demoqa.com/');
    this.elementsCategoryCard.click({ force: true });
    this.webTablesMenu.click({ force: true });
  }
  changeRowsPerPage(value) {
    cy.get('select[aria-label="rows per page"]').select(value.toString());
  }

  fillRecordForm(firstName, lastName, email, age, salary, department) {
    this.addButton.click({ force: true });
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.userEmailInput.type(email);
    this.ageInput.type(age);
    this.salaryInput.type(salary);
    this.departmentInput.type(department);
    this.submitButton.click({ force: true });
    cy.wait(500);
  }

  searchByEmail(email) {
    this.searchBox.type(`{selectall}{backspace}${email}`, { force: true });
    cy.wait(500);
  }

  clearSearch() {
    this.searchBox.type('{selectall}{backspace}', { force: true });
    cy.wait(500);
  }

  editRecordByEmail(email, newFirstName) {
    this.searchByEmail(email);
    cy.get('tbody > tr > :nth-child(4)').should('have.text', email)
      .closest('tr')
      .find('[title="Edit"]')
      .click({ force: true });
    this.firstNameInput.type(`{selectall}{backspace}${newFirstName}`);
    this.submitButton.click({ force: true });
    cy.wait(500);
    this.clearSearch();
  }

  deleteRecordByEmail(email) {
    this.searchByEmail(email);
    cy.get('tbody > tr > :nth-child(4)').should('have.text', email)
      .closest('tr')
      .find('[title="Delete"]')
      .click({ force: true });
    cy.wait(500);
    this.clearSearch();
  }

  validateRecordExists(email) {
    this.searchByEmail(email);
    cy.get('tbody > tr > :nth-child(4)').should('have.text', email);
    this.clearSearch();
  }

  validateRecordDoesNotExist(email) {
    this.searchByEmail(email);
    cy.get('body').should('not.contain', email);
    this.clearSearch();
  }
}

export default new WebTablesPage();