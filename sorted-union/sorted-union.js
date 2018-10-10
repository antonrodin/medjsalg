/**
 * Sorted Union, using the ...args variables, with this one you can pass any number of aruments to a function
 * @param  {...any} args one or more array
 */
function uniteUnique(...args) {
    
    console.log(args);

    let res = [];

    args.forEach(element => {

        element.forEach(element => {
            if(res.indexOf(element) == -1) {
                res.push(element);
            }
        });

    });

    return res;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);