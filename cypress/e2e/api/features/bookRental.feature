# language: pt

Funcionalidade: Fluxo de Aluguel de Livros na DemoQA
  Como um novo leitor do sistema DemoQA
  Quero poder me cadastrar, gerar meu token de acesso e visualizar a lista de livros
  Para que eu possa escolher e alugar dois livros do catálogo

  Cenário: Realizar o aluguel de dois livros com sucesso
    Dado que eu crio um novo usuário no sistema DemoQA
    E gero um token de acesso válido para este usuário
    E confirmo que o usuário está devidamente autorizado
    Quando eu busco a lista de livros disponíveis
    E reservo dois livros da minha escolha
    Então devo ver os detalhes do meu usuário contendo os dois livros alugados