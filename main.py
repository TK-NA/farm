def on_forever():
    basic.show_string("" + str(input.temperature()))
    while input.temperature() > 25:
        music.set_volume(255)
        music.play_tone(523, music.beat(BeatFraction.DOUBLE))
        music.rest(music.beat(BeatFraction.WHOLE))
