// import cypress from "cypress";
// import { describe } from "mocha";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
import autocomplete from "../pageobject/autocomplete.cy.js";
// import  widgets from "../pageobject/autocomplete.cy.js";

describe('Test Suite', function() {

    it('Valid Autocomplete Test', function() {
        const rp = new  autocomplete()
        rp.visit()
        rp.click()
        rp.click1()
       
        rp.fillsubjects()
    
        // lp.submit()
        // cy.title().should('be.equal','Dashboard / nopCommerce adminstration')
    })
})