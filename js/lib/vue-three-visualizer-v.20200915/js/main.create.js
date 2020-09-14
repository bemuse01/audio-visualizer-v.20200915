const main_create = {
    createBackLine(){
        let arr = [], len = 360 / param.backLine.deg,
            dist = param.util.height * param.backLine.radius,
            color = param.backLine.color

        for(let i = 0; i < len; i++){
            let deg = param.backLine.deg * i * param.util.radian,
                x = Math.cos(deg) * dist, y = Math.sin(deg) * dist,
                offset = 90 + param.backLine.deg * i
            
            color = i < len / 2 ? color - 2 : color + 2
            
            arr[i] = {
                id: i,
                style: {
                    child1: {
                    },
                    child2: {
                        transform: `translate(${x}px, ${y}px) rotate(${offset}deg)`,
                        background: `linear-gradient(hsla(${color}, 100%, 65%, 0), hsla(${color}, 100%, 65%, 1))`
                    }
                }                
            }
        }

        return arr
    }
}