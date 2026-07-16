class HomePage {

    visit() {
        cy.visit('https://automationexercise.com/');
    }


    clickSignupLogin() {
        cy.contains('Signup / Login').click();
    }


    clickProducts() {
        cy.contains('Products').click();
    }


    clickContactUs() {
        cy.contains('Contact us').click();
    }


}

export default new HomePage();