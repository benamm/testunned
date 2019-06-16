/**
 * @param str : string - like: "1200 تومان "
 * @return string with persian digit.
 */
export const toPersianDigit = (num) => {
    let arr = [];
    const persian = {0:'۰',1:'۱',2:'۲',3:'۳',4:'۴',5:'۵',6:'۶',7:'۷',8:'۸',9:'۹', '.': '.'};
    num.split('').map((number,index)=>{
        arr[index] = (persian[number]);
    });
    return arr.join('');
}

/**
 * @param str : string - like: "چهارمحال-بختياري "
 * @return string without dash. like چهارمحال بختياري
 */
export const prettify = (str) => {
    return str.split('-').map(function capitalize(part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ');
}