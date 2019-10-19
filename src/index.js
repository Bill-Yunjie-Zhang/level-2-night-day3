var phy = require("./phylib")
var physics = require('ngraph.physics.simulator')
var body1 = new physics.Body(0, 0)
var body2 = new physics.Body(1, 0)

var createSimulator = require('ngraph.physics.simulator')
var simulator = createSimulator()
simulator.addBody(body1)
simulator.addBody(body2)

