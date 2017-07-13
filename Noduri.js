'use strict'

class Noduri{
	constructor(node_type, connecting_nodes, workload, distance , silver){
		this.__node_type = node_type
		this.__connecting_nodes = connecting_nodes
		this.__workload = workload
		this.__distance = distance
		this.__silver = silver
	}

	get silver(){
		return this.__silver
	}

	get distance (){
		return this.__distance
	}

	get workload(){
		return this.__workload
	}
	get connecting_nodes(){
		return this.__connecting_nodes
	}
	get node_type (){
		return this.__node_type
	}

	set silver(silver){
		if(silver){
			this.__silver = silver
		}
	}

	set distance(distance){
		if(distance){
			this.__distance=distance
		}
	}

	set node_type(node_type){
		if(node_type){
			this.__node_type = node_type;
		}
	}
	set connecting_nodes(connecting_nodes){
		if(connecting_nodes){
			this.__connecting_nodes = connecting_nodes;
		}
	}
	set workload (workload){
		if(workload){
			this.__workload = workload;
		}
	}

	get_maximum_efficiency(worker_workload, worker_movement_speed, worker_stamina){
		var _time = Math.floor(Math.ceil(this.workload/worker_workload)*600 + this.distance * 2 / worker_movement_speed)
		var _ObtainedSilver = this.silver * worker_stamina
		var _total_time = _time * worker_stamina
		return _ObtainedSilver / 6
	}
};

module.exports=Noduri