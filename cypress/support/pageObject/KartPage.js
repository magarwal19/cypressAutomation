class KartPage{
    getCHeckoutButton(){
        return cy.get('.btn.btn-success')
    }
    getProductTotal(){
        return cy.get(`td[class*='col-sm']:nth-child(4)`)
    }
    getTotal(){
        return cy.get(`.text-right`)
    }
}

export default KartPage;