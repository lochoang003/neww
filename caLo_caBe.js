let canvas = document.getElementById('canVas')
let ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500
let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    click: false
}

function hienThi() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fillRect(canvas.width / 2, canvas.height / 2, 40, 20)
    ctx.fillRect(0, canvas.height / 2, 40, 20)
}

hienThi()

canvas.addEventListener("mousedown", function (as) {
    mouse.x = as.x
    mouse.y = as.y
    click = true
})
canvas.addEventListener("mouseup", function () {
    click= false

})

class player {
    constructor(  ) {
        this.x = 0
        this.y = 0
        this.radius = 50
        this.goc = 0
    }
    update(){
        let viTri_x = this.x-mouse.x
        let viTri_y = this.y - mouse.y
        if (mouse.x != this.x){
            this.x -= viTri_x/30
        }
        if (mouse.y != this.y){
            this.y -= viTri_y/30
        }
    }
}

