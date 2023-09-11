const isPalindrome = require("./sum.js");

// test("should reverse a string", () => {
//     expect(reverse('tracy')).toBe('ycart')
    
// })

// test("should check length of string and return the string", () => {
//     expect(reverse('r')).toBe('r')
//     expect('t'.length).toBe(1)
// })

test("should check if a name is a palindrome", () => {
    expect(isPalindrome('mum')).toBe(true)
    expect(isPalindrome('father')).toBe(false)
})

