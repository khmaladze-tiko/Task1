//Task12

//მოცემულია მასივი ,  დაუარეთ მასივს და შექმენით ახალი მასივი, 
//რომელიც შეიცავს ყველა მასივში
//შემავალი სტრინგის სიგრძეს, აუცილებელია შემოწმება მასივის, რომ 
//ყველა მნიშვნელობა იყოს სტრინგი

//გამოძახების მაგალითი

// let arr = ['abcd', 'abcde', 'ab', 'abc']; // let lengthArray = [4,5,2,3]

// let arr = ['abcd',2] //Error, all values should be a string

//გამოიყენეთ map მეთოდი


let arr = ['abcd', 'abcde', 'ab', 'abc'];
let result = arr.map( a => a.length);
console.log(result)
