// const cypress = require("cypress")
// const { it } = require("mocha") 

// const { before } = require("cypress/types/lodash")

// const cypress = require("cypress")

describe('My Test Suite', function () {

  before(function () {
    cy.fixture('login').then(function (data) {
      this.data = data
    })
  })
  it('FixtureDemoTest', function () {
    cy.visit('https://www.demoblaze.com/')
    cy.get("#login2").click()
    cy.get("#loginusername").type(this.data.username)
    cy.get("#loginpassword").type(this.data.password)
    cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click({force:true})






  }



  )



}


)