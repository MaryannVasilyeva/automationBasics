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
        objectFilterButton: '[name="objectFilterButton"]',
        stringFilterButton: '#nameFilterButton',
        palindromeButton: '[name="palindromeButton"]',
        sumButton: '[name="sumButton"]',
    //INPUTS
        evenOddInput: '[name="evenOddInput"]',
        objectFilterInput: '[name="objectFilterInput"]',
        stringFilterInput: '#nameFilterInput',
        palindromeInput: '[name="palindromeInput"]',
        sumInput1: '[name="sumInput1"]',
        sumInput2: '[name="sumInput2"]',
    //RESULTS
        oddResults: '[name="oddResults"]',
        evenResults: '[name="evenResults"]',
        objectFilterResults: '[name="objectFilterResults"]',
        stringFilterResults: '[name="nameFilterResults"]',
        palindromeResults: '[name="palindromeResults"]',
        sumResults: '[name="sumResults"]',
    },
    //OBJECTS
    var: filterObjectInputs = {
        title: 'title',
        hairColor: 'hairColor',
        height: 'height'
    },
    var: filterStringInputs = {
        one: 'J',
        two: 'dy',
        three: 'Mark',
        four: 'Smiley'
    },
    var: palindromeInputs = {
        pop: 'pop',
        two: '2',
        twoNumber: 2
    },
    var: sumInputs = {
        firstInputOne: 1,
        firstInputTwo: 1,
        secondInputOne: 569,
        secondInputTwo: 908 
    }
}