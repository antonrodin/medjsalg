function spinalCase(str) {
    
    //StripTags from HTML
    let re = /<\/?[^>]+(>|$)/g;
    str = str.replace(re, "");
    let result = "";
    let prev = "";
    let curr = "";
    let i = 0;

    while(i < str.length) {
        curr = str[i];
        curr = (curr == "_") ? "-" : curr;

        if (curr != curr.toLowerCase()) {
            if(prev != "-" && prev != "") {
                curr = "-" + curr.toLowerCase();
            } else {
                curr = curr.toLowerCase();
            }
        } else if (curr == " ") {
            curr = "-";
        }

        prev = curr;
        result += curr;
        i++;
    }

    return result;
}

spinalCase('Teletubbies say Eh-oh');
spinalCase('This Is Spinal Tap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('thisIsSpinal<wbr>Tap');