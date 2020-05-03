/// <reference types= "cypress" />>

//first test suite
describe('Working with Web Table', function(){
//add test case
it('working with web table', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    cy.get('tr td:nth-child(2)').each((el,index) =>{
        if(el.text().includes('Java'))
        {
            cy.get('tr td:nth-child(2)').eq(index).next().then(price => expect(price.text()).to.equal('30'));
        }
    })
})

})