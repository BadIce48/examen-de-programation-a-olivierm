basic.forever(function () {
    servos.P1.setAngle(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    10,
    170
    ))
})
