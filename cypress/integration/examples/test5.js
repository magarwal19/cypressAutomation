/// <reference types= "cypress" />>

//first test suite
describe('New Tab test', function(){
//add test case
it('New Tab test', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    cy.get('#opentab').then(element => {
        cy.visit(element.prop('href'))  
    })
})

})