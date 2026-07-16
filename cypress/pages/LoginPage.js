class LoginPage {


    enterSignupName(name) {

        cy.get('[data-qa="signup-name"]')
            .type(name);

    }



    enterSignupEmail(email) {

        cy.get('[data-qa="signup-email"]')
            .type(email);

    }



    clickSignupButton() {

        cy.get('[data-qa="signup-button"]')
            .click();

    }



    enterLoginEmail(email) {

        cy.get('[data-qa="login-email"]')
            .type(email);

    }



    enterLoginPassword(password) {

        cy.get('[data-qa="login-password"]')
            .type(password);

    }



    clickLoginButton() {

        cy.get('[data-qa="login-button"]')
            .click();

    }
    verifyLoggedInUser(name) {

    cy.contains(`Logged in as ${name}`)
        .should('be.visible');

}



    clickLogout() {

        cy.contains('Logout')
            .click();

    }


}


export default new LoginPage();