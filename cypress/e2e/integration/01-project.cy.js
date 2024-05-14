/// <reference types="cypress"/>

describe("Cypress-Project-01 - Locating web elements", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/project-1");
  });

  it("Test Case 01 - Validate the Contact Us Information", () => {
    
    cy.get('.is-size-3').should('have.text', 'Contact Us');
    cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
    cy.get('#email').should('have.text', 'info@techglobalschool.com');
    cy.get('#phone-number').should('have.text', '(224) 580-2150');
  })

  it('Test Case 02 - Validate the Full name input box', () => {

    cy.get('.input').should('be.visible');
    cy.get('.input').should('have.attr', 'required');
    cy.get('.label').contains('Full name').should('be.visible')
    cy.get('.input').should('have.attr', 'placeholder', 'Enter your full name');
  })

  it('Test Case 03 - Validate the Gender radio button', () => {
    
    cy.get('.label').contains('Gender *').should('be.visible');
    cy.get('.mr-1').should('have.attr', 'required');
    cy.get('.radio').should('contain', 'Male')
    .should('contain', 'Female')
    .should('contain', 'Prefer not to disclose');
    
    cy.get('[class$="radio"]').click().should('be.clicked'); // fix
    cy.get('[class$="radio"]').click().should('be.clicked'); // fix




  })
});