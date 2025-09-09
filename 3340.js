/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let nums = num.split("");


    let odd = 0;
    let even = 0;

    nums.forEach((num, index) => {
        if(index % 2 === 0) {
            even += parseInt(num);
        } else {
            odd += parseInt(num);
        }
    });

    return odd === even;
};

