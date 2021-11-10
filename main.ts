input.onButtonPressed(Button.A, function () {
    basic.showString("Li")
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Fe")
    basic.showNumber(pins.analogReadPin(AnalogPin.C16))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Te")
    basic.showNumber(input.temperature())
})
