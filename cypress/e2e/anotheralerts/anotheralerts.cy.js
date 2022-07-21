// import cypress from "cypress";
// import { describe } from "mocha";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
import alertPage from "../pageobject/allerts.cy.js";

describe('Test Suite', function() {

    it('Valid Alert Test', function() {
        const rp = new alertPage()
        rp.visit()
        rp.click()
        rp.click1()
       
        rp.click2()
        
        // lp.submit()
        // cy.title().should('be.equal','Dashboard / nopCommerce adminstration')
    })
})