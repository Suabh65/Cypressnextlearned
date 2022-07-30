// import cypress from "cypress";
// import { describe } from "mocha";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
import selectmenu from "../pageobject/selectmenu.cy.js";
// import  widgets from "../pageobject/autocomplete.cy.js";

describe('Test Suite', function() {

    it('Valid select menu', function() {
        const rp = new  selectmenu()
        rp.visit()
        rp.click()
        rp.click1()
       
        rp.fillsubjects()
    
        // lp.submit()
        // cy.title().should('be.equal','Dashboard / nopCommerce adminstration')
    })
})