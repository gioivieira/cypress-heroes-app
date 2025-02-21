export class LoginPage {

    selectors = {
        loginButton: "//button[text()='Login']",
        emailInput: "[data-cy='email']",
        passwordInput: "[data-cy='password']",
        signInButton: "//button[text()='Sign in']",
        logoutButton: "//button[text()='Logout']",
        errorField: ".text-red-500"
    }
    
    loginValidInfos(validEmail: string, validPassword: string) {
        cy.visit("/heroes")
        cy.xpath(this.selectors.loginButton).click()
        cy.get(this.selectors.emailInput).type(validEmail)
        cy.get(this.selectors.passwordInput).type(validPassword)
        cy.xpath(this.selectors.signInButton).click()
        cy.xpath(this.selectors.logoutButton).should("be.visible")
    } 

    loginInvalidInfos(invalidEmail: string, invalidPassword: string) {
        cy.visit("/heroes")
        cy.xpath(this.selectors.loginButton).click()
        cy.get(this.selectors.emailInput).type(invalidEmail)
        cy.get(this.selectors.passwordInput).type(invalidPassword)
        cy.xpath(this.selectors.signInButton).click()
        cy.get(this.selectors.errorField).should("be.visible")
    } 
}