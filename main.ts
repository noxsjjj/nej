input.onButtonPressed(Button.A, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 1423, 2924, 255, 255, 5000, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    let w: Image = null
    w.showImage(0)
    for (let index = 0; index < 100004; index++) {
        music.ringTone(988)
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 5000, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
    basic.showString("Heil Hitler!")
})
basic.forever(function () {
	
})
