// const cypress = require("cypress")
// const { it } = require("mocha") 

describe('Elements', function()

{


    before(function () {
        cy.fixture('textbox').then(function (data) {
          this.data = data
        })
      })
  it('Verify textbox', function()
    {

        cy.visit("https://demoqa.com/") //opens the url
        // cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch") //search box
         cy.get("#app > div > div > div.home-body > div > div:nth-child(1) > div > div.card-body > h5").click() 
         cy.get("#item-0").click() 
         cy.get("#userName").type(this.data.username)
         cy.get("#userEmail").type(this.data.userEmail)
         cy.get("#currentAddress").type(this.data.currentAddress)
         cy.get("#permanentAddress").type(this.data.permanentAddress)
         cy.get("#submit").click() 
         
          
         
        
        //  cy.get("#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > div.custom-control.disabled.custom-radio.custom-control-inline").click()
        

        

         

        

    }
  
  
  
  )



}


)