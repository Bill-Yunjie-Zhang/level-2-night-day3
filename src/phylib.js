var calcVelocity = function(time, distance){
    var vel = distance/time;
    return vel;
}

var calcForce = function(mass, vel){
    var force = mass * vel;
    return force;
}

var calcVoltage = function(current, resistance){
    var voltage = current * resistance;
    return voltage;
}

var phy = {
    calcVelocity: calcVelocity,
    calcForce: calcForce,
    calcVoltage: calcVoltage
}

module.exports = phy