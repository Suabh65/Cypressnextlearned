// const cypress = require("cypress")
// const { it } = require("mocha") 

// const { expect } = require("chai")

// const cypress = require("cypress")

describe('Suite Name', function()

{
  it('Confirms', function()
    {
      cy.visit("https://testautomationpractice.blogspot.com/")
      cy.get("#HTML9 > div.widget-content > button").click()
       cy.on('windows:confirm',(str) =>
       {
        expect(str).to.equal('Press a button!')
       }

       )


    }
  
  
  
  )



}


)