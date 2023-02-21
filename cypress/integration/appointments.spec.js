describe("Appointments", () => {

  //Before each test: reset database, visit url, make sure content is loaded
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset")
    cy.visit("/");
    cy.contains('Monday');
  })

  //Book an interview and confirm the new booking is displayed
  it("should book an interview", () => {
    cy.get("[alt=Add]")
      .first()
      .click();

    cy.get('[data-testid="student-name-input"]').type("Lydia Miller-Jones");

    cy.get('[alt="Sylvia Palmer"]').click();

    cy.contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer")
  })

  //Edit an interview and confirm the inputs have changed
  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

    cy.get('[data-testid="student-name-input"]')
      .clear()
      .type("Lydia Miller-Jones");
    cy.get('[alt="Tori Malcolm"]').click();
    
    cy.contains('Save').click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm")
  })

  //Delete interview and confirm it is no longer displayed
  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .click({ force: true });
    
    cy.contains("Confirm").click();

    cy.contains("Deleting").should('exist');
    cy.contains("Deleting").should('not.exist');

    cy.contains(".appointment__card--show", "Archie Cohen")
    .should('not.exist');
  })
})