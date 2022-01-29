const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = [];
    let letter = [];
    let morseChar ='';
    let result = '';

    for (let i = 0; i < expr.length; i += 10) {
        letters.push(expr.slice(i, i + 10));
    }

    letters.forEach(function(item){
        for (let i = 0; i < item.length; i += 2) {
            letter.push(item.slice(i, i + 2));
        }
        if ( letter.join('') === '**********') {
            result = `${result} `
        } else {
            letter.forEach(function(key) {
                if (key === '10'){
                    morseChar = `${morseChar}.`;
                }
                if (key === '11'){
                    morseChar = `${morseChar}-`;
                }
            })
            result = `${result}${MORSE_TABLE[morseChar]}`;
            letter = [];
            morseChar = [];
        }
        
    })
    
    return result;
}

module.exports = {
    decode
}