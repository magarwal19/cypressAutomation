/// <reference types= "cypress" />>
/// <reference types= "cypress-iframe" />>
import 'cypress-iframe'
import HomePage from '../../support/pageObject/HomePage.js'
import ShopPage from '../../support/pageObject/ShopPage.js';
import KartPage from '../../support/pageObject/KartPage';
import PurchasePage from '../../support/pageObject/PurchasePage';
//first test suite
describe('E2E scenario test', function(){
    let data1;
    const homePage = new HomePage();
    const shopPage = new ShopPage();
    const kartPage = new KartPage();
    const purchasePage = new PurchasePage();
    before(()=>{
        const env= Cypress.env('env')
        cy.visit( Cypress.env(env).url +  'angularpractice/')
        cy.fixture('example1.json').then(data =>{
            data1 = data;
        })
    } )
//add test case
it('E2E test', function(){
    homePage.getName().type(data1.name);
    homePage.getGender().select(data1.gender);
    homePage.getTwoWayBindingTextBox().should('have.value', data1.name);
    homePage.getEnterprenuerRadioButton().should('be.disabled');
    homePage.getName().should('have.attr', 'minlength', '2')
    homePage.getShopLink().click();
    data1.products.forEach(product => {
        cy.selectDevice(product);
    });
    shopPage.getCheckoutButton().click();
    let sum = 0;
    kartPage.getProductTotal().each(el=> {
        cy.log(el.text().split(' ')[1].trim())
        const val =parseInt(el.text().split(' ')[1].trim())
        sum+= val;
    }).then(()=> {
        kartPage.getTotal().then(el=> {
            const total = parseInt(el.text().split(' ')[1].trim());
            expect(total).to.equal(sum)
        });
        cy.log(sum)
    })  
    kartPage.getCHeckoutButton().click();
    Cypress.config('defaultCommandTimeout',10000)
    purchasePage.getLocationTextBox().type('India');
    purchasePage.getLocationLink().click();
    purchasePage.getTermsAndConditionCheckBox().click({force: true});
    purchasePage.getPurchaseButton().click();
    purchasePage.getSucessMessage().should('be.visible')
    purchasePage.getSucessMessage().then(el => expect(el.text().includes('Success')).to.be.true)

})

})