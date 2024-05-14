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
    
    const exp = ["Male", "Female", "Prefer not to disclose"];

    cy.get('.radio').each(($el, index) => {
      cy.wrap($el).should('have.text', exp[index]).find('.mr-1').should('be.enabled').and('be.empty');
    })

    cy.get('.radio input').eq(0).click()
    .should('be.checked');

    cy.get('.radio').each(($el, index) => {
      if($el.text() === 'Male') cy.wrap($el).children().should("be.checked")
        else cy.wrap($el).children().should("not.be.checked")
    });

    cy.get('.radio input').eq(1).click()
    .should('be.checked');

    cy.get('.radio').each(($el, index) => {
      if($el.text() === 'Female') cy.wrap($el).children().should("be.checked")
        else cy.wrap($el).children().should("not.be.checked")
    });

  })

  it('Test Case 04 - Validate the address input box', () => {
    //task 2
    cy.get('.input').eq(1).should('be.visible')
    //task 3
    cy.get('.input').eq(1).should('not.have.attr', 'required')
    // Task 4
    cy.get('.label').eq(2).should('have.text', 'Address');
    // Task 5
    cy.get('.input').eq(1).should('have.attr', 'placeholder', 'Enter your address');

  })

  it('Test Case 05 - Validate the Email box', () => {
    // Task 2
    cy.get('.input').eq(2).should('be.visible');
    // Task 3
    cy.get('.input').eq(2).should('have.attr', 'required')
    // Task 4
    cy.get('.label').eq(3).should('have.text', 'Email *');
    // Task 5
    cy.get('.input').eq(2).should('have.attr', 'placeholder', 'Enter your email');


  })

  it('Test Case 06 - Validate the phone input box', () => {
    // Task 2
    cy.get('.input').eq(3).should('be.visible');
    // Task 3
    cy.get('.input').eq(3).should('not.have.attr', 'required')
    // Task 4
    cy.get('.label').eq(4).should('have.text', 'Phone');
    // Task 5
    cy.get('.input').eq(3).should('have.attr', 'placeholder', 'Enter your phone number');

  })

  it('Test Case 07 - Validate the message text area', () => {
    // Task 2
    cy.get('.textarea').should('be.visible');
    // Task 3
    cy.get('.textarea').should('not.have.attr', 'required');
    // Task 4
    cy.get('.label').eq(5).should('have.text', 'Message');
    // Task 5
    cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...');
  })

  it('Test Case 08 - Validate the consent checkbox', () => {
    // Task 2
    cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.');
    // Task 3
    cy.get('.checkbox input').should('have.attr', 'required');
    // Task 4
    cy.get('.checkbox input').click().should('be.checked');
    // Task 5
    cy.get('.checkbox input').click().should('not.be.checked');

  })
    it("Test Case 09 - Validate the SUBMIT button", () => {
      cy.get(".button").should("be.visible");
      cy.get(".button").should("not.be.disabled");
      cy.get(".button").should("have.text", "SUBMIT");
    });
  
    it("Test Case 10 - Validate the form submission", () => {
      cy.get('[placeholder="Enter your full name"]').type("Niko Vourtsis");
      cy.get('.radio input[type="radio"]').eq(0).check();
      cy.get('[placeholder="Enter your address"]').type("Chicago");
      cy.get('[placeholder="Enter your email"]').type("NikoVourtsis@gmail.com");
      cy.get('[placeholder="Enter your phone number"]').type("6303526089");
      cy.get(".textarea").type("Thank you TechGlobal");
      cy.get(".checkbox > input").check();
      cy.get(".button").click();
      cy.get(".mt-5").should("have.text", "Thanks for submitting!");
      Cypress.on("uncaught:exception", () => {
        return false;
      });
  });
});