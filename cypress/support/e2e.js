import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
/*Cypress.Commands.add('login', (username,password)=>
{
    cy.session([username,password], ()=>
    {
        cy.visit('/')
        cy.wait(5000)
        cy.get("input[id='user-name']").type(username)
        cy.get("input[id='password']").type(password)
        cy.contains('Login').click()
        cy.wait(500)
        cy.contains('Products')

    },
    {
        cacheAcrossSpecs: true
    }
)

})*/