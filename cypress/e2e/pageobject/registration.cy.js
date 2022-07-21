// const cypress = require("cypress");

class RegistrationPage
{
  visit()
  {
    cy.visit("https://demoqa.com/")
  }
  click()
  {
    cy.get("#app > div > div > div.home-body > div > div:nth-child(2) > div > div.card-body > h5").click({force:'true'}) 
  }
  click1()
  {
    cy.get("#item-0 > span").contains('Practice Form').click({force:'true'}) 
  }

   fillfirstname(value)
   {
    const field=cy.get('#firstName')
    field.clear()
    field.type(value)
    return this
   }
   filllastname(value)
   {
    const field=cy.get('#lastName')
    field.clear()
    field.type(value)
    return this
   }
   fillEmail(value)
   {
    const field=cy.get('#userEmail')
    field.clear()
    field.type(value)
    return this
   }

   click2()
   {
     cy.get("#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label").click() 
   }
   
   fillMobile(value)
   {
    const field= cy.get('#userNumber')
    field.clear()
    field.type(value)
    return this
   }
   filldob()
   {
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('January', {force: true})
    cy.get('.react-datepicker__year-select').select('2003', {force: true})
    cy.get('.react-datepicker__month > div:nth-child(2) > div:nth-child(3) ').click({force: true})
    

    // field.clear()
    // field.type(value)
    // return this
   }
   fillsubjects(value)
   {
    cy.get('#subjectsWrapper').click().type('eng')
    // field.clear()
    
    cy.get('#subjectsWrapper').type('{enter}')
    cy.wait(2000)
    // cy.get('.select2-search__field').type('{enter}')
    return this
   }

   click3()
   {
     cy.get('[type="checkbox"]#hobbies-checkbox-1' ).click({force:true}) 
   }
  
   fillfileupload()
   {
    const filePath = cy.get('#uploadPicture') ;
    
    filePath.attachFile('wpx.png' );
    // cy.get('#uploadPicture').attachfile(filePath);
    // return this
   }
   fillCurrentaddress(value)
   {
    const address = cy.get('#currentAddress-wrapper') ;
    address.click({force: true});
    // address.clear()
    address.type(value)
    return this
   }
   fill(value)
   {
    cy.get('#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').click().type('nc')
    // field.clear()
    
    cy.get('#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder').type('{enter}')
    cy.wait(2000)
    // cy.get('.select2-search__field').type('{enter}')
    return this
   }
   
  //  submit()
  //  {
  //    const button= cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')
  //    button.click()
  //  }
}

 export default RegistrationPage

