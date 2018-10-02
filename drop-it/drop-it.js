function dropElements(arr, func) {
    // Drop them elements.
    let res = [];
    let found = false;
    let i = 0;
    
    while(!found && i < arr.length) {
        if(func(arr[i])) {
            found = true;
        } else {
            i++;
        }
    }

    res = arr.splice(i, arr.length);

    return res;
  }
  
  //console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));