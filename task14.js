//Task14

//დაწერეთ ფუნქცია toUpperCaseFunc, რომელიც პარამეტრად მიირებს
// სტრინგს, სხვა მნიშვნელობის შემტხვევაში დაილოგოს
//ერორი, ხოლო მიღებული სტრინგის პირველ ასოს შეუცვლიე რეგისტრს, 
//თუ არის lowerCase 
//გახდის upperCase-ს, არ გამოვიყენოთ ჯავასკრიპტის ჩაშენებული მეთოდები


//გამოძახების მაგალითი 

// toUpperCaseFunc('jane') // Jane
// toUpperCaseFunc(1) // Error, try again


// const toUpperCaseFunc = 'jane';
// console.log(toUpperCaseFunc.charAt(0).toUpperCase)


let toUpperCaseFunc = 'jane';
let result = toUpperCaseFunc.charAt(0).toUpperCase() + toUpperCaseFunc.slice(1);

console.log(result)