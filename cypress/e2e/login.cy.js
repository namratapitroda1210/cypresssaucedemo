beforeEach(() => {
  cy.visit('/')
})
describe('Login spec', () => {
  it('check user name required message', () => {
    cy.contains('Login').click()
    cy.wait(500)
    cy.contains('Username is required')
  })
  it('check password required message', () => {
    cy.get("input[id='user-name']").type('abc')
    cy.contains('Login').click()
    cy.wait(500)
    cy.contains('Password is required')
  })
  it('check Invalid Username', () => {
    cy.get("input[id='user-name']").type('abc')
    cy.get("input[id='password']").type('secret_sauce')
    cy.contains('Login').click()
    cy.wait(500)
    cy.contains('Username and password do not match any user in this service')
  })
  it('check Invalid Password', () => {
    cy.get("input[id='user-name']").type('standard_user')
    cy.get("input[id='password']").type('Secret_Sauce')
    cy.contains('Login').click()
    cy.wait(500)
    cy.contains('Username and password do not match any user in this service')
  })
  it('Validate successful Login', () => {
    cy.get("input[id='user-name']").type('standard_user')
    cy.get("input[id='password']").type('secret_sauce')
    cy.contains('Login').click()
    cy.wait(500)
    cy.contains('Products')
  })
})