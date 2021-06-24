//Practical 1

let fName = "Thomas";
let lName = " Kildahl";

console.log(fName + lName);


//Practical 2


const myHouse ={
    type: "House",
    rooms: "4",
    buildingMaterial: "bricks",
    occupied: "not ocupied"

};

console.log(myHouse);


//Practical 3

const allBooks =[
    "I am Zlatan",
    "Snømannen",
    "Varg Veum"
];

function logallBooks (){
    let message = "I like: "
    allBooks.forEach(element => console.log(message + element));
};

logallBooks(allBooks);
