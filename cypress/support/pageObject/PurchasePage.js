class PurchasePage{

    getLocationTextBox(){
        return cy.get('#country');
    }

    getLocationLink(){
        return cy.get('.suggestions ul li a');
    }
    getTermsAndConditionCheckBox()
    {
        return cy.get('#checkbox2');
    }
    getPurchaseButton()
    {
        return cy.get(`input[value='Purchase']`)
    }
    
    getSucessMessage(){
        return cy.get('.alert.alert-success');
    }
}

export default PurchasePage;