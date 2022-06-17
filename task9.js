//Task9
//დაწერეთ ფუნქცია isOdd, რომელსაც გადაეცემა პარამეტრად
// რიცხვი და დააბრუნებს
// true false  იმისდა მიხედვით არის თუ არა რიცხვი კენტი
// შემოწმდეს რომ თუ რიცხვისგან განსხვავებული პარამეტრია 
//გამოვიდეს ერორი,
//ასევე შეზღუდვა დაედოს და შესაძლებელი იყოს მხოლოდ ერთი
// პარამეტრის მიღება
//მეტის შემთხვევაში დაილოგოს ერორი
//გამოძახების მაგალითი

// isOdd(1) //true
// isOdd(2) //false
// isOdd('asd') //Error,try again
// isOdd(1,2,3) // Error, too many params


// function isOdd (x) {
//     if ( ( x = 1 ) % 2 === 1) {
       
//         console.log(true)
//     }
//     else if ( (x = 2) % 2 === 0) {
//         console.log(false)
//     }
// }
// isOdd();

function isOdd (x = 'asd') {
    if ( (x) % 2 === 1) {
        console.log(true)
    }
    else if ( (x) % 2 === 0) {
        console.log(false)
    }
    if ( typeof(x) === 'string' ) {
        console.log('Error try again')
    }
}
isOdd();













    