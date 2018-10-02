function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    let colNames = [];
    let sorNames = Object.getOwnPropertyNames(source);
    for (let i =0;i<collection.length;i++){
      colNames.push(Object.getOwnPropertyNames(collection[i]));
    }
    
    console.log(sorNames);
    console.log(colNames);

      for (let j =0;j<sorNames.length;j++){
       
        arr = collection.filter(x=> {
            
            //console.log(x);

            let found = Object.is((x)[sorNames[j]],(source)[sorNames[j]]);
            console.log( found );

            return found;
        });

        console.log(arr);
    };
    
    return arr;
  }
  
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});