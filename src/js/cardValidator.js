export function checkCardNumber(value) {
    let check = 0;
    const cardNumber = String(value).replace(/\D/g, '');
    const isEven = cardNumber.length % 2 !== 0;
    if ('' === cardNumber) return false;
    for (let i = 0; i < cardNumber.length; i++) {
        let n = parseInt(cardNumber[i], 10);
        check += (isEven | 0) === (i % 2) && 9 < (n *= 2) ? (n - 9) : n;
    }
    return 0 === (check % 10);
}

export function cardSystem(value) {
    const twoDigitNumber = parseInt(value.slice(0, 2));
    const threeDigitNumber = parseInt(value.slice(0, 3));
    const oneDigitNumber = parseInt(value.slice(0, 1));
    switch (twoDigitNumber) {
        case 34:
        case 37:
            return 'amex';
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
            return 'mastercard'; 
        case 36:
        case 38:
            return 'diners_club';
        case 22:
            return 'mir';
        case 35:
            return 'jbc';
    }

    switch (threeDigitNumber) {
        case 300:
        case 301:
        case 302:
        case 303:
        case 304:
        case 305:
            return 'diners_club';
    }

    if (oneDigitNumber === 4) {
        return 'visa';
    }

    if (parseInt(value.slice(0, 4)) === 6011) {
        return 'discover';
    } 
    
 
}