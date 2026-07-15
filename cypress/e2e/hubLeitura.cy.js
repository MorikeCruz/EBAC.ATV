describe('Formulário de Contato', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Deve enviar o formulário com sucesso', () => {

    cy.get('#name').type('João Silva')
    cy.get('#email').type('joao@email.com')
    cy.get('#subject').select('Dúvidas Gerais')
    cy.get('#message').type('Mensagem enviada pelo Cypress para teste.')

    cy.get('#btn-submit').click()

    cy.contains('Contato enviado com sucesso!').should('be.visible')

  })

  it('Não deve enviar o formulário com campos obrigatórios vazios', () => {

    cy.get('#btn-submit').click()

    cy.contains('Por favor, preencha o campo Nome.').should('be.visible')

  })

})