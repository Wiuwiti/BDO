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

	get_node_time(_node){
		return Math.ceil(_node.workload / this.workSpeed) * 600 + _node.distance * 2 / this.movementSpeed
	}



	get_maximum_worktime_on_node(_node){
		return this.stamina * this.get_node_time(_node)
	}




	get_silver_allenergy(_node){
		return _node.silver* this.stamina
	}

	get_silver_undertimer(_node,time){
		if(this.get_maximum_worktime_on_node(_node) < time){
			return this.get_silver_allenergy(_node)
		}
		return (Math.floor(time/this.get_node_time(_node) + 1) * _node.silver)
	}




	test_fucntion(_nodul){
		console.log(_nodul.distance)
	}

};

module.exports=Worker