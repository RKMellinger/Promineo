console.log(`Greetings Program, 
This is the week 7 coding assignment. As a but of fyi, I am part of a 
501c3 historical reenactment group and by the end of this I would like
to be able to build a website for them. If you don't mind I'll start working 
on it here. :D
Thank you for your time.`)

alert(`Greetings Program, 
This is the week 7 coding assignment. As a but of fyi, I am part of a 
501c3 historical reenactment group and by the end of this I would like
to be able to build a website for them. If you don't mind I'll start working 
on it here. :D
Thank you for your time.`)

//Magic Cannonball Js game

let userQuestion = ""
console.log(userQuestion)
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber)
let cannonBall = ""
function magicCannonball(){
    userQuestion = prompt("Please enter your question..")
switch (randomNumber){
case randomNumber = 0 :
cannonBall = 'Yar, It be certain'
break
case randomNumber = 1:
 cannonBall = 'I feel it in my bones'
break
 case (randomNumber = 2):
 cannonBall = 'The map says treasure abound'
break
 case (randomNumber = 3):
  cannonBall = 'Ya, might walk the plank..'
break
 case (randomNumber = 4):
 cannonBall = 'Dead Men Tell No Tales'
break
 case (randomNumber = 5):
    
 cannonBall = 'set the sails and rigging!'
break
 case (randomNumber = 6):
 cannonBall = 'Batten Down the Hatches'
default:
 cannonBall = 'The mists say come back later'
 break
}
return alert(cannonBall)
}
//console.log(magicCannonball(cannonBall))