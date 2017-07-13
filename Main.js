'use strict'
const Nod = require('./Noduri.js')
const User = require('./Worker.js')
let user  = new User(134.49,6.99,9.95, 15);
let user2 = new User(96.51, 3.90, 24.64, 23);

let user3 = new User(87.80, 3.44, 9.87, 35);


let nodul = new Nod("Farm_node", "Heidel", 198.60, 406, 3740)

console.log(nodul.get_maximum_efficiency(user.workSpeed, user.movementSpeed, user.stamina))
console.log(nodul.get_maximum_efficiency(user2.workSpeed, user2.movementSpeed, user2.stamina))
console.log(nodul.get_maximum_efficiency(user3.workSpeed, user3.movementSpeed, user3.stamina))