describe('my contact', () => {
    it('[1] visit website cypress', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        cy.get ('[name="first_name"]').type("mohamed")
        cy.get ('[name="last_name"]').type("Elsamady")
        cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
        cy.get ('.feedback-input') .eq (3).type("cypress")
        cy.get('[type="submit"]').click()
        
        
    });

    it('[2] visit website cypress', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

      cy.get ('[name="first_name"]').type("mohamed")
       cy.get ('[name="last_name"]').type("Elsamady")
        cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
        cy.get ('[name="message"]').type("cypress")
       cy.get('[type="submit"]').click()

   });

   it('[3] visit website cypress', () => {
       cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
       cy.get ('[name="first_name"]').type("mohamed")
       cy.get ('[name="last_name"]').type("Elsamady")
       cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
       cy.get ('.feedback-input') .eq (3).type("cypress")
       cy.get('[type="submit"]').click()
       cy.url().should('eq','https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
       cy.title().should('eq','Gianni Bruno - Designer')
        

    });

    it('[4] Submit the form with negative Scenario', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get ('[name="first_name"]').type("mohamed")
        cy.get ('[name="last_name"]').type("Elsamady")
        //cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
        cy.get ('.feedback-input') .eq (3).type("cypress")
        cy.get ('.contact_button') .eq (1).click()
        cy.contains("all fields are required").should('be.exist')
        
    });

    it.only ('[5] Assertion  Attr and css', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
          cy.get ('[name="first_name"]').type("mohamed")
       cy.get ('[name="last_name"]').type("Elsamady")
        cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
        cy.get ('[name="message"]').type("cypress")
       cy.get('[type="submit"]').click()
       cy.visit("https://www.webdriveruniversity.com/")
        cy.get('[href="Contact-Us/contactus.html"]').should('have.attr','target','_blank')
        cy.get('[href="Contact-Us/contactus.html"]').should('have.css','font-size','14px')      
    });
   /* beforeEach(function(){
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
   })*/
});