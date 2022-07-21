

describe('UI Elements', function()
{

it('Verify Inputbox & Radio Buttons',function()

{
   cy.visit("https://demo.nopcommerce.com/")   // Visit URL
   cy.url().should('include', 'demo')          // Verify URL should include 'demo'
   cy.get("ico-login").click()
   cy.wait(25000)
   cy.get("email").type("gemonmonge@gmail.com") 
   cy.get("password").type("Monge123") 
   cy.get("['.login-button']").click()
   
   
   

}
)



})