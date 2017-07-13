'use string'

const User = require('./Worker.js')
const Nod = require('./Noduri.js')
const Utilities = require('./Utilities.js')
const Repo = require('./NodeRepository')

let user  = new User(134.49, 6.99,9.95, 15);
let user2 = new User(96.51, 3.90, 24.64, 23);
let user3 = new User(147.25, 8.20, 9.87, 15);
let user4 = new User (101.50, 4.50 , 20.20, 23);
var time = 60 * 60 * 6
var userV = []
userV[0] = user
userV[1] = user2
userV[2] = user3
userV[3] = user4
let nodul = new Nod("Farm_node", "Heidel", 198.60, 406, 3740)
let repo = new Repo(userV, nodul,time)
console.log(repo.__bestWorker)