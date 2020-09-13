// Code your solutions in this file

function writeCards(name, giftType){
  let thankYou=[]
  for(let i=0; i<name.length; i++){
  thankYou.push(`Thank you, ${name[i]}, for the wonderful ${giftType} gift!`)
  }
  return thankYou;
}
