// const cypress = require("cypress")
// const { it } = require("mocha") 

// const cypress = require("cypress")

describe('CustomSuite', () => {



       it('LoginTest', ()=>
       {
        cy.login('suabh100', 'friend')
        cy.login('suabh100', 'frien')
       }
       )
       it('Add customer', ()=>
       {
        cy.login('suabh100', 'friend')
        cy.log('Adding customer********')
       }
       )
       it('Edit customer', ()=>
       {
        cy.login('suabh100', 'friend')
        cy.log('****** Editing Customer *********')
       }
       )
  })

