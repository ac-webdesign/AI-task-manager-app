function memoize(fn){
    var cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]!==undefined){
            console.log('not the first time');
            return cache[key];
        }
        const result = fn(...args);
        cache[key]=result;
        return result;
    }
}

// Example usage:
// A simple function that adds two numbers
function add(a, b,c,d) {
    return a + b+c+d;
}

// Memoize the add function
const memoizedAdd = memoize(add);

// Call the memoized function
console.log(memoizedAdd(1, 2,8,4)); // Computes and prints 3
console.log(memoizedAdd(1, 2,4,8)); // Retrieves the result from the cache and prints 3
console.log(memoizedAdd(2, 3,8,8)); // Computes and prints 5
console.log(memoizedAdd(1, 2,8,4)); // Computes and prints 3

