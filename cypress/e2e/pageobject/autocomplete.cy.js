// const cypress = require("cypress");

class autocomplete
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
    cy.get("#item-1 > span").contains('Auto Complete').click({force:'true'}) 
  }
  fillsubjects()
   {
    cy.get('#autoCompleteMultipleContainer > div > div.auto-complete__value-container.auto-complete__value-container--is-multi.css-1hwfws3').click().type('bla')
    // field.clear()
    
    cy.get('#autoCompleteMultipleContainer > div > div.auto-complete__value-container.auto-complete__value-container--is-multi.css-1hwfws3').type('{enter}')
    cy.wait(2000)
    cy.get('#autoCompleteSingleContainer > div > div.auto-complete__value-container.css-1hwfws3').click().type('blu')
    cy.get('#autoCompleteMultipleContainer > div > div.auto-complete__value-container.auto-complete__value-container--is-multi.css-1hwfws3').type('{enter}')
    cy.wait(2000)
    // cy.get('.select2-search__field').type('{enter}')
    return this
   }
   

}



   
 export default autocomplete

