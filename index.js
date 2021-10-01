// Code your solutions in this file
//for (let age = 30; age < 40; age ++) {
 //   console.log(`I'm ${age} years old. Happt birthday to me!`);
//}

//const gifts = ["teddy beat", "drone", "doll"];
//const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
//   }

//   return gifts;
// }

// wrapGifts(gifts);
//const names = ["ada", "brendan", "ali"]

function writeCards(names, event){
    let newNameArray =[];
    for (let i = 0; i < names.length; i++){
        let string = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
         newNameArray.push (string)
    }
    return newNameArray;
}

function countDown(){
let count = 10;
while (count >= 0){
    console.log(count--);
    }
}