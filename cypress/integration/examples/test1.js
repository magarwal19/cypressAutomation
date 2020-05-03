/// <reference types= "cypress" />>

//first test suite
describe('starting learning cypress', function(){
//add test case
it('open the google url/', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'seleniumPractise/')
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    cy.get('.products').as('productsLocator')
    cy.get('@productsLocator').find('.product').should('have.length',4)
    cy.get('@productsLocator').find('.product').eq(1).contains('ADD TO CART').click()
    cy.get('@productsLocator').find('.product').each($el =>{
        if($el.find('h4.product-name').text().includes('Cashews'))
        {
            $el.find('button').click()
        }
    })
    //text is not a cypress function and hence we need to resolve promise before using it
    cy.get('.brand.greenLogo').then(element => cy.log(element.text()))
    //here should is getting used which is Chai function and is capable of handling promises
    cy.get('.brand.greenLogo').should('have.text','GREENKART')
})
})