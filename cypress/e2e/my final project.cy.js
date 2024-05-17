describe('my final project', () => {
    
 it('[1]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.get('#udemy-promo-thumbnail > :nth-child(2) > a').click()
    });
    it('[2]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.get('#udemy-promo-thumbnail > :nth-child(3) > a').click()
    });
    it('[3]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.visit('#udemy-promo-thumbnail > :nth-child(4) > a')
    });
    it('[4]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.visit('#udemy-promo-thumbnail > :nth-child(5) > a')
    });
    it('[5]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.visit('#udemy-promo-thumbnail > :nth-child(6) > a')
    });
    it('[6]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.visit('#udemy-promo-thumbnail > :nth-child(7) > a')
    });
    it('[7]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.visit('#udemy-promo-thumbnail > :nth-child(8) > a')
    });
    it('[8]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.visit('#udemy-promo-thumbnail > :nth-child(9) > a')
    });
    it('[9]  contact us button ', () => {
        cy.visit(" http://www.webdriveruniversity.com")
        cy.get('#contact-us > .thumbnail > .section-title > h1').click()
    });
    it('[10]  contact us   ', () => {
       
        cy.visit(" http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get ('[name="first_name"]').type("mohamed")
        cy.get ('[name="last_name"]').type("Elsamady")
        cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
        cy.get ('.feedback-input') .eq (3).type("cypress")
        
    });
    it('[11]  contact us invalid email  ', () => {
       
        cy.visit(" http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get ('[name="first_name"]').type("mohamed")
        cy.get ('[name="last_name"]').type("Elsamady")
        cy.get ('[name="email"]').type("mohamedelsamady")
        cy.get ('.feedback-input') .eq (3).type("cypress")
        cy.get('[type="reset"]').click()
    });
    it('[12]  contact us valid    ', () => {
       
        cy.visit(" http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get ('[name="first_name"]').type("mohamed")
        cy.get ('[name="last_name"]').type("Elsamady")
        cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
        cy.get ('.feedback-input') .eq (3).type("cypress")
        cy.get('[type="submit"]').click()
    });
    it('[13]  contact us valid   ', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
       cy.get ('[name="first_name"]').type("mohamed")
       cy.get ('[name="last_name"]').type("Elsamady")
       cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
       cy.get ('.feedback-input') .eq (3).type("cypress")
       cy.get('[type="submit"]').click()
       cy.url().should('eq','https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
       cy.title().should('eq','Gianni Bruno - Designer')
        

    });
    it('[13]  contact us valid   ', () => {
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
       cy.get ('[name="first_name"]').type("mohamed")
       cy.get ('[name="last_name"]').type("Elsamady")
       cy.get ('[name="email"]').type("mohamedelsamady@gmail.com")
       cy.get ('.feedback-input') .eq (3).type("cypress")
       cy.get('[type="submit"]').click()
       cy.url().should('eq','https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
       cy.title().should('eq','Gianni Bruno - Designer')
        

    });
    it('[15]  login   ', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#login-portal > .thumbnail > .section-title > h1').click()
    });
    
    it('[14]  login valid   ', () => {
       cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html") 
       cy.get('#text').type("mohamed")
       cy.get('#password').type("mohamed2010")
       cy.get('#login-button')
       

    });
    it('[15]  login invalid   ', () => {
        cy.visit("https://www.webdriveruniversity.com/Login-Portal/index.html") 
        cy.get('#text').type("125252")
        cy.get('#password').type("mohamed2010")
        cy.get('#login-button')
     });
     it('[15] click button', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#button-clicks > .thumbnail > .section-title > h1').click()
       
    });
     it('[16]  click button 2   ', () => {
        cy.visit("https://www.webdriveruniversity.com/Click-Buttons/index.html")
        cy.get('#button1 > p').click()
        cy.get('#button2').click()
        cy.get('#button3')
     });

     it('[17]  ', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#to-do-list > .thumbnail > .section-title > h1').click()
        
       
    });
    it('[18]  to dolist ', () => {
        cy.visit("https://www.webdriveruniversity.com/To-Do-List/index.html")
        cy.get('input').type("go to gym")
       
    });
    it('[19]  page object  ', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get(':nth-child(5) > #page-object-model > .thumbnail > .section-title > h1').click

       });
       it('[20]  page image  ', () => {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
        cy.get('.right').click()

       });

     it('[21] page image 2 ', () => {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
        cy.get('.left').click()       
    
    });
    it('[22]    ', () => {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
        cy.get('#button-find-out-more').click()  
    
    });

    it('[23]     ', () => {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
        cy.get(':nth-child(2) > a').click()
        cy.get('#container-special-offers > .section-title > .sub-heading').click()
        

    });
    it('[24] ', () => {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
        cy.get(':nth-child(2) > a').click()
        cy.get('#container-product1 > .section-title > .sub-heading').click()

    });
    it('[25]   ', () => {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
        cy.get(':nth-child(2) > a').click()
        cy.get('#container-product2 > .section-title > .sub-heading').click()

    });
    it('[26]   ', () => {
        cy.visit("https://www.webdriveruniversity.com/Page-Object-Model/index.html")
        cy.get(':nth-child(2) > a').click()
        cy.get('#container-product2 > .section-title > .sub-heading').click()

    });
    it('[27]  ', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get(':nth-child(6) > #page-object-model > .thumbnail > .section-title > h1').click()
    });
    it('[28] accordion ', () => {
        cy.visit("https://www.webdriveruniversity.com/Accordion/index.html")
        
    });
    it('[29]   ', () => {
        cy.visit("https://www.webdriveruniversity.com/Accordion/index.html")
        cy.get('#manual-testing-accordion').click()
        cy.get('#cucumber-accordion').click()
        cy.get('#automation-accordion').click()
        
        
    });
    it('[30] dropdown  ', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons > .thumbnail > .section-title > h1').click()
        
    });
   
    it.only('[31]    ', () => {
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        
    });



 
});
