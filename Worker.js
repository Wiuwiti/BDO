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


	// get_node_time(node_workLoad, node_distance){
	// 	return Math.ceil(node_workLoad/this.workSpeed)*600 + node_distance * 2 / this.movementSpeed
	// }
	get_maximum_worktime_on_node(_node){
		return this.stamina * this.get_node_time(_node)
	}

	// get_maximum_worktime_on_node(node_workLoad, node_distance){
	// 	return this.stamina * this.get_node_time(node_workLoad, node_distance)
	// }


	get_silver_allenergy(_node){
		return _node.silver* this.stamina
	}

	get_silver_undertimer(_node,time){
		if(this.get_maximum_worktime_on_node(_node) < time){
			return this.get_silver_allenergy(_node)
		}
		return (Math.floor(time/this.get_node_time(_node) + 1) * _node.silver)
	}


	// get_silver_undertimer(silver, time,node_workLoad, node_distance){
	// 	if(this.get_maximum_worktime_on_node(node_workLoad, node_distance) < time){
	// 		return this.get_silver_allenergy(silver)
	// 	}
	// 	return (Math.floor(time/this.get_node_time(node_workLoad, node_distance))+ 1)*silver
	// }

	test_fucntion(_nodul){
		console.log(_nodul.distance)
	}

};

module.exports=Worker