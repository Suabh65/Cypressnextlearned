// import cypress from "cypress";
// import { describe } from "mocha";
import LoginPage from "../pageobject/loginpage.cy.js";

describe('Test Suite', function() {

    it('Valid Login Test', function() {
        const lp = new LoginPage()
        lp.visit()
        lp.click()
        lp.fillEmail('suabh100')
        lp.fillPassword('friend')
        lp.submit()
        // cy.title().should('be.equal','Dashboard / nopCommerce adminstration')
    })
})