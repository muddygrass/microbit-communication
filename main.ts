radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
})
radio.setGroup(15)
basic.forever(function () {
    radio.sendValue("magnetic", input.magneticForce(Dimension.X))
    serial.writeValue("magnetic", input.magneticForce(Dimension.X))
})
