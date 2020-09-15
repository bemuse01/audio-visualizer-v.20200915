const move = {
    updateLineScale(arr, dataArray){
        arr.forEach((e, i) => {
            let scale = 1 + dataArray[i] / 255 * 6
            e.style.child2.transform = `scaleY(${scale})`
        })
    },
    updateLineOpacity(arr, dataArray, pr){
        arr.forEach((e, i) => {
            let opacity = 0.4 + dataArray[i] / 255 * (1 - pr.opacity.bottom),
                position = 65 - dataArray[i] / 255 * 100 / 2

            e.style.child2.background = `linear-gradient(
                hsla(${e.param.color}, 100%, 65%, ${pr.opacity.top}) ${position}%, 
                hsla(${e.param.color}, 100%, 65%, ${opacity})) 100%`
        })
    }
}