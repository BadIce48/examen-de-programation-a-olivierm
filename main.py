def on_forever():
    servos.P1.set_angle(pins.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 10, 170))
basic.forever(on_forever)
