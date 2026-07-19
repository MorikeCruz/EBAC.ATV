describe('Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/login.html')
  })

  it('Deve realizar login com sucesso', () => {

    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()

    cy.url().should('include', 'dashboard.html')

  })

})