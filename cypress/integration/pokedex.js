const URL = "http://127.0.0.1:5500/Pokedex/index.html";

describe("e2e test for pokedex", () => {
  before(() => {
    cy.visit(URL);
  });
  it("Tests the pokedex functionality", () => {
    cy.get("#1").click()
    cy.get("#2").click()
    cy.get("#3").click()
    cy.get("#exit-button").click()
    cy.get("#next-button").click()
    cy.get("#24").click()
    cy.get("#23").click()
    cy.get("#22").click()
    cy.get("#previous-button").click()
    cy.get("#exit-button").click()
    cy.get("#11").click()
    cy.get("#10").click()
    cy.get("#exit-button").click()
  })
})
