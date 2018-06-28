function translatePigLatin(str) {

    let i = 0;
    let curr = "";
    let acum = "";
    let rest = "";
    let found = false;
    let re = /[aeiuo]/;

    //Run until found the fist vowel
    while(!found && i<str.length) {
        curr = str.charAt(i);
        console.log();
        if (re.test(curr)) {
            found = true;
        } else {
            acum += curr;
            i++;
        }
    }

    //Get the rest of the string
    rest = str.slice(i);

    //If the i == 0 is true, the first is vowel and should add way
    if(i == 0) {
        str = rest + acum + "way";
    } else {
        str = rest + acum + "ay";
    }

    return str;
  }
  
  translatePigLatin("eight");
  translatePigLatin("dgfgh");
  translatePigLatin("consonant");
  translatePigLatin("paragraphs");
  translatePigLatin("ppppggthhht");
  translatePigLatin("glove");