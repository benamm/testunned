

/**
 * set cookies in user browser 
 *      @param cookie_name: (string)
 *      @param cookie_value: (string) 
 */
export const setCookie = (cookie_name, cookie_value) => {
    const date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toGMTString();
    document.cookie = cookie_name + "=" + cookie_value + expires + "; path=/";

}


/**
 * 
 * @param {*} cookie_name
 */
export const getCookie = (cookie_name) => {
    const name = cookie_name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    let cookieCell = decodedCookie.split(';');
    for (var i = 0; i < cookieCell.length; i++) {
        var c = cookieCell[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
