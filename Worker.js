'use strict'

class Worker{
	constructor(workSpeed, movementSpeed, luck, stamina){
		this.__workSpeed= workSpeed
		this.__movementSpeed = movementSpeed
		this.__luck = luck
		this.__stamina= stamina 
	}

	get workSpeed(){
		return this.__workSpeed;
	}
	get movementSpeed(){
		return this.__movementSpeed;
	}
	get luck(){
		return this.__luck;
	}
	get stamina(){
		return this.__stamina;
	}

	set workSpeed(newWorkSpeed){
		if(newWorkSpeed){
			this.__workSpeed = newWorkSpeed;
		}
	}
	set movementSpeed(newMovementSpeed){
		if(newMovementSpeed){
			this.__movementSpeed = newMovementSpeed;
		}
	}
	set luck(newLuck){
		if(newLuck){
			this.__luck = newLuck
		}
	}
	set stamina(newStamina){
		if(newStamina){
			this.__stamina = newStamina
		}
	}

	get_node_time(node_workLoad, node_distance){
		return Math.ceil(node_workLoad/this.workSpeed)*600 + node_distance * 2 / this.movementSpeed
	}

};

module.exports=Worker