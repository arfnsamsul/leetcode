/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let answer = init
    for(let idx in nums){
        answer = fn(answer, nums[idx])
    }

    return answer
};