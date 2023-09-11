// function sum(a, b){
//     return a + b
// }

// module.exports = sum

function reverse(string){
    if(string.length === 1) return string
    return string.split("").reverse().join("")
}

function isPalindrome(word){
   return word === reverse(word)
}

module.exports = isPalindrome
