import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProductsPage from '../pages/ProductsPage'


describe('Automation Exercise Test Suite', () => {


    let testUser = {
        name: 'Mariami Test',
        email: `mariami${Date.now()}@gmail.com`,
        password: 'Password123!',
        firstName: 'Mariami',
        lastName: 'Masurashvili',
        address: 'Tbilisi',
        state: 'Tbilisi',
        city: 'Tbilisi',
        zipcode: '0100',
        mobile: '555555555'
    }



    // TC01
    it('TC01 - Register User', () => {


        HomePage.visit();


        HomePage.clickSignupLogin();


        LoginPage.enterSignupName(testUser.name);

        LoginPage.enterSignupEmail(testUser.email);


        LoginPage.clickSignupButton();



        cy.get('[data-qa="password"]')
            .should('be.visible');



        RegisterPage.selectGender();

        RegisterPage.enterPassword(testUser.password);

        RegisterPage.selectDateOfBirth();

        RegisterPage.enterFirstName(testUser.firstName);

        RegisterPage.enterLastName(testUser.lastName);

        RegisterPage.enterAddress(testUser.address);

        RegisterPage.enterState(testUser.state);

        RegisterPage.enterCity(testUser.city);

        RegisterPage.enterZipcode(testUser.zipcode);

        RegisterPage.enterMobile(testUser.mobile);



        RegisterPage.clickCreateAccount();



        cy.url()
            .should('include','account_created');


    });




    // TC02
    it('TC02 - Login User with correct email and password', () => {


        HomePage.visit();


        HomePage.clickSignupLogin();


        LoginPage.enterLoginEmail(testUser.email);

        LoginPage.enterLoginPassword(testUser.password);


        LoginPage.clickLoginButton();



        cy.contains('Logged in as')
            .should('be.visible');


    });





    // TC03
    it('TC03 - Login User with incorrect email and password', () => {


        HomePage.visit();


        HomePage.clickSignupLogin();



        LoginPage.enterLoginEmail('wrongtest@gmail.com');

        LoginPage.enterLoginPassword('wrongPassword');


        LoginPage.clickLoginButton();



        cy.contains('Your email or password is incorrect!')
            .should('be.visible');


    });






    // TC04
    it('TC04 - Logout User', () => {


        HomePage.visit();


        HomePage.clickSignupLogin();



        LoginPage.enterLoginEmail(testUser.email);

        LoginPage.enterLoginPassword(testUser.password);


        LoginPage.clickLoginButton();



        cy.contains('Logged in as')
            .should('be.visible');



        LoginPage.clickLogout();



        cy.url()
            .should('include','login');


    });






    // TC05
    it('TC05 - Register User with existing email', () => {


        HomePage.visit();


        HomePage.clickSignupLogin();



        LoginPage.enterSignupName(testUser.name);

        LoginPage.enterSignupEmail(testUser.email);



        LoginPage.clickSignupButton();



        cy.contains('Email Address already exist!')
            .should('be.visible');


    });



});
// TC06
it('TC06 - Contact Us Form', () => {


    HomePage.visit();


    HomePage.clickContactUs();



    cy.get('[data-qa="name"]')
        .type('Mariami Test');


    cy.get('[data-qa="email"]')
        .type('mariami.contact@test.com');


    cy.get('[data-qa="subject"]')
        .type('Cypress Testing');


    cy.get('[data-qa="message"]')
        .type('Testing Contact Us functionality with Cypress');



    cy.get('[data-qa="submit-button"]')
        .click();



    cy.on('window:alert', (text) => {

        expect(text)
            .to.contains('Success');

    });



});
it('TC07 - Verify Test Cases Page', () => {


    HomePage.visit();


    cy.contains('Test Cases')
        .click();



    cy.url()
        .should('include','test_cases');


});
it('TC08 - Verify All Products', () => {


    HomePage.visit();


    ProductsPage.clickProducts();



    ProductsPage.verifyProductsPage();



    cy.get('.features_items')
        .should('be.visible');



});
it('TC09 - Search Product', () => {


    HomePage.visit();


    ProductsPage.clickProducts();



    cy.get('#search_product')
        .should('be.visible');



    ProductsPage.searchProduct('Blue Top');



    cy.get('.productinfo')
        .should('be.visible');



});
it('TC10 - Verify Product Details', () => {


    HomePage.visit();


    ProductsPage.clickProducts();



    ProductsPage.clickFirstProduct();



    cy.url()
        .should('include','product_details');



    ProductsPage.verifyProductDetails();


});