// const cypress = require("cypress");

class LoginPage
{
  visit()
  {
    cy.visit("https://www.demoblaze.com/index.html")
  }
  click()
  {
    cy.get("#login2").click() 
  }

   fillEmail(value)
   {
    const field=cy.get('#loginusername')
    field.clear()
    field.type(value)
    return this
   }
   
   fillPassword(value)
   {
    const field= cy.get('#loginpassword')
    field.clear()
    field.type(value)
    return this
   }
   
   submit()
   {
     const button= cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
     button.click()
   }
}

 export default LoginPage

