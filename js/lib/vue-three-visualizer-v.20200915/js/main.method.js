const main_method = {
    resizeLine(arr, pr){
        let dist = param.util.height * pr.radius

        arr.forEach((e, i) => {
            let deg = pr.deg * i * param.util.radian,
                x = Math.cos(deg) * dist, y = Math.sin(deg) * dist,
                offset = 90 + pr.deg * i
                
            e.style.child1.transform = `translate(${x}px, ${y}px) rotate(${offset}deg)`
        })
    }
}