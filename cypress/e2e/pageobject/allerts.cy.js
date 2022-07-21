// const cypress = require("cypress");

class alertPage
{
  visit()
  {
    cy.visit("https://demoqa.com/")
  }
  click()
  {
    cy.get("#app > div > div > div.home-body > div > div:nth-child(3) > div > div.card-body").click({force:'true'}) 
  }
  click1()
  {
    cy.get("#item-1 > span").contains('Alerts').click({force:'true'}) 
  }
   click2()
   {
    cy.get("#alertButton").click()
    cy.on('windows:confirm',(str) =>
       {
        expect(str).to.equal('You clicked a button')
       }


    )
   
    }

    click3()
    {
      cy.get("#timerAlertButton").click()
      cy.wait(7000)
      cy.on('windows:confirm',(str) =>
         {
          expect(str).to.equal('This alert appeared after 5 seconds')
         }
  
  
      )
    }

}



   
 export default alertPage

