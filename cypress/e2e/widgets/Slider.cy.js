// import cypress from "cypress";
// import { describe } from "mocha";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
import  slider from "../pageobject/Sllider.cy.js";

describe('Test Suite', function() {

    it('Valid Slider Test', function() {
        const rp = new  slider()
        rp.visit()
        rp.click()
        rp.click1()
       
        rp.click2()
        
        // rp.click3()
      
    
        // lp.submit()
        // cy.title().should('be.equal','Dashboard / nopCommerce adminstration')
    })
})