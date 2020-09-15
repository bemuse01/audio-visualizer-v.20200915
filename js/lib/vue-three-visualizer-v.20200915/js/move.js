const move = {
    updateLineScale(arr, audio){
        arr.forEach((e, i) => {
            let scale = 1 + audio.dataArray[audio.dataArrayIndex[i]] / 255 * 6
            e.style.child2.transform = `scaleY(${scale})`
        })
    },
    updateLineOpacity(arr, audio, pr){
        arr.forEach((e, i) => {
            let opacity = pr.opacity.bottom + audio.dataArray[audio.dataArrayIndex[i]] / 255 * (1 - pr.opacity.bottom) * 1.5,
                position = pr.position - audio.dataArray[audio.dataArrayIndex[i]] / 255 * 100 / 1.5

            e.style.child2.background = `linear-gradient(
                hsla(${e.param.color}, 100%, 65%, ${pr.opacity.top}) ${position}%, 
                hsla(${e.param.color}, 100%, 65%, ${opacity})) 100%`
        })
    }
}