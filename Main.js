'use strict'
const Nod = require('./Noduri.js')
const User = require('./Worker.js')


let nods = new Nod(144.49,679, "nothing");
let nods2 = new Nod(144.47, 855, nods)
let user  = new User(134.49,6.99,9.95,15);

var workerDic = {}


// console.log(nods.distance)
// var time = user.get_node_time(nods2.workload, nods2.distance)
// console.log(nods2.parent.parent)
// console.log(Math.floor(time/60) + "M " + time%60 + "S.")

var Graph = require("graphlib").Graph;

// Create a new directed graph
var g = new Graph();
g.setNode(user);
// g.setNode(nods);
// g.setNode(nods2);

console.log(g.nodes());
//var n = []

for (var n in g.nodes()){
	console.log(n)
}
// => true