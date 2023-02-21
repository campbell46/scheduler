describe("Navigation", () => {

  //Confirm page visit
  it("should visit root",() => {
    cy.visit("/");
  });

  //Click on Tuesday in navbar, confirm it is selected
  it("should navigate to Tuesday", () => {
    cy.visit("/")
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected")
  });
})