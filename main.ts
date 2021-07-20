input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onPinPressed(TouchPin.P2, function () {
    turtle.pen(TurtlePenMode.Down)
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.AB, function () {
    turtle.home()
    music.playTone(523, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onPinPressed(TouchPin.P1, function () {
    turtle.pen(TurtlePenMode.Up)
    music.playTone(349, music.beat(BeatFraction.Quarter))
})
turtle.setPosition(2, 2)
