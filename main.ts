input.onButtonPressed(Button.A, function () {
    man.move(-1)
})
input.onGesture(Gesture.LogoUp, function () {
    man.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    man.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    man.change(LedSpriteProperty.Y, -1)
})
let man: game.LedSprite = null
man = game.createSprite(0, 2)
let croc1 = game.createSprite(1, 2)
basic.forever(function () {
    if (man.isTouching(croc1)) {
        game.gameOver()
    }
})
basic.forever(function () {
    croc1.set(LedSpriteProperty.Y, randint(0, 5))
    basic.pause(200)
})
