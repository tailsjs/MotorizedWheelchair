class MotorizedWheelchair{
    constructor(){
        this.isOn = false;
    }

    turnOn(){
        if(!this.isOn){
            this.isOn = true;
            console.log("Wheelchair turned on")
        }else{
            console.log("Wheelchair is already on")
        }
    }

    turnOff(){
        if(this.isOn){
            this.isOn = false;
            console.log("Wheelchair turned on")
        }else{
            console.log("Wheelchair is already on")
        }
    }

    moveForward(){
        if(this.isOn){
            console.log("Wheelchair moving forward")
        } else {
            console.log("Turn on the wheelchair first")
        }
    }

    moveBackward(){
        if(this.isOn){
            console.log("Wheelchair moving forward")
        } else {
            console.log("Turn on the wheelchair first")
        }
    }
}

let wheelchair = new MotorizedWheelchair()

wheelchair.turnOn()
wheelchair.moveForward()
wheelchair.moveBackward()
wheelchair.turnOff()
wheelchair.moveForward()