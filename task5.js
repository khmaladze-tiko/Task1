//Task5 
//მოცემული მასივი დაალაკეთ კლებადობით
// ისე რომ არ გამოიყენოთ ჯავასკრიპტის ჩაშენებული მეთოდები [4,10,23,1,2,90]


const numbers = [4, 10, 23, 1, 2, 90];

numbers.sort(descendingOrder);

function descendingOrder (a, b) {
    return b - a;
}
console.log(numbers)