describe('Input data', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#fullname').type("Adjie")
    cy.get('#alamat').type("Jimbaran, Badung")
    cy.get('#pesan').type("Happy Wedding")
    cy.get('#btn').click()

    cy.get('#fullname').clear()
    cy.get('#alamat').clear()
    cy.get('#pesan').clear()

    cy.get('#fullname').type("Willy")
    cy.get('#alamat').type("Kuta, Badung")
    cy.get('#pesan').type("Selamat menempuh hidup baru")
    cy.get('#btn').click()
  })
})


