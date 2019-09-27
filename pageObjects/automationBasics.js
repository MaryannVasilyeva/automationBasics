module.exports = {
    url: ('https://devmountain-qa.github.io/Automation-Basics/build/'),
    elements: {
    //OVERALL LANDING PAGE DIVS
        landingPage: ('#root'),
        evensAndOdds: {
            selector: '//div[@class="puzzleBox evenAndOddPB"]//h4',
            locateStrategy: 'xpath'
        },
        filterObject: {
            selector: '//div[@class="puzzleBox filterObjectPB"]//h4',
            locateStrategy: 'xpath'
        },
        filterString: {
            selector: '//div[@class="puzzleBox filterStringPB"]//h4',
            locateStrategy: 'xpath'
        },
        palindrome: {
            selector: '//div[@class="puzzleBox palindromePB"]//h4',
            locateStrategy: 'xpath'
        },
        sum: {
            selector: '//div[@class="puzzleBox sumPB"]//h4',
            locateStrategy: 'xpath'
        },
    //BUTTONS
        evenOddButton: '[name="evenOddButton"]',
        objectFilterButton: '[name="objectFilterButton"]',
        stringFilterButton: '#nameFilterButton',
        palindromeButton: '[name="palindromeButton"]',
        sumButton: '[name="sumButton"]',
    //INPUTS
        evenOddInput: '[name="evenOddInput"]',
    //RESULTS
        oddResults: '[name="oddResults"]',
        evenResults: '[name="evenResults"]'
    }

}