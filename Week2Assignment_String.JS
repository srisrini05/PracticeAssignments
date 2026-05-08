const s = "Hello, World!";
const s1 = "fly  me  to the moon ";

const wordSplit = s.split (" ") //split the string into an array of words
console.log(wordSplit); //print the array of words
const lastword = wordSplit.slice(-1); //get the last word from the array
console.log(lastword); //print the last word
const lastwordCount = lastword.at(-1).length; //get the length of the last word
console.log(lastwordCount); //print the length of the last word

//Another way to get the last word and its length 
/* const wordSplit1 = s1.split (" ") //split the string into an array of words
console.log(wordSplit1); //print the array of words
if (wordSplit1[wordSplit1.length-1] === "") { //check if the last element of the array is an empty string
    wordSplit1.pop(); //remove the last element from the array
}
console.log(wordSplit1); //print the revised array of words
const lastword1 = wordSplit1.slice(-1); //get the last word from the array
console.log(lastword1); //print the last word
const lastwordCount1 = lastword1.at(-1).length; //get the length of the last word
console.log(lastwordCount1); //print the length of the last word */

const wordSplit1 = s1.trim().split (" ") //trim the string and split it into an array of words
console.log(wordSplit1); //print the array of words
const lastword1 = wordSplit1.slice(-1); //get the last word from the array
console.log(lastword1); //print the last word
const lastwordCount1 = lastword1.at(-1).length; //get the length of the last word
console.log(lastwordCount1); //print the length of the last word

function checkforAnagram(str1, str2) {
str1 = str1.split ("").join("").toUpperCase();//remove spaces and convert to uppercase
str2 = str2.split ("").join("").toUpperCase();
console.log(str1); 
console.log(str2);
const sortedstr1 = str1.split("").sort().join();//split the string into an array of characters, sort the array, and join it back into a string
const sortedstr2 = str2.split("").sort().join();
console.log(sortedstr1);
console.log(sortedstr2);
if (sortedstr1 === sortedstr2) {
    console.log("The two strings are anagrams.");   
} else 
    console.log("The two strings are not anagrams.");
}

//checkforAnagram("listen", "silent"); //Positive Test Case
//checkforAnagram("triangle", "integral");
checkforAnagram("Hello", "World!"); //Negative Test Case