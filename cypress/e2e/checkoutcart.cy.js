//This page contains test related to Successful checkout flow having order placed for multiple Items added in the cart

describe('Shopping cart', () => {
  beforeEach(() => {
    //Load webpage
    cy.visit('/')
    
    //Enter correct username and password
    cy.get("input[id='user-name']").type('standard_user')
    cy.get("input[id='password']").type('secret_sauce')
    
    //Click on Login button
    cy.contains('Login').click()
   
    //Verify Products on list page
    cy.contains('Products')
  })

  it('Checkout functionality', () => {
    //Add Items to cart
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

    //Navigate to cart and checkout
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click()

    //Fill personal details
    cy.fixture('data.json').then((data) => {
      cy.get('[data-test="firstName"]').type(data.Personalinfo.Firstname);
      cy.get('[data-test="lastName"]').type(data.Personalinfo.Lastname);
      cy.get('[data-test="postalCode"]').type(data.Personalinfo.code);
    });

    //click on continue button
    cy.get('[data-test="continue"]').click();

    //Finish shopping flow and confirm order
    cy.get('[data-test="finish"]').click();
    //check comfirmation message
    cy.get('.complete-text').should('be.visible').and('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    //navigate back to home
    cy.get('[data-test="back-to-products"]').click();
  })
})