import overviewPage from "../../pageObject/overviewPage"

describe('display github profile', () => {
    it('should open github page, open pinned repos and search for other repositories', () =>{
        cy.visit('https://github.com/stephanieesha')
        overviewPage.whenConfirmPinnedrepos()
        overviewPage.whenOpenPinnedRepo1()
        overviewPage.whenOpenPinnedRepo2()
        overviewPage.whenOpenAllRepositories()
        overviewPage.whenSearchRepositories()

    })
})