'use strict'
const User = require('./Worker.js')
const Nod = require('./Noduri.js')
class Utilities{
 identifyWorker(_worker){
	return ( "My work speed is: " + _worker.workSpeed+ ", my movement speed is: " + _worker.movementSpeed + " and my stamina is: " + _worker.stamina)
}

 printIdentifyWorker(_worker){
	console.log(this.identifyWorker(_worker))
}


}
module.exports = Utilities