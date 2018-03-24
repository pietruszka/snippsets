
const changeSpecialCharacter = (element, options) => {
    let elementArray = element.split('');
    elementArray = elementArray.map(letter => {
        let letters = {
            'ź': 'z',
            'ż': 'z',
            'ń': 'n',
            'ł': 'l',
            'ę': 'e',
            'ą': 'a',
            'ś': 's',
            'ć': 'c',
            'ó': 'o',
            ' ': (options && options.join? options.join : ' ')
        };
        return letters[letter] || letter;
    });
    if(options && options.lowerCase) elementArray.toLowerCase();

    return elementArray.join('')
};

console.log(changeSpecialCharacter("ążsdc vf", '*'))