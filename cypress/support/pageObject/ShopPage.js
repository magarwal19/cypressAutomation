class ShopPage{

    getAddButton(){
        return cy.get('.btn.btn-info')
    }

    getProductName(){
        return cy.get('h4.card-title')
    }
    getCheckoutButton(){
        return cy.get('a.nav-link.btn')
    }

}
export default ShopPage