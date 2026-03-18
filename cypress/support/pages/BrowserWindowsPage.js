class BrowserWindowsPage {
  get alertsWindowsCategoryCard() { return cy.contains('.card', 'Alerts, Frame & Windows', { timeout: 15000 }); }
  get browserWindowsMenu() { return cy.contains('.text', 'Browser Windows', { timeout: 15000 }); }
  get newWindowButton() { return cy.get('#windowButton'); }
  get samplePageHeading() { return cy.get('#sampleHeading'); }

  accessBrowserWindowsPage() {
    cy.visit('https://demoqa.com/');
    this.alertsWindowsCategoryCard.scrollIntoView().click({ force: true });
    this.browserWindowsMenu.scrollIntoView().click({ force: true });
  }

  interceptAndClickNewWindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });
    this.newWindowButton.scrollIntoView().click({ force: true });
  }

  validateWindowOpenedAndNavigate() {
    cy.get('@windowOpen').should('have.been.calledWith', '/sample');
    cy.visit('https://demoqa.com/sample');
  }

  validateSamplePageText() {
    this.samplePageHeading.should('be.visible').and('have.text', 'This is a sample page');
  }

  simulateClosingWindow() {
    cy.go('back');
  }
}

export default new BrowserWindowsPage();