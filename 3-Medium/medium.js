// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or
// neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking
// normally.


//prompt brings it up on screen

let tone = prompt("How are you feeling today?")

if (tone === tone.toUpperCase()) {

    console.log('user is shouting')

} else if (tone === tone.toLowerCase()) {

    console.log('user is whispering')

} else {

    console.log('user is talking normally')

};