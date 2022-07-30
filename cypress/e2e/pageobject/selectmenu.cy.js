// const cypress = require("cypress");

class selectmenu
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
    cy.get("#item-8 > span").contains('Select Menu').click({force:'true'}) 
  } 
  fillsubjects()
   { 
    cy.get('#withOptGroup > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click().type('group 1, option 2')
    // field.clear()
    
    cy.get('#withOptGroup > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').type('{enter}')
    cy.wait(2000)
    cy.get(' #selectOne > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click().type('dr')
    cy.get('#selectOne > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').type('{enter}')
    cy.wait(2000)
    // cy.get('.select2-search__field').type('{enter}')
    return this
   }
   

}



   
 export default selectmenu

