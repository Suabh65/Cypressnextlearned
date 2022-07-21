// const cypress = require("cypress")
// const { it } = require("mocha") 

describe('My testsuite', function()

{
  it('Navigation Tests', function()
    {

        cy.visit("https://demo.nopcommerce.com/") //opens the url
        cy.title().should('eq', 'nopCommerce demo store') //home

         cy.get(".ico-register").contains('Reg').click() 
         cy.title().should('eq','nopCommerce demo store. Register')// reg page
        
         cy.go('back')
         cy.title().should('eq', 'nopCommerce demo store') //Home

         cy.go('forward')
         cy.title().should('eq', 'nopCommerce demo store. Register') //reg page

         cy.go(-1)  //back




    }
  
  
  
  )



}


)