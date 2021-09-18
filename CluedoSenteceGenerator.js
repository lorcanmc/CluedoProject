const killers = ['Tom', 'Dick', 'Harry']
const weapons = ['the knife', 'a hatchet', 'an AK47', 'a shuriken', 'a rope']
const rooms = ['the bathtub', 'the kitchen', 'the treehouse', 'the Marianas trench', 'an igloo']


function whoDunIt() {
let randomKiller = killers[Math.floor(Math.random()*killers.length)]
let randomWeapon = weapons[Math.floor(Math.random()*weapons.length)]
let randomRoom = rooms[Math.floor(Math.random()*rooms.length)]

console.log(`The murderer was ${randomKiller} with ${randomWeapon} in ${randomRoom}!`)
}

whoDunIt();