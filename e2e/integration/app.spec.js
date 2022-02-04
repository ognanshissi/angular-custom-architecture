/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })


  it('h2 - H2 should contains text', () => {
    cy.get('h2').contains("Resources")
  })
})
