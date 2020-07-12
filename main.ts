input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < Math.randomRange(0, 3); index++) {
        for (let 角度 = 0; 角度 <= 90; 角度++) {
            music.ringTone(Math.sin(角度 * 2 * 3.14 / 180) * 400 + 1200)
        }
    }
    pins.analogPitch(0, 1)
    basic.pause(Math.randomRange(0, 10) * 100)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.stopMelody(MelodyStopOptions.All)
})
basic.showLeds(`
    . # # . .
    # # # . .
    . # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
