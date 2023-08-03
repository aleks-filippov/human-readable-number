module.exports = function toReadable (n) {
    let str = "";
    
    if (n === 0) return str += "zero";
    
    switch (Math.floor(n / 100)) {
        case 0:
            break;
        case 1:
            str += "one hundred";
            break;
        case 2:
            str += "two hundred";
            break;
        case 3:
            str += "three hundred";
            break;
        case 4:
            str += "four hundred";
            break;
        case 5:
            str += "five hundred";
            break;
        case 6:
            str += "six hundred";
            break;
        case 7:
            str += "seven hundred";
            break;
        case 8:
            str += "eight hundred";
            break;
        case 9:
            str += "nine hundred";
            break;
    }

    if ((Math.floor((n % 100) / 10)) === 0 && (n % 10 === 0)) return str;
    else if ((Math.floor(n / 100) === 0)) str;
    else str += ' ';

    switch (Math.floor((n % 100) / 10)) {
        case 0:
            break;
        case 1:
            switch (n % 10) {
                case 0:
                    return (str += "ten");
                case 1:
                    return (str += "eleven");
                case 2:
                    return (str += "twelve");
                case 3:
                    return (str += "thirteen");
                case 4:
                    return (str += "fourteen");
                case 5:
                    return (str += "fifteen");
                case 6:
                    return (str += "sixteen");
                case 7:
                    return (str += "seventeen");
                case 8:
                    return (str += "eighteen");
                case 9:
                    return (str += "nineteen");
            }
        case 2:
            str += "twenty";
            break;
        case 3:
            str += "thirty";
            break;
        case 4:
            str += "forty";
            break;
        case 5:
            str += "fifty";
            break;
        case 6:
            str += "sixty";
            break;
        case 7:
            str += "seventy";
            break;
        case 8:
            str += "eighty";
            break;
        case 9:
            str += "ninety";
            break;
    }
    

    if (n % 10 === 0) return str;
    else if((((Math.floor(n / 100)) === 0) && ((Math.floor((n % 100) / 10)) === 0)) ||
            (((Math.floor(n / 100)) > 0) && ((Math.floor((n % 100) / 10)) === 0))) 
            str;
    else str += ' ';

    switch (n % 10) {
        case 1:
            str += "one";
            break;
        case 2:
            str += "two";
            break;
        case 3:
            str += "three";
            break;
        case 4:
            str += "four";
            break;
        case 5:
            str += "five";
            break;
        case 6:
            str += "six";
            break;
        case 7:
            str += "seven";
            break;
        case 8:
            str += "eight";
            break;
        case 9:
            str += "nine";
            break;
    }

    return str;
}
