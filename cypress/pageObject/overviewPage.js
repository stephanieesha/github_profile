import * as locators from '../locators/overviewPage.locators'

class overviewPage{
    constructor() {
        this.firstPinnedRepoName = 'Brain_Teaser'
        this.secondPinnedReponame = 'selenium_automation_shopping_app'
        this.houseListingsRepo = 'house-listings '
        this.feedbackAppRepo = 'feedback-app '
    }

    elements = {
        pinnedRepos: () => cy.get(locators.pinnedRepos),
        backToOverviewPage: () => cy.get(locators.overviewPage),
        repositories: () => cy.get(locators.repositories),
        searchRepositories: () => cy.get(locators.searchRepos),
        searchResult: () => cy.get(locators.searchResult)
    }
    
    whenConfirmPinnedrepos(){
        this.elements.pinnedRepos().eq(0).should('have.text', this.firstPinnedRepoName)
        this.elements.pinnedRepos().eq(1).should('have.text', this.secondPinnedReponame)
    }

    whenOpenPinnedRepo1(){
        this.elements.pinnedRepos().eq(0).click()
        cy.scrollTo('bottom')
        this.elements.backToOverviewPage().click()
    }

    whenOpenPinnedRepo2(){
        this.elements.pinnedRepos().eq(1).click()
        cy.scrollTo('bottom')
        this.elements.backToOverviewPage().click()
    }

    whenOpenAllRepositories(){
        this.elements.repositories().eq(0).click()
    }

    whenSearchRepositories(){
        this.elements.searchRepositories().type(`${this.houseListingsRepo}{enter}`)
        this.elements.searchResult().eq(0).click()
        this.elements.repositories().eq(0).click()
        this.elements.searchRepositories().type(`${this.feedbackAppRepo}{enter}`)
        this.elements.searchResult().eq(0).click()
        this.elements.backToOverviewPage().click()
}
}

export default new overviewPage()