/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let activeIndex = functions.length-1
    let activeFn = functions[activeIndex]

    // let currentResult = activeFn(x)
    // return currentResult
    
    return function(x) {
        let returnNumber = x
        functions.reverse().forEach((fnElement)=>{
            returnNumber = fnElement(returnNumber)
        })
        return returnNumber
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */