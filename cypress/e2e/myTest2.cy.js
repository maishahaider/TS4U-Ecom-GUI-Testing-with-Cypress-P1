
describe("My Second test with Cypress", () => {
  it("Check the title of Google", () => {
    cy.visit("https://www.google.com");
    cy.title().should("eq", "Google");
  });

  it("Verify title with negative", () => {
    cy.visit("https://www.google.com");
    cy.title().should("eq", "Google is a search engine");
  });
});
