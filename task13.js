//Task13

//დაწერეთ arrow function, რომელიც მიიღებს მასივს და დააბრუნებს
// მასივში არსებულ უდიდეს რიცხვს


//გამოძახების მაგალითი

//ფუნქციას გადაეცემა

// [1,4,5]

//ფუნქცია დააბრუნებს 5-ს

let arrow = [1, 4, 12];
let maxValue = Math.max(...arrow);

console.log(maxValue)

// let arrow = [1, 2, 5, 8];
// arrow.reduce(function(a. b) {
//     return Math.max(a, b);
// })
