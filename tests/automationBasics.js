var automationBasics
module.exports = {
    beforeEach: browser => {
        automationBasics = browser.page.automationBasics()
        automationBasics.navigate()
    },
    'Testing the basics - loading page': browser => {
        automationBasics
            .waitForElementVisible('@landingPage')
            automationBasics.expect.element('@evensAndOdds').text.to.equal("Evens and Odds")
            automationBasics.expect.element('@filterObject').text.to.equal("Filter Object")
            automationBasics.expect.element('@filterString').text.to.equal("Filter String")
            automationBasics.expect.element('@palindrome').text.to.equal("Palindrome")
            automationBasics.expect.element('@sum').text.to.equal("Sum")
    },
    'Testing Evens and Odds': browser => {
        automationBasics
            .setValue('@evenOddInput', '5')
            .click('@evenOddButton')
            automationBasics.expect.element('@oddResults').text.to.equal("Odds: [5]")
            automationBasics.expect.element('@evenResults').text.to.equal("Evens: []")
            automationBasics.clearValue('@evenOddInput')
            .setValue('@evenOddInput', '6')
            .click('@evenOddButton')
            automationBasics.expect.element('@evenResults').text.to.equal("Evens: [6]")
            automationBasics.expect.element('@oddResults').text.to.equal("Odds: []")
    }
}