function myReplace(str, before, after) {
    
    // If first letter is capitalized
    if (before.charAt(0) != before.charAt(0).toLowerCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }

    let res = str.replace(before, after);
    
    console.log(res);
    return res;
}
  
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");