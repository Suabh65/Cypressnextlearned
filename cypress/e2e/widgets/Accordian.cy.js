// import cypress from "cypress";
// import { describe } from "mocha";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
import  widgets from "../pageobject/widgets.cy.js";

describe('Test Suite', function() {

    it('Valid Widgets Test', function() {
        const rp = new  widgets()
        rp.visit()
        rp.click()
        rp.click1()
       
        rp.click2()
        
        rp.click3()
      
    
        // lp.submit()
        // cy.title().should('be.equal','Dashboard / nopCommerce adminstration')
    })
})