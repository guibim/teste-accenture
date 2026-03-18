import progressBarPage from '../../support/pages/ProgressBarPage';

describe('Desafio 2 - Progress Bar', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    progressBarPage.accessProgressBarPage();
  });
  it('Deve interagir com a Progress Bar e resetar ao chegar em 100%', () => {
    progressBarPage.startStopButton.click();

    progressBarPage.progressBar.should(($el) => {
      const value = parseInt($el.attr('aria-valuenow'));
      if (value >= 20 && value <= 25) {
        if ($el.closest('.row').find('#startStopButton').text() === 'Stop') {
          progressBarPage.startStopButton.click();
        }
      }
    });
    progressBarPage.progressBar.invoke('attr', 'aria-valuenow').then((val) => {
      expect(parseInt(val)).to.be.at.most(25);
    });

    cy.wait(500);
    cy.get('#progressBar [role="progressbar"]', { timeout: 30000 })
      .should('have.attr', 'aria-valuenow', '100');
    cy.wait(500);
    progressBarPage.resetButton.click();
    progressBarPage.progressBar.should('have.attr', 'aria-valuenow', '0');
  });
});