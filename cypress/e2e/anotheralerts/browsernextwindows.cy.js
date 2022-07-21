describe('Example to demonstrate the handling of new browser windows in cypress', () => {

    // it('Handling new Browser Tab', function () {
    //     cy.visit('https://demoqa.com/sample')
    //     cy.get('#tabButton').click()
    //     cy.url()
    //         .should('include', '/windows/new')
    //     cy.get('h3')
    //         .should('have.text', 'New Window')
    // })

    it('Handling new Browser Window', function () {
        cy.visit('https://demoqa.com/browser-windows')
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'https://demoqa.com/sample'; 
            }).as("popup")
        })
        cy.get('#windowButton').click()
        cy.get('@popup')
            .should("be.called")
        cy.get('h1')
            .should('have.text', 'This is a sample page')
    })
})