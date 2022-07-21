// const cypress = require("cypress")
// const { it } = require("mocha") 

describe('Elements', function()

{
  it('Verify textbox', function()
    {

        cy.visit("https://demoqa.com/") //opens the url
        // cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch") //search box
         cy.get("#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5").click() 
         cy.get("#item-0").click() 
         cy.get("#userName").type("Shyam Merchant")
         cy.get("#userEmail").type("shyammerchant@gmail.com")
         cy.get("#currentAddress").type("dhumbarahi, kathmandu")
         cy.get("#permanentAddress").type("dhumbarahi, kathmandu")
         cy.get("#submit").click() 
         
          
         
        
        //  cy.get("#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > div.custom-control.disabled.custom-radio.custom-control-inline").click()
        

        

         

        

    }
  
  
  
  )



}


)