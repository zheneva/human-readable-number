module.exports = function toReadable (number) {
    let mas  =  ['','one','two','three','four','five', 'six', 'seven', 'eight', 'nine', 'ten',
                'eleven','twelve','thirteen','fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'
                ];
    let dec_mas  =  ['','ten','twenty','thirty','forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred'];  
    
    let nemberMas = number.toString().split('');
    let str = '';
    if (number == 0) return 'zero';
    else if (mas[number]) return mas[number];
    else if (dec_mas[number/10]) return dec_mas[number/10];
    else if (nemberMas.length == 2) {
        str+= dec_mas[nemberMas[0]] + ' ' + mas[nemberMas[1]];
        return ('str = **', str.trim()); //return
    }else if (nemberMas.length == 3){
        str+= mas[nemberMas[0]] + ' hundred' +  ' ' + (mas[number%100] || dec_mas[nemberMas[1]] + ' ' + mas[nemberMas[2]]);
        return ('str = ***', str.trim()); //return
    }
}
