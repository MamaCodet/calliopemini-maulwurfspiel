input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Zufall == 0) {
        Punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (Zufall == 1) {
        Punkte += 1
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Punkte)
})
let Zufall = 0
let Punkte = 0
Punkte = 0
basic.forever(function () {
    Zufall = randint(0, 1)
    if (Zufall == 0) {
        basic.showLeds(`
            . . # . .
            # . # . .
            # . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
