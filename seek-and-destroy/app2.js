function destroyer(arr) {

    // Copy the arguments into the new temporal array, and delete the first element.
    let tmp = [...arguments];
    tmp = tmp.slice(1);

    let j = 0;
    while (j < arr.length) {
        if( tmp.indexOf(arr[j]) == -1) {
            j++;
        } else {
            arr.splice(j, 1);
        }
        
    }

    return arr;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);