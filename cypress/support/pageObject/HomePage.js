class HomePage{
getName(){
    return cy.get('input[name="name"]:nth-child(2)')
}

getGender(){
    return cy.get('#exampleFormControlSelect1')
}

getTwoWayBindingTextBox(){
    return cy.get('input[name="name"]:nth-child(1)')
}

getEnterprenuerRadioButton(){
    return cy.get('#inlineRadio3')
}

getShopLink(){
    return cy.get('a[href*="shop"]')
}

}
export default HomePage;