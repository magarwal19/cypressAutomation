/// <reference types= "cypress" />>

//first test suite
describe('Working with different input items', function(){
//add test case
it('working with checkboxes', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])
}),

it('work with drop down', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    //static drop down
    cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
    //dynamic drop down
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(element => {
        if(element.text() === 'India')
        {
            element.click();
        }
    })
    cy.get('#autocomplete').should('have.value', 'India')
}),
it('work with hide and show and radio button', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    //check hide and show
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    //select radio button
    cy.get('input[value="radio2"]').check().should('be.checked')
}),
it('work with alert pop up and confirm pop ups', function(){
    const env= Cypress.env('env')
    cy.visit( Cypress.env(env).url +  'AutomationPractice/')
    //alert pop up
    cy.get('#alertbtn').click()
    //check alert text
    cy.on('window:alert',(str) =>{
        //using mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    //confirmation pop up 
    cy.get('#confirmbtn').click()
    cy.on('window:confirm',(str) =>{
        //using mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    //click on a link which opens new tab
    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'rahulshettyacademy.com/#/index')
    cy.go('back');
})

})