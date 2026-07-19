describe('Cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Deve acessar a tela de login ao clicar em Criar Conta Grátis', () => {

    cy.contains('Criar Conta Grátis').click()

    cy.url().should('include', 'login.html')

    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#login-btn').should('be.visible')

  })

})