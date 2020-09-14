const main_method = {
    resizeBackLine(arr){
        let dist = param.util.height * param.backLine.radius

        arr.forEach((e, i) => {
            let deg = param.backLine.deg * i * param.util.radian,
                x = Math.cos(deg) * dist, y = Math.sin(deg) * dist,
                offset = 90 + param.backLine.deg * i
                
            e.style.child2.transform = `translate(${x}px, ${y}px) rotate(${offset}deg)`
        })
    }
}