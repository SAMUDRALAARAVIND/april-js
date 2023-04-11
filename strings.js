// let arr = [11, 2, 3]


// const callback = (prev, element, index) => {
//     console.log(prev) // 11, 14
//     return prev + element + index; // 14 + 3 + 2 = 19
// }
// // callback(19, 11)
// // callback(30, 2, 1)
// // callback(33, 3, 2)

// // callback(11, 2, 1)
// // callback(14, 3, 2)

// let result = arr.reduce(callback)

// console.log(result) // 38, 19

// let arr = [10, 2, 83]

// const result = arr.map((e, i) => {
//     return e+i;
// }).sort((a,b) => { 
//     return a-b ;
// })

// [10, 3, 85].sort()

// console.log( result ) // [3, 10, 85] , [10, 2, 83]

// result = [10, 3, 85].sort() => [3, 10, 85]

// z - 122
// 
// let str = "I \"am" ; // "ar" , "avind" . "someth", "ing"
//  split
// strings immutable in js
//  console.log("The animal".split(" ", 1)[0] ) // "The", "animal"
//  console.log("a dog".split(" ", 1)[0] )  // "a", "dog"
// let result = str.split("@", 2)
// console.log(result)
// let s = "'\"Hello world\"'" ; // "
// console.log(s)
// console.log(s.includes("ll"))

// let s = "i am aravind am" 
// console.log(s.includes("d ", -3)) // true
// console.log(s.startsWith("am", 0)) // false

// "I am" + " Aravind" 
// console.log(["a" , "b" , {name: "aravind"}].join("%"))
// console.log("aravind".concat(" abc" ," xyz"))
// var a = 10 ;
// var a = 200 ;
// var m = 210 ;
// console.log(a)
// let arr = [3, 4, 5, 10, 22, 55] // [3, 10, 22, 55]
// [3, 4, true,100, 22, 55] 
// console.log(arr.slice(1, 4), arr)
// [3, 4, 5, 10, 22, 55]
// [3, 10, 22, 55]
// [3, "aravind", true, 100, 10, 22, 55]
// [3, true,10, 22, 55]
// console.log( "abcefg". )
// console.log(arr.splice(2, 2, true, 100)) // [5, 10]
// startPoint, numberOfElementsToBeDeleted, needtoBeInserted
// console.log(arr)
// int x = 20 ;
// [3,  "aravind", true, 100, 4, 5, 10, 22, 55]

// let arr = [2, 3, 4]

// arr.splice(1, 2)

// console.log(arr)
