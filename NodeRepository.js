'use strict'

const User = require('./Worker.js')
const Nod = require('./Noduri.js')

class NodeRepository{
	constructor(WorkerVector, node, time){
		this.__workerVector = WorkerVector
		this.__node =node
		this.__time = time
		this.__bestWorker 
		this.__bestValue
		this.__validWorkers = this.get_valid_workers()
		

	}
	get worker_vector(){
		return this.__workerVector
	}
	get node(){
		return this.__node
	}
	get validWorker(){
		return this.__validWorkers
	}
	get time(){
		return this.__time
	}

	set worker_vector(_workerVector){
		if(_workerVector){
			this.__workerVector = _workerVector
		}
	}
	set node(_node){
		if(_node){
			this.__node = _node
		}
	}
	set validWorkers(_validWorker){
		if(_validWorker){
			this.__validWorkers = _validWorker
		}
	}
	set time(_time){
		if(_time){
			this.__time = _time
		}
	}



	get_valid_workers(){
		var i = 0
		var _w = []
		var _bestWorker = new User (0,0,0,0)
		for(i = 0 ; i< this.worker_vector.length; i++){
			if(this.worker_vector[i].get_silver_allenergy(this.node) > this.worker_vector[i].get_silver_undertimer(this.node, this.time)){
				_w.push(this.worker_vector[i])
				if(this.worker_vector[i].get_silver_undertimer(this.node, this.time) > _bestWorker.get_silver_undertimer(this.node, this.time)){
					_bestWorker = this.worker_vector[i]
				}
				
			}
			
		}
		this.__bestWorker = _bestWorker
		this.__bestValue = _bestWorker.get_silver_undertimer(this.node, this.time)
		return _w
	}



}

module.exports = NodeRepository