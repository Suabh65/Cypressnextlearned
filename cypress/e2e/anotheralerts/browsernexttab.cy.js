describe('Example to demonstrate the handling of new browser windows in cypress', () => {

    it('Handling new Browser Tab', function () {
        cy.visit('https://demoqa.com/')
        cy.get("#app > div > div > div.home-body > div > div:nth-child(3) > div > div.card-body").click({force:'true'})
        cy.get("#item-0 > span").contains('Browser Windows').click({force:'true'}) 
        cy.get('#tabButton').click({force:true})
        
            cy.url().should('include', 'https://demoqa.com/browser-windows')
        cy.get('h3')
            .should('have.text', 'This is a sample page')
    })

    // it('Handling new Browser Window', function () {
    //     cy.visit('https://demoqa.com/browser-windows')
    //     cy.window().then((win) => {
    //         cy.stub(win, 'open', url => {
    //             win.location.href = 'https://demoqa.com/sample'; 
    //         }).as("popup")
    //     })
    //     cy.get('#windowButton').click()
    //     cy.get('@popup')
    //         .should("be.called")
    //     cy.get('h1')
    //         .should('have.text', 'This is a sample page')
    // })
})