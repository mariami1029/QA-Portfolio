class ProductsPage {


    clickProducts() {

        cy.contains('Products')
            .click();

    }



    verifyProductsPage() {

        cy.url()
            .should('include', 'products');

    }



    searchProduct(productName) {

        cy.get('#search_product')
            .type(productName);


        cy.get('#submit_search')
            .click();

    }



    verifySearchedProduct(productName) {

        cy.contains(productName)
            .should('be.visible');

    }



    clickFirstProduct() {

        cy.contains('View Product')
            .first()
            .click();

    }



    verifyProductDetails() {

        cy.contains('Category:')
            .should('be.visible');


        cy.contains('Availability:')
            .should('be.visible');


        cy.contains('Condition:')
            .should('be.visible');


        cy.contains('Brand:')
            .should('be.visible');

    }


}


export default new ProductsPage();