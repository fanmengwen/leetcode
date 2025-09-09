/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    const num = new Array(100).fill(0);
    let ret = 0;
    for (const domino of dominoes) {
        const val = domino[0] < domino[1] ? domino[0] * 10 + domino[1] : domino[1] * 10 + domino[0];
        ret += num[val];
        console.log("🚀 ~ numEquivDominoPairs ~ num[val:", num[val], ret);
        num[val]++;
    }
    console.log("🚀 ~ numEquivDominoPairs ~ num:", num)

    return ret;
    // let count = 0;
    // let ans = dominoes[0][0] < dominoes[0][1] ? dominoes[0][1] * 10 + dominoes[0][0] : dominoes[0][0] * 10 + dominoes[0][1];
    // console.log("🚀 ~ numEquivDominoPairs ~ ans:", ans)
    // for (let dominoe of dominoes) {
    //     const value  = dominoe[0] < dominoe[1] ? dominoe[1] * 10 + dominoe[0] : dominoe[0] * 10 + dominoe[1]
    //     console.log("🚀 ~ numEquivDominoPairs ~ value:", value)
    //     if (value === ans) {
    //         count++;
    //     }
    // }
    // return count;
};

console.log(numEquivDominoPairs([[1,1],[1,1],[1,1],[1,2]]

))