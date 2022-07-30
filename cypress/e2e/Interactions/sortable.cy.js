describe('Sorting table', () => {
    it('sorts', () => {
      cy.visit('https://demoqa.com/sortable')
  
      cy.get('#myGrid') // table
      .within(() => {
        cy.get('[role=rowgroup] .ag-row')
        .should('have.length', 3) // non-header rows
  
        cy.log('**sort by price**').wait(1000)
        cy.contains('.ag-header-cell-label', 'Price').click()
        // check ↑ is visible
        cy.contains('.ag-header-cell-label', 'Price')
        .find('[ref=eSortAsc]').should('be.visible')
      })
    })
  })