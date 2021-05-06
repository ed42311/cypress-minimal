/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('url')
    })

    it('clicks button', () => {
        for(let i = 0; i < 1000; i++) {
            cy.get("button").contains("More!").click()
        }
    })
});