import browserWindowsPage from '../../support/pages/BrowserWindowsPage';

describe('Desafio 2 - Janelas do Navegador', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => {
      return false;
    });
  });

  it('Deve abrir nova janela, validar mensagem e simular encerramento', () => {
    browserWindowsPage.accessBrowserWindowsPage();
    
    browserWindowsPage.interceptAndClickNewWindow();
    browserWindowsPage.validateWindowOpenedAndNavigate();
    
    browserWindowsPage.validateSamplePageText();
    
    browserWindowsPage.simulateClosingWindow();
  });
});