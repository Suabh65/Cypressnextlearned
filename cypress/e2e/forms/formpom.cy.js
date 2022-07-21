// import cypress from "cypress";
// import { describe } from "mocha";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
import RegistrationPage from "../pageobject/registration.cy.js";

describe('Test Suite', function() {

    it('Valid Registration Test', function() {
        const rp = new RegistrationPage()
        rp.visit()
        rp.click()
        rp.click1()
        rp.fillfirstname('suabh')
        rp.filllastname('bhattarai')
        rp.fillEmail('suabh100@gmail.com')
        rp.click2()
        rp.fillMobile('98576')
        rp.filldob()
        rp.fillsubjects()
        rp.click3()
        rp.fillfileupload()
        rp.fillCurrentaddress('kathmandu')
    
        // lp.submit()
        // cy.title().should('be.equal','Dashboard / nopCommerce adminstration')
    })
})