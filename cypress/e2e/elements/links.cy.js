// const cypress = require("cypress")
// const { it } = require("mocha") 

describe('Elements', function()

{
  it('Verify radiobutton', function()
    {

        cy.visit("https://demoqa.com/") //opens the url
        // cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch") //search box
         cy.get("#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5").click() 
        
        
         
         cy.get("#item-5").click() 
         cy.get("#simpleLink").click() 

         
        

         

        

    }
  
  
  
  )



}


)