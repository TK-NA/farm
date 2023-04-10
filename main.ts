function on_forever() {
    basic.showString("" + ("" + input.temperature()))
    while (input.temperature() > 25) {
        music.setVolume(255)
        music.playTone(523, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
    }
}

