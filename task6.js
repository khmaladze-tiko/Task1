//Task6
//მოცემულ მასივში დათვალეთ ლუწი ელემენტების ჯამი და დალოგეთ კონსოლში მხოლოდ
// იმ შემთხვევაში თუ მათი ჯამი უნაშთოდ 
//იყოფა 2-ზე და არის 20-ზე ნაკლები, წინააღმდეგ შემთხვევაში დალოგეთ რომ ჯამი ვერ მოიძებნდა

// let number = [4, 10, 23, 1, 2, 90];
// let evenNumber = number % 2 == 0;
// // let y = evenNumber < 20;

// // function sum {
// //     let sum = 0;
// //     for ( let i = 0; i < arguments.length; i++ ) {
// //         sum += arguments[i];
// //     }
// //     return sum;
// // }
// // console.log()
// console.log(evenNumber)
// let getEvenNumbers = () => {
//     const arr = [4, 10, 23, 1, 2, 90];
//     let the_evens = arr.filter(number => number % 2 == 0);
//     console.log(getEvenNumbers);
// }


let arr = [4, 10, 23, 1, 2, 90];
let getEvenNumbers = arr.filter(number => number % 2 == 0);
console.log(getEvenNumbers)

// let sum = 0;

// for (let i = 1; i <= getEvenNumbers.length; i++) {
//     sum += i;
// }
// console.log(i)

