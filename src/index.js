module.exports = function toReadable (number) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    let num = '';
    if (number == 0) {
        return "zero"
    } else if (number < 10) {
        num = units[number]
        return num;
    } else if (number >= 10 && number < 20) {
        num = teens[number - 10] 
        return num;
    } else if (number >= 20 && number < 100) {
        if ((number % 10) == 0) {
            num = tens[(Math.floor(number / 10))]
        } else {
            num = tens[(Math.floor(number / 10))] + " " + units[number % 10];
        }
        return num;
    } else if ((number % 100) == 0) {
        num = units[(Math.floor(number / 100))] + " hundred";
        return num;
    } else if ((number % 100) >= 0 && (number % 100) < 10) {
        num = units[(Math.floor(number / 100))] + " hundred " + units[number % 100];
        return num;
    } else if ((number % 100) >= 10 && (number % 100) < 20) {
        num = units[(Math.floor(number / 100))] + " hundred " + teens[(number % 100) - 10];
        return num;
    } else if ((number % 100) >= 20 && (number % 100) < 100) {
        if ((number % 10) == 0) {
            num = units[Math.floor(number / 100)] + " hundred " + tens[Math.floor((number % 100) / 10)];
        } else {
            num = units[Math.floor(number / 100)] + " hundred " + tens[Math.floor((number % 100) / 10)] + " " + units[(number % 100) % 10];
        }
    return num;
    }
}

    