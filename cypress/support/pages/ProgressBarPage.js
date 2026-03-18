class ProgressBarPage {
  get widgetsCard() { return cy.get('.category-cards').contains('Widgets'); }
  get progressBarMenu() { return cy.get('.menu-list').contains('Progress Bar'); }
  get startStopButton() { return cy.get('#startStopButton'); }
  get progressBar() { return cy.get('#progressBar [role="progressbar"]'); }
  get resetButton() { return cy.get('#resetButton'); }

  accessProgressBarPage() {
    cy.visit('https://demoqa.com/');
    this.widgetsCard.click({ force: true });
    this.progressBarMenu.click({ force: true });
  }
}

export default new ProgressBarPage();