// const cypress = require("cypress");

class slider
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
    cy.get("#item-3 > span").contains('Slider').click({force:'true'}) 
  }
   click2()
   {
    cy.get("#sliderContainer > div.col-9 > span > input")
    .invoke("val", 33000)
    .trigger("change")
    .click({ force: true })
    
   
    }

  

}



   
 export default slider

