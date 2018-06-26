function whatIsInAName(collection, source) {
    
    let arr = [];
    let keys = Object.keys(source);
    
    collection.forEach(elem => {
        
        let found = false;
        let i = 0;

        while(!found && i < keys.length) {
            if(elem[keys[i]] != source[keys[i]]) {
                found = true;
            }
            i++;
        }

        if (!found) {
            arr.push(elem);
        }

    });
    
    console.log(arr);

    // Only change code above this line
    return arr;
}
  
//One of the tests should return [{ first: "Tybalt", last: "Capulet" }].
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//Other test should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });

//Third Test should return []
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})