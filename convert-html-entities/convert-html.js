// Be careful with this one, its not fucking work, because off copy and paste the "&lt;" or other ones...
// Here you can find some answer to the shit, some kind off a weird bug with copy&paste off that kind off characters...
// https://www.freecodecamp.org/forum/t/convert-html-entities-is-it-a-bug/207266
// Te code is like mine, I guess we all fall in this.
// The thing is in my browser it works FINE...
function convertHTML(str) {
    
    let res = [];

    for(let i = 0; i < str.length; i++) {
        switch(str.charAt(i)) {

            case "&":
                res.push("&amp;")
                break;

            case "<":
                res.push("​&lt;");
                break;

            case ">":
                res.push("&​gt;");
                break;

            case ">":
                res.push("&​gt;");
                break;
            
            case "\"":
                res.push("&quot;");
                break;

            case "'":
                res.push("&apos;");
                break;

            default:
                res.push(str.charAt(i));
                break;
        }
    }

    console.log(res.join(""));

    return res.join("");
}
  
convertHTML("abc");