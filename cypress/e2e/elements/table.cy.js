// const cypress = require("cypress")
// const { it } = require("mocha") 

describe('Elements', function()

{
  it('Verify chekbox', function()
    {

        cy.visit("https://demoqa.com/") //opens the url
        // cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch") //search box
         cy.get("#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5").click() 
        
        
         
         
         cy.get("#item-3").click() 
         cy.get("#searchBox").type('39') 
         

        cy.get("#addNewRecordButton").click() 
        cy.get("#firstName").type("Shyam ")
        cy.get("#lastName").type("Merchant")
        cy.get("#userEmail").type("shyammerchant@gmail.com")   
        cy.get("#age").type("16")   
        cy.get("#salary-wrapper").type("1000")   
        cy.get("#department").type("Computer")  
        cy.get("#submit").click()



         

        

    }
  
  
  
  )



}


)