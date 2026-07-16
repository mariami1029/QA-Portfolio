class RegisterPage {


    selectGender() {

        cy.get('#id_gender1')
            .check();

    }



    enterPassword(password) {

        cy.get('[data-qa="password"]')
            .type(password);

    }



    selectDateOfBirth() {

        cy.get('[data-qa="days"]')
            .select('10');

        cy.get('[data-qa="months"]')
            .select('5');

        cy.get('[data-qa="years"]')
            .select('2005');

    }



    enterFirstName(firstName) {

        cy.get('[data-qa="first_name"]')
            .type(firstName);

    }



    enterLastName(lastName) {

        cy.get('[data-qa="last_name"]')
            .type(lastName);

    }



    enterAddress(address) {

        cy.get('[data-qa="address"]')
            .type(address);

    }



    enterState(state) {

        cy.get('[data-qa="state"]')
            .type(state);

    }



    enterCity(city) {

        cy.get('[data-qa="city"]')
            .type(city);

    }



    enterZipcode(zipcode) {

        cy.get('[data-qa="zipcode"]')
            .type(zipcode);

    }



    enterMobile(mobile) {

        cy.get('[data-qa="mobile_number"]')
            .type(mobile);

    }



    clickCreateAccount() {

        cy.get('[data-qa="create-account"]')
            .click();

    }


}


export default new RegisterPage();