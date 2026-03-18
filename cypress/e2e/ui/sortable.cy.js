import sortablePage from '../../support/pages/SortablePage';

describe('Desafio UI - Sortable', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    sortablePage.accessSortablePage();
  });

  it('Deve colocar os elementos na ordem crescente utilizando drag and drop', () => {
    const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    items.forEach((itemText, index) => {
      sortablePage.moveItem(itemText, index);
    });
    sortablePage.listItems.each(($el, index) => {
      cy.wrap($el).should('have.text', items[index]);
    });
  });
});