new Vue({
    el: '#wrap',
    data(){
        return{
            element: {
                visualizer: {
                    line: {
                        back: main_create.createBackLine(),
                        front: null
                    }
                },
                msg: 'work'
            }
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        init(){
            this.animate()

            window.addEventListener('resize', this.onWindowResize, false)
        },




        // util
        onWindowResize(){
            param.util.width = window.innerWidth
            param.util.height = window.innerHeight

            main_method.resizeBackLine(this.element.visualizer.line.back)
        },




        // render
        render(){

        },
        animate(){
            this.render()
            requestAnimationFrame(this.animate)
        }
    }
})