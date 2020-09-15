new Vue({
    el: '#wrap',
    data(){
        return{
            element: {
                visualizer: {
                    line: {
                        back: main_create.createLine(param.backLine, true),
                        front: main_create.createLine(param.frontLine, false)
                    }
                }
            },
            audio: {
                src: 'song/아델라(CV.장미) - Alive on live.mp3',
                song: null,
                analyser: null,
                dataArray: null,
                fftSize: 2048
            },
            three: {

            }
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.initAudio()

            this.animate()

            window.addEventListener('resize', this.onWindowResize, false)
        },




        // audio
        initAudio(){
            main_init.initAudio(this.audio)
            window.addEventListener('click', this.playAudio)
        },
        playAudio(){
            if(this.audio.song.paused) this.audio.song.play()
        },
        updateDataArray(){
            this.audio.analyser.getByteFrequencyData(this.audio.dataArray)
        },




        // visualizer
        updateLine(){
            move.updateLineScale(this.element.visualizer.line.front, this.audio.dataArray)
            move.updateLineOpacity(this.element.visualizer.line.back, this.audio.dataArray, param.backLine)
        },



        // util
        onWindowResize(){
            param.util.width = window.innerWidth
            param.util.height = window.innerHeight

            main_method.resizeLine(this.element.visualizer.line.back, param.backLine)
            main_method.resizeLine(this.element.visualizer.line.front, param.frontLine)
        },




        // render
        render(){
            this.updateDataArray()
            this.updateLine()
        },
        animate(){
            this.render()
            requestAnimationFrame(this.animate)
        }
    }
})