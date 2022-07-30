// const cypress = require("cypress");

class hover
{
  visit()
  {
    cy.visit("https://demoqa.com/")
  }
  click()
  {
    cy.get("#app > div > div > div.home-body > div > div:nth-child(4) > div > div.card-body > h5").click({force:'true'}) 
  }
  click1()
  {
    cy.get("#item-6 > span").contains('Tool Tips').click({force:'true'}) 
  }
   click2()
   {
    cy.get('#toolTipButton').trigger('mouseover')
    cy.get('#toolTipTextField').trigger('mouseover')
// cy.get('.popover').should('be.visible')
   
    } 
    click3()
    {
      cy.get("#item-7 > span").contains('Menu').click({force:'true'}) 

    }
    click2()
    {
     cy.get('#nav > li:nth-child(1) > a').trigger('mouseover')
    //  cy.get('#toolTipTextField').trigger('mouseover')
 // cy.get('.popover').should('be.visible')
    
     } 
  

}



   
 export default hover

