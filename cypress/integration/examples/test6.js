/// <reference types= "cypress" />>
/// <reference types= "cypress-iframe" />>
import 'cypress-iframe'
//first test suite
describe('Frames testing', function(){
//add test case
it('working with iframes', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href*=mentorship]').eq(0).click();
    cy.iframe().find('h1.pricing-title').should('have.length', 2)
})

})