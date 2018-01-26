let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let time = 0

let screen = {
  width: 400,
  height: 600
}

let game = {
  state: 0, //0: menu, 1: game 2: reload
}

canvas.width = screen.width
canvas.height = screen.height

function random_pipe() {
  return Math.random() * (canvas.height - canvas.height/2) + canvas.height/2
}

let score = {
  value: 0,
  draw_one: function (img) {
    ctx.drawImage(img, canvas.width/2 - 20, 100, 40, 80)
  },
  draw_two: function (img) {
    ctx.drawImage(img, canvas.width/2 - 40, 100, 40, 80)
  },
  draw_three: function (img) {
    ctx.drawImage(img, canvas.width/2, 100, 40, 80)
  },
  draw_four: function (img) {
    ctx.drawImage(img, canvas.width/2 - 20, canvas.height/2 - 30, 40, 80)
  },
  draw_five: function (img) {
    ctx.drawImage(img, canvas.width/2 - 40, canvas.height/2 - 30, 40, 80)
  },
  draw_six: function (img) {
    ctx.drawImage(img, canvas.width/2, canvas.height/2 - 30, 40, 80)
  }
}

let land = {
  land1: 0,
  land2: canvas.width,
  load: true
}

let pipe = {
  width: 90,
  height: canvas.height,
  pipe_up: {
    x: canvas.width,
    y: 0
  },
  pipe_down: {
    x: canvas.width,
    y: 0
  },
  draw: function (img1, img2) {
    ctx.drawImage(img1, this.pipe_up.x, this.pipe_up.y, this.width, this.height)
    ctx.drawImage(img2, this.pipe_down.x, this.pipe_down.y, this.width, this.height)
  },
  speed: 5,
  state: false, //false: reload true: load
  load: function () {
    if (this.state) {
      if (this.pipe_up.x > -90) { 
        this.pipe_up.x -= this.speed
        this.pipe_down.x -= this.speed
      } else {
        score.value++
        this.state = false
        this.pipe_up.x = canvas.width
        this.pipe_down.x = canvas.width
      }
    } else {
      let x = random_pipe()
      this.pipe_up.y = x
      this.pipe_down.y = x - 170 - this.height
      this.state = true
    }
  }
}

let bird = {
  state: 0, // 0: 滑翔 1~5: 挥翅1 6~10: 挥翅2
  width: 70,
  height: 70,
  x: 140,
  y: canvas.height/2 - 35,
  state_menu: 0, //0: 向下 1: 向上
  jump: 0, //0: 向下 1: 向上
  v: 0, //速度
  time: 0,
  g: 9.8,
  draw: function (img) {
    if (!this.state) {
      ctx.drawImage(img, this.x, this.y, this.width, this.height)
    } else {
      ctx.save()

      ctx.translate(this.x, this.y)

      if (this.v <= 0) {
        ctx.rotate((Math.PI / 12)*this.v/10)
      } else if (this.v < 10){
        ctx.rotate((Math.PI / 12)*this.v/10)
      } else {
        ctx.rotate(Math.PI / 12)
      }
      
      ctx.drawImage(img, 0, 0, this.width, this.height)

      ctx.restore()
    }
  },
  over: function () {
    land.load = false
    game.state = 2
  },
  reload: function () {
    window.clearInterval(a)

    pipe.pipe_up.x = canvas.width
    pipe.pipe_down.x = canvas.width
    pipe.state = false

    this.jump = 0 
    this.state = 0
    this.v = 0
    this.state_menu = 0
    this.time = 0
    this.y = canvas.height/2 - 35

    score.value = 0
  },
  fly: function () {
    if (this.jump) {
      if (this.v < 0) {
        if (this.y > 0) {
          this.v = this.v + this.g * (time - this.time)
          this.y = this.y + (this.v * (time - this.time) - 0.5 * this.g * (time - this.time) * (time - this.time)) * 15
        } else {
          this.over()
        }
      } else {
        this.v = 0
        this.jump = 0
      }
    } else {
      this.v = this.v + this.g * (time - this.time)
      if (this.y < canvas.height) {
        this.y = this.y + (this.v * (time - this.time) - 0.5 * this.g * (time - this.time) * (time - this.time)) * 2
      } else {
        this.over()
      }
    }
  }
}

let title = new Image()
let game_over = new Image()

let land1 = new Image()
let land2 = new Image()

let pipe_down = new Image()
let pipe_up = new Image()

let bg = new Image()

let bird_0 = new Image()
let bird_1 = new Image()
let bird_2 = new Image()

let num_0 = new Image()
let num_1 = new Image()
let num_2 = new Image()
let num_3 = new Image()
let num_4 = new Image()
let num_5 = new Image()
let num_6 = new Image()
let num_7 = new Image()
let num_8 = new Image()
let num_9 = new Image()

title.src = './images/title.png'
game_over.src = './images/text_game_over.png'
land1.src = './images/land.png'
land2.src = './images/land.png'
pipe_down.src = './images/pipe_down.png'
pipe_up.src = './images/pipe_up.png'
bg.src = './images/bg_day.png'
bird_0.src = './images/bird0_1.png'
bird_1.src = './images/bird0_0.png'
bird_2.src = './images/bird0_2.png'
num_0.src = './images/num_0.png'
num_1.src = './images/num_1.png'
num_2.src = './images/num_2.png'
num_3.src = './images/num_3.png'
num_4.src = './images/num_4.png'
num_5.src = './images/num_5.png'
num_6.src = './images/num_6.png'
num_7.src = './images/num_7.png'
num_8.src = './images/num_8.png'
num_9.src = './images/num_9.png'