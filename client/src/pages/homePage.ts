export class HomePage {

    selectors = {
        likeButton: "//li[@data-cy='hero-card'][1]/div/div/div[4]/div/button[1]",
        popUpMessage: "//div[@class='open modal p-8 border shadow-lg rounded-md bg-white relative']",
        fansField: "//li[@data-cy='hero-card'][1]/div/div/div/div[2]/span[1]"
    }
    
    likeWithoutLoggedIn() {
        cy.visit("/heroes")
        cy.xpath(this.selectors.likeButton).click()
        cy.xpath(this.selectors.popUpMessage).should("be.visible")
    } 

    likeLoggedIn() {
        let fansBefore: number;
        let fansAfter: number;

        cy.xpath(this.selectors.fansField).invoke('text').then((fansFieldContent) => {
            fansBefore = Number(fansFieldContent.trim())
        })

        cy.xpath(this.selectors.likeButton).click()

        cy.xpath(this.selectors.fansField).invoke('text').then((fansFieldContentAfterLike) => {
            fansAfter = Number(fansFieldContentAfterLike.trim())

            expect(fansAfter).to.equal(fansBefore + 1)
        })
    }
}