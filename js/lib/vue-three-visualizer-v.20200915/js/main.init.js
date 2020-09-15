const main_init = {
    initAudio(audio){
        audio.song = new Audio()
        audio.song.src = audio.src
        audio.song.loop = true

        let context = new AudioContext()
        let src = context.createMediaElementSource(audio.song)
        audio.analyser = context.createAnalyser()
        src.connect(audio.analyser)
        audio.analyser.connect(context.destination)
        audio.analyser.fftSize = audio.fftSize
        audio.analyser.smoothingTimeConstant = 0.7
        let bufferLength = audio.analyser.frequencyBinCount
        audio.dataArray = new Uint8Array(bufferLength)
        audio.dataArrayIndex = util.createDataArrayIndex(Math.floor(360 / param.backLine.deg))
    }
}