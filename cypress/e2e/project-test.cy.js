describe('Input data', () => {
  it('passes', () => {
    cy.visit('http://localhost:3001/')
    cy.get('#fullname').type("Adjie")
    cy.get('#alamat').type("Jimbaran, Badung")
    cy.get('#pesan').type("Happy Wedding")
    cy.get('#btn').click()

    cy.get('#fullname').clear()
    cy.get('#alamat').clear()
    cy.get('#pesan').clear()

    cy.get('#fullname').type("")
    cy.get('#alamat').type("")
    cy.get('#pesan').type("")
    cy.get('#btn').click()
  })
})


