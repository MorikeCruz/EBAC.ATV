describe('Catálogo', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Deve acessar o catálogo', () => {

    cy.contains('Explorar Catálogo').click()

    cy.url().should('include', 'catalog')

  })

})