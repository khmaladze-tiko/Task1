//Task7

//დაწერეთ ფუნქცია cube , რომელსაც გადაეცემა პარამეტრი და აბრუნებს მას აყვანილს კუბში
//ფუნქციას შეიძლება გადაეცეს მხოლოდ და მხოლოდ ციფრი, დაადეთ სემოწმება თუ გადაეცა
// ციფრისგან განსხვავებული პარამეტრი 
// დაუწეროთ რომ არასწორია და გადასცენ სხვა პარამეტრი.

//გამოძახების მაგალითი

// cube(2) //8
// cube('Hello') //Error, try again!


// let n = 2;
// let cube;
// cube = n*n*n;
// console.log(cube)

let num,cube = 0;
num = Number(prompt("Enter A Number"));
cube = num*num*num;
document.write(cube);