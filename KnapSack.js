'use strict'

const User = require('./Worker.js')
const Nod = require('./Noduri.js')
const Utilities = require('./Utilities.js')
let utilities = new Utilities()


let user  = new User(134.49, 6.99,9.95, 15);
let user2 = new User(96.51, 3.90, 24.64, 23);
let user3 = new User(20.80, 3.44, 9.87, 35);
let user4 = new User (101.50, 4.50 , 20.20, 23);

var userV = []
userV[0] = user
userV[1] = user2
userV[2] = user3
userV[3] = user4
let nodul = new Nod("Farm_node", "Heidel", 198.60, 406, 3740)
var weight = []
var maxWeight = []	
var _silvers= []
var _timp = 60 * 60 *6 
var _allsilver = []
/*
// weight[0] = Math.floor(user.get_node_time(nodul.workload, nodul.distance) )
// weight[1] = Math.floor(user2.get_node_time(nodul.workload, nodul.distance) )
// weight[2] = Math.floor(user3.get_node_time(nodul.workload, nodul.distance) )
// weight[3] = Math.floor(user4.get_node_time(nodul.workload, nodul.distance) )


// maxWeight[0] = Math.floor(user.get_maximum_worktime_on_node(nodul.workload, nodul.distance) )
// maxWeight[1] = Math.floor(user2.get_maximum_worktime_on_node(nodul.workload, nodul.distance) )
// maxWeight[2] = Math.floor(user3.get_maximum_worktime_on_node(nodul.workload, nodul.distance) )
// maxWeight[3] = Math.floor(user4.get_maximum_worktime_on_node(nodul.workload, nodul.distance) )

// _allsilver[0] = Math.floor(user.get_silver_allenergy(nodul.silver))
// _allsilver[1] = Math.floor(user2.get_silver_allenergy(nodul.silver))
// _allsilver[2] = Math.floor(user3.get_silver_allenergy(nodul.silver))
// _allsilver[3] = Math.floor(user4.get_silver_allenergy(nodul.silver))


// _silvers[0] = Math.floor(user.get_silver_undertimer(nodul.silver, _timp , nodul.workload, nodul.distance))
// _silvers[1] = Math.floor(user2.get_silver_undertimer(nodul.silver, _timp , nodul.workload, nodul.distance))
// _silvers[2] = Math.floor(user3.get_silver_undertimer(nodul.silver, _timp , nodul.workload, nodul.distance))
// _silvers[3] = Math.floor(user4.get_silver_undertimer(nodul.silver, _timp , nodul.workload, nodul.distance))

//console.log(_timp)
*/
utilities.printIdentifyWorker(user)
var i = 0
for (var e in userV){
	weight[i] = Math.floor(userV[i].get_node_time(nodul) )
	maxWeight[i] = Math.floor(userV[i].get_maximum_worktime_on_node(nodul) )
	_allsilver[i] = Math.floor(userV[i].get_silver_allenergy(nodul))
	_silvers[i] = Math.floor(userV[i].get_silver_undertimer(nodul, _timp))

	i++
}
for( var i = 0 ; i< 4 ;i++){
	console.log("Worker " + i )
	//userV[i].identify(userV[i])
	console.log(weight[i] + " Seconds needed to finsih a work cicle")
	console.log(maxWeight[i] + " Seconds needed to use all stamina")
	console.log((maxWeight[i]  - _timp )+ " Second over 6 hours needed to finish a workcycle")
	console.log(_allsilver[i] + " Silver earned by making all the work")
	console.log(_silvers[i] + " Silver mader in about 6 hours")
	console.log("----------------------------")
}
