/// <reference types= "cypress" />>

//first test suite
describe('Clicking on hidden drop down value', function(){
//add test case
it('Clicking on hidden drop down value', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('contain', 'top')
    cy.contains('Reload').click({force: true})
    cy.url().should('not.contain','top')
})

})