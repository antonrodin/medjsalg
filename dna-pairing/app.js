function pairElement(str) {

    let pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };

    let res = [];

    for(let i = 0; i < str.length; i++) {
        res.push([str.charAt(i), pairs[str.charAt(i)]]);
    }

    console.log(res);

    return res;
  }
  
  pairElement("GCG");