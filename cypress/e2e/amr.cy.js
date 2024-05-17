describe('Home page', () => {
    it('1- open the page', () => {
        cy.visit("https://www.automationexercise.com/")
        cy.title().should('eq', 'Automation Exercise')
    });
});
describe('Signup/Login page', () => {
    it('1- open the page', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.title().should('eq', 'Automation Exercise - Signup / Login')
    });
    it('2- signup input all valid fields', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
    });
    it.only('3- signup input all valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
    });
    it.only('4- signup input invalid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("7860")
        cy.get('[data-qa="signup-email"]').type("khadija15599gmailcom")
        cy.get('[data-qa="signup-button"]').click()
    });
    it('5- signup page all valid input', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#uniform-id_gender2').click()
        cy.get('#password').type("Khadija12341234")
        cy.get('[name="days"]').select(13)
        cy.get('[name="months"]').select(6)
        cy.get('[name="years"]').select('2001')
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="company"]').type("AAST")
        cy.get('[name="address1"]').type("123 Main St")
        cy.get('[name="address2"]').type("Apartment 123")
        cy.get('[name="country"]').select("United States")
        cy.get('[name="state"]').type("New York")
        cy.get('[name="city"]').type("New York")
        cy.get('[name="zipcode"]').type("09574")
        cy.get('[name="mobile_number"]').type("1234567890")
    });
    it('6- signup page all valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#uniform-id_gender2').click()
        cy.get('#password').type("Khadija12341234")
        cy.get('[name="days"]').select(13)
        cy.get('[name="months"]').select(6)
        cy.get('[name="years"]').select('2001')
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("Abdelrahman")
        cy.get('[name="company"]').type("AAST")
        cy.get('[name="address1"]').type("123 Main St")
        cy.get('[name="address2"]').type("Apartment 123")
        cy.get('[name="country"]').select("United States")
        cy.get('[name="state"]').type("New York")
        cy.get('[name="city"]').type("New York")
        cy.get('[name="zipcode"]').type("09574")
        cy.get('[name="mobile_number"]').type("1234567890")
        cy.get('[data-qa="create-account"]').click()
    });
    it('7- signup page some valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[name="name"]').type("Khadija")
        cy.get('[data-qa="signup-email"]').type("khadija15599@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#uniform-id_gender2').click()
        cy.get('#password').type("Kh")
        cy.get('[name="days"]').select(13)
        cy.get('[name="months"]').select(6)
        cy.get('[name="years"]').select('2001')
        cy.get('[name="first_name"]').type("Khadija")
        cy.get('[name="last_name"]').type("8695")
        cy.get('[name="company"]').type("AAST")
        cy.get('[name="address1"]').type("123 Main St")
        cy.get('[name="address2"]').type("Apartment 123")
        cy.get('[name="country"]').select("United States")
        cy.get('[name="state"]').type("New York")
        cy.get('[name="city"]').type("New York")
        cy.get('[name="zipcode"]').type("jfhdj")
        cy.get('[name="mobile_number"]').type("1234567890")
        cy.get('[data-qa="create-account"]').click()
    });
    it('8- signup page input nothing and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('body').should('be.exist')
    });
    it('9- login input all valid fields', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599@gmail.com")
        cy.get('[data-qa="login-password"]').type("Khadija12341234")
    });
    it('10- login input all valid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599@gmail.com")
        cy.get('[data-qa="login-password"]').type("Khadija12341234")
        cy.get('[data-qa="login-button"]').click()
    });
    it('11- login input invalid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599gmailcom")
        cy.get('[data-qa="login-password"]').type("Kh")
        cy.get('[data-qa="login-button"]').click()
    });
    it('12- login input 1 invalid fields and submit', () => {
        cy.visit("https://www.automationexercise.com/login")
        cy.get('[data-qa="login-email"]').type("Khadija15599gmailcom")
        cy.get('[data-qa="login-password"]').type("Khadija12341234")
        cy.get('[data-qa="login-button"]').click()
    });
});
describe('Products page', () => {
    it('1- open the page', () => {
        cy.visit("https://www.automationexercise.com/products")
        cy.title().should('eq', 'Automation Exercise - All Products')
    });
    it('2- search existing product', () => {
        cy.visit("https://www.automationexercise.com/products")
        cy.get('[name="search"]').type("Men Tshirt")
        cy.get('#submit_search').click()
    });
    it('3- search non-existing product', () => {
        cy.visit("https://www.automationexercise.com/products")
        cy.get('[name="search"]').type("Laptop")
        cy.get('#submit_search').click()
    });
});