// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function writeCards(name, giftType){
  for(let i=0; i<name.length; i++){
    console.log(`Thank you, ${name[i]}, for the wonderful ${giftType} gift!`)
  }
}