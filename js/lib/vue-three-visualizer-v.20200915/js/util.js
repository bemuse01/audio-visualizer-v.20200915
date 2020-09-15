const util = {
    createDataArrayIndex(len){
        let arr = []
        for(let i = 0; i < len / 2; i++) arr[i] = i * 16 + 32
        return [...arr, ...arr.reverse()] 
    }
}