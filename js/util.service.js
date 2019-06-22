function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function makeLorem(length) {

    var randStr = '';
    while (randStr.length < length) {
        var wordLength = getRandomInt(3, 6);
        var word = createWord(wordLength);

        if (Math.random() > 0.9) word += ',';

        randStr += word + ' ';
    }
    randStr = randStr.substring(0, length);
    randStr = randStr[0].toUpperCase() + randStr.substr(1)

    return randStr;
}

function getRandChar() {
    var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    var randIndex = parseInt(Math.random() * LETTERS.length)
    return LETTERS.charAt(randIndex);
}

function createWord(length) {
    var word = '';
    while (word.length < length) {
        var randChar = getRandChar();
        word += randChar;
    }

    return word;
}

function sortByDate(items) {
    console.log(items)
    items.sort((a, b) => {
        a.date - b.date
    });
}

function sortByTitle(items) {
    items.sort((a, b) => {
        var nameA = a.from.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.from.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        // names must be equal
        return 0;
    })
}

export const utilService = {
    getRandomInt,
    makeLorem,
    makeId,
    sortByDate,
    sortByTitle
}