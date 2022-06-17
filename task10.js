//Task 10

//დაწერეთ ფუნქცია getDividors(), რომელიც აიღებს რიცხვს და დააბრუნებს მის
// გამყოფებს, გამყოფი იქნება 1-დან მაგ ციფრის ჩათვლით
//დაედოს ვალიდაცია სხვა მნიშვნელობის შეყვანისას
//ასევე შევამოწმოთ რომ პარამეტრი არ იყოს 0

//გამოძახების მაგალითი

// getDividors(12) // [1,2,3,4,6,12]
// getDividors('asd') //Error,try again
// getDividors(0) // Can't be null


// function getDividors(n) {
//     var divisors = 0;
//     mod = n;
//     while (mod > 0) {
//         if (n % mod === 0) {
//             divisors++;
//         }
//         mod--;
//     }
//     return divisors;
// }
// console.log(getDividors(12))

function getDividors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if(num % i === 0){
            divisors.push(i)
        }
    }
    return divisors.length > 1 ? divisors :  num = 0 ? `can't be null` : `error try again`

}

console.log(getDividors(20))