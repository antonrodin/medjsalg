Look inside object collection
=============================

My solution I belive have O(N*M) complexity, like any common nested loop. No idea if there a way to add beter eficiency. Maybe if there some way to check for "object" equality, without doing a loop. 

```javascript

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
    
    return arr;
}

```

Look inside of an object collection and return an array off ojects that match the "key, value" pair provided in the second arguments.