input.onSound(DetectedSound.Loud, function () {
    clap += 1
    soundExpression.mysterious.play()
})
let clap = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
    basic.showNumber(clap)
    if (clap > 10) {
        soundExpression.soaring.play()
        clap = 0
    }
})
