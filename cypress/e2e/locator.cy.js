// const cypress = require("cypress")
// const { it } = require("mocha") 

describe('Locating Elements', function()

{
  it('Verify types of locators', function()
    {

        cy.visit("https://demo.nopcommerce.com/") //opens the url
        cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch") //search box
         cy.get("[type='submit']").click() //click on the search button.
         cy.get(".product-box-add-to-cart-button").click()
         cy.get("#product_enteredQuantity_4").clear().type('2') //Quantity
         cy.get("#add-to-cart-button-4").click() // Add to cart after providing the quantity.
         cy.wait(25000)
         cy.get("#topcartlink > a > span.cart-label").click() //shopping cart link
         cy.wait(25000)
         cy.get(".product-unit-price").contains('$1800.00') // validating the cart.




    }
  
  
  
  )



}


)