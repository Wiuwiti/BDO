'use strict'

class Noduri{
	constructor(workload, distance, parent){
		this.__workload= workload
		this.__distance = distance
		this.__parent = parent 
	}

	get workload(){
		return this.__workload;
	}
	get distance(){
		return this.__distance;
	}
	get parent(){
		return this.__parent
	}


	set workload(newWorkload){
		if(newWorkload){
			this.__workload = newWorkload;
		}
	}
	set distance(newDistance){
		if(newDistance){
			this.__distance = newDistance;
		}
	}
	set parent (newNod){
		if(newNod){
			this.__parent = newNod;
		}
	}
};

module.exports=Noduri