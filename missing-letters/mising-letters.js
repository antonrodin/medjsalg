
const a = 97;   // ASCII Char a
const b = 122;  // ASCII Char b

function fearNotLetter(str) {

    let charRes = undefined;
    let charIni = str.charCodeAt(0);
    let i = 1;
    let found = false;
    
    while(!found && i < str.length)  {
        
        found = str.charAt(i) != String.fromCharCode(charIni + i);
        if (found) {
            charRes = String.fromCharCode(charIni + i);
            console.log(charRes);
        }

        i++;
    }

    return charRes;
}
  
fearNotLetter("abce");