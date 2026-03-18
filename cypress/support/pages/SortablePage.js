class SortablePage {
  get interactionsCard() { return cy.get('.category-cards').contains('Interactions'); }
  get sortableMenu() { return cy.get('.menu-list').contains('Sortable'); }
  get listItems() { return cy.get('#demo-tabpane-list .list-group-item'); }

  accessSortablePage() {
    cy.visit('https://demoqa.com/');
    this.interactionsCard.click({ force: true });
    this.sortableMenu.click({ force: true });
  }

  moveItem(text, targetIndex) {
    this.listItems.contains(text).trigger('mousedown', { which: 1 });
    this.listItems.eq(targetIndex).trigger('mousemove').trigger('mouseup', { force: true });
  }
}

export default new SortablePage();