input.onGesture(Gesture.LogoUp, function () {
    man.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    man.move(-1)
})
input.onGesture(Gesture.TiltRight, function () {
    man.move(1)
})
input.onGesture(Gesture.LogoDown, function () {
    man.change(LedSpriteProperty.Y, -1)
})
let man: game.LedSprite = null
man = game.createSprite(0, 2)
basic.forever(function () {
	
})
