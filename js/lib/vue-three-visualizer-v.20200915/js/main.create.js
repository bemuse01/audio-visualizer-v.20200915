const main_create = {
    createLine(pr, direction){
        let arr = [], len = Math.floor(360 / pr.deg),
            dist = param.util.height * pr.radius,
            color = pr.color

        for(let i = 0; i < len; i++){
            let deg = pr.deg * i * param.util.radian,
                x = Math.cos(deg) * dist, y = Math.sin(deg) * dist,
                offset = 90 + pr.deg * i
            
            if(direction) color = i < len / 2 ? color - pr.step : color + pr.step
            else color = i < len / 2 ? color + pr.step : color - pr.step

            arr[i] = {
                id: i,
                param: {
                    color: color
                },
                style: {
                    parent: {
                        filter: `drop-shadow(0px 0px 6px hsla(${color}, 100%, 60%, 1)) brightness(1.25)`
                    },
                    child1: {
                        transform: `translate(${x}px, ${y}px) rotate(${offset}deg)`
                    },
                    child2: {
                        transform: `scaleY(1)`,
                        background: direction === true ? `linear-gradient(
                            hsla(${color}, 100%, 65%, ${pr.opacity.top}) 65%, 
                            hsla(${color}, 100%, 65%, ${pr.opacity.bottom})) 100%
                        ` : `hsl(${color}, 100%, 65%)`
                    }
                }
            }
        }

        return arr
    }
}