//This page contains test related to add and remove Items from cart
describe('Cart functionality', () => {
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

  it('Add and remove Items from cart', () => {
    //Adding items in to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    
    //Remove item from cart
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  })
})