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
let croc2 = game.createSprite(2, 2)
let croc3 = game.createSprite(3, 2)
let score = 0
let h = game.createSprite(4, 0)
let o = game.createSprite(4, 1)
basic.forever(function () {
    if (man.isTouching(croc1)) {
        game.gameOver()
    }
    if (man.isTouching(croc2)) {
        game.gameOver()
    }
    if (man.isTouching(croc3)) {
        game.gameOver()
    }
    if (man.isTouchingEdge()) {
        score += 1
        man.set(LedSpriteProperty.X, 0)
    }
})
basic.forever(function () {
    croc1.set(LedSpriteProperty.Y, randint(0, 5))
    basic.pause(5000)
    croc2.set(LedSpriteProperty.Y, randint(0, 5))
    croc3.set(LedSpriteProperty.Y, randint(0, 5))
})
