// const cypress = require("cypress");

class menu
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
    cy.get("#item-7 > span").contains('Menu').click({force:'true'}) 
  }
   click2()
   {
    cy.get('#nav > li:nth-child(1) > a').trigger('mouseover')
    cy.get('#nav > li:nth-child(2) > a').trigger('mouseover').select('#nav > li:nth-child(2) > ul > li:nth-child(3) > a')
    // cy.get('#nav > li:nth-child(2) > ul > li:nth-child(3) > a').trigger('mouseover')
    cy.get('#nav > li:nth-child(3) > a').trigger('mouseover')
// cy.get('.popover').should('be.visible')
   
    } 
  
  
  
}



   
 export default menu

