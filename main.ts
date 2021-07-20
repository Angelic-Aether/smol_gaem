input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
    music.playTone(4, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        turtle.pen(TurtlePenMode.Up)
    } else {
        turtle.pen(TurtlePenMode.Down)
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
turtle.setPosition(2, 2)
turtle.pen(TurtlePenMode.Down)
basic.forever(function () {
	
})
