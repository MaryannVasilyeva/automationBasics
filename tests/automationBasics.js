var automationBasics
module.exports = {
    beforeEach: browser => {
        automationBasics = browser.page.automationBasics()
        automationBasics.navigate()
    },
    'Testing the basics - loading page': browser => {
        automationBasics
            .waitForElementVisible('@landingPage')
            automationBasics.expect.element('@evensAndOdds').text.to.equal(landingPage.evensOdds)
            automationBasics.expect.element('@filterObject').text.to.equal(landingPage.filterObject)
            automationBasics.expect.element('@filterString').text.to.equal(landingPage.filterString)
            automationBasics.expect.element('@palindrome').text.to.equal(landingPage.palindrome)
            automationBasics.expect.element('@sum').text.to.equal(landingPage.sum)
    },
    'Testing Evens and Odds': browser => {
        automationBasics
        //testing odd numbers
            .setValue('@evenOddInput', evenOddInputs.five)
            .click('@evenOddButton')
            automationBasics.expect.element('@evenResults').text.to.equal("Evens: []")
            automationBasics.expect.element('@oddResults').text.to.equal("Odds: [" + evenOddInputs.five + "]")
            automationBasics.clearValue('@evenOddInput')
        //testing even numbers
            .setValue('@evenOddInput', evenOddInputs.six)
            .click('@evenOddButton')
            automationBasics.expect.element('@evenResults').text.to.equal("Evens: [" + evenOddInputs.six + "]")
            automationBasics.expect.element('@oddResults').text.to.equal("Odds: []")
        //testing not numbers
            automationBasics.clearValue('@evenOddInput')
            .setValue('@evenOddInput', evenOddInputs.oops)
            .click('@evenOddButton')
            automationBasics.expect.element('@evenResults').text.to.equal("Evens: []")
            automationBasics.expect.element('@oddResults').text.to.equal("Odds: [null]")
    },
    'Testing Filter Objects': browser =>{
        automationBasics
        //testing valid object inputs
            .setValue('@objectFilterInput', filterObjectInputs.title)
            .click('@objectFilterButton')
            .getText('@objectFilterResults', result => {
                browser.verify.ok('@objectFilterResults', result.value)
                automationBasics.expect.element('@objectFilterResults').text.to.equal(result.value)
            })
            automationBasics.clearValue('@objectFilterInput')
            .setValue('@objectFilterInput', filterObjectInputs.hairColor)
            .getText('@objectFilterResults', result => {
                browser.verify.ok('@objectFilterResults', result.hairColor)
                automationBasics.expect.element('@objectFilterResults').text.to.equal(result.value)
            })
        //testing invalid object inputs
            automationBasics.clearValue('@objectFilterInput')
            .setValue('@objectFilterInput', filterObjectInputs.height)
            .getText('@objectFilterResults', result => {
                browser.verify.ok('@objectFilterResults', result.value)
                automationBasics.expect.element('@objectFilterResults').text.to.equal(result.value)
            })        
    },
    'Testing Filter String': browser => {
        automationBasics
        //testing valid string inputs
            .setValue('@stringFilterInput', filterStringInputs.one)
            .click('@stringFilterButton')
            .getText('@stringFilterResults', result => {
                browser.verify.ok('@stringFilterResults', result.value)
                automationBasics.expect.element('@stringFilterResults').text.to.contain(filterStringInputs.one)
            })
            automationBasics.clearValue('@stringFilterInput')
            .setValue('@stringFilterInput', filterStringInputs.two)
            .click('@stringFilterButton')
            .getText('@stringFilterResults', result => {
                browser.verify.ok('@stringFilterResults', result.value)
                automationBasics.expect.element('@stringFilterResults').text.to.contain(filterStringInputs.two)
            })
            automationBasics.clearValue('@stringFilterInput')
            .setValue('@stringFilterInput', filterStringInputs.three)
            .click('@stringFilterButton')
            .getText('@stringFilterResults', result => {
                browser.verify.ok('@stringFilterResults', result.value)
                automationBasics.expect.element('@stringFilterResults').text.to.contain(filterStringInputs.three)
            })
        //testing invalid input
             automationBasics.clearValue('@stringFilterInput')
            .setValue('@stringFilterInput', filterStringInputs.four)
            .click('@stringFilterButton')
            .getText('@stringFilterResults', result => {
                browser.verify.ok('@stringFilterResults', result.value)
                automationBasics.expect.element('@stringFilterResults').text.to.not.equal(filterStringInputs.four)
            })
    },
    'Testing Palindrome': browser => {
        automationBasics
        //testing input to get true
            .setValue('@palindromeInput', palindromeInputs.pop)
            .click('@palindromeButton')
            .getText('@palindromeResults', result => {
                browser.verify.ok('@palindromeResults', result.value)
                automationBasics.expect.element('@palindromeResults').text.to.equal(result.value)
            })
            .setValue('@palindromeInput', palindromeInputs.twoNumber)
            .click('@palindromeButton')
            .getText('@palindromeResults', result => {
                browser.verify.ok('@palindromeResults', result.value)
                automationBasics.expect.element('@palindromeResults').text.to.equal(result.value)
            })
        //testing input to get false
            .setValue('@palindromeInput', palindromeInputs.two)
            .click('@palindromeButton')
            .getText('@palindromeResults', result => {
                browser.verify.ok('@palindromeResults', result.value)
                automationBasics.expect.element('@palindromeResults').text.to.equal(result.value)
            })
    },
    'Testing Sum': browser => {
        automationBasics
        //testing valid sum inputs
            .setValue('@sumInput1', sumInputs.firstInputOne)
            .setValue('@sumInput2', sumInputs.firstInputTwo)
            .click('@sumButton')
            .getText('@sumResults', result => {
                browser.verify.ok('@sumResults', result.value)
                automationBasics.expect.element('@sumResults').text.to.equal(result.value)
            })
            .setValue('@sumInput1', sumInputs.secondInputOne)
            .setValue('@sumInput2', sumInputs.secondInputTwo)
            .click('@sumButton')
            .getText('@sumResults', result => {
                browser.verify.ok('@sumResults', result.value)
                automationBasics.expect.element('@sumResults').text.to.equal(result.value)
            })
    }
}