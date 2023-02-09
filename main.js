const prompt = require('prompt-sync')({sigint: true});

/*
xify - returns the same string, but with every character replaced by an 'x'

xify('hello') >> 'xxxxx'
xify('hi there') >> 'xxxxxxx'

parameters: 1 string
return - string

*/

function xify(str){
    let newStr = ""; //build this empty string into our return string based on the parameter string

    for(let i = 0; i < str.length; i++){
        newStr += "x"
        // "str[i] = x"는 x만 모은 어레이만 나오지 xxxx같이 x 여러개가 붙은 string으로 나온게 아니다!
    }
    return newStr

}

console.log(xify('hello'))
console.log(xify('hello!!'))
console.log()

/*
* `yellingChars` - returns the given string with an exclamation point after each character
  * Examples:
    * yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
    * yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
  * Hints:
    * We can add more than one thing to the string each time through the loop. In this case, it's the current character AND an exlamation point.
*/

function yellingChars(str){
    let x = ""
    for(let i=0; i < str.length; i++){
        x = x + str[i] + "!"
    }
    return x
}

console.log(yellingChars("Akebi Komichi"))
console.log()

/*
* `indexedChars` - adds the index of each character before that character in the given string
  * Examples:
    * indexedChars('hello') -> '0h1e2l3l4o'
    * indexedChars('bye') -> '0b1y2e'
  * Hints: 
    * We can add something BEFORE the current character as well!
*/

function indexedChars(str){
    let x = ""
    for(let i=0; i < str.length; i++){
        x = x + i + str[i]
    }
    return x
}

console.log(indexedChars("Ikuyo"))
console.log()
/*
* `exclaim` - returns the given sentence with every question mark or period changed to an exclamation point
  * Examples:
    * exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
    * exclaim('This is fine.') -> 'This is fine!'
*/
let exc = prompt("Enter a sentence: ")

function exclaim(str) {
    let x = ""
    for (let i = 0; i < str.length; i ++){
        if(str[i] === "?" || str[i] === "."){
           x +=  "!"; //원래 스트링을 교체한다고 생각하지 말고 새로운 스트링에다가 교체한다고 생각하자!
        } else{
           x += str[i]
        }
    }
    return x;
}
console.log(exclaim(exc))
console.log()
/*
truncate` - shortens a long string to 15 characters plus an ellipsis (...)
  * Examples:
    * truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
    * truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."
    * */

let tru = prompt("Enter a sentence: ")

function truncate(str) {
    let x = ""
    for (let i=0; i < str.length; i ++){
        if(i<= 14){
            x += str[i]
        } else if (i === 15){
            x += "..."
        }
    }   return x
}
console.log(truncate(tru))

/*
`ciEmailify` - creates an email from a two-part name
  * Examples:
    * ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
    * ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
*/

let name = prompt("Enter your name: ")

function ciEmailify(str){
    let x = ""
    for (let i=0; i < str.length; i ++){
        if(str[i] === " "){
            x += "."
        }   else if (i === str.length-1){
            x += str[i] + "@codeimmersives.com"
        }   else {
            x += str[i]
        }
        } return x
}

console.log(ciEmailify(name))
console.log()

/*
* `reverse` - reverses the given string
  * Examples:
    * reverse('colin') -> 'niloc'
    * reverse('mesuara') -> 'arausem'
*/

let rev = prompt("Enter a sentence: ")

function reverse(str){
    let x = ""
    for  (let i = str.length-1; i >= 0; i --){
        x += str[i]
    } return x
}

console.log(reverse(rev))
console.log()
/*
* `onlyVowels` - returns only the vowels from a word
  * Examples:
    * onlyVowels('Colin Jaffe') -> 'oiae'
    * onlyVowels('quickly') -> 'ui'
    * onlyVowels('Anthony DeRosa') -> 'Aoeoa'
*/

let vow = prompt("Enter a sentence: ")
function onlyVowels(str){
    let x = ""
    for (let i=0; i < str.length; i ++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "u" || str[i] === "i" || str[i] === "o"){
            x += str[i]
        }
    } return x
}

console.log(onlyVowels(vow))

