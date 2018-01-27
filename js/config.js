let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

let game = {
  state: 0, //0: menu, 1: game 2: reload
  width: 400,
  height: 600,
  g: 9.8
}

canvas.width = game.width
canvas.height = game.height

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

title.src = './image/title.png'
game_over.src = './image/text_game_over.png'
land1.src = './image/land.png'
land2.src = './image/land.png'
pipe_down.src = './image/pipe_down.png'
pipe_up.src = './image/pipe_up.png'
bg.src = './image/bg_day.png'
bird_0.src = './image/bird0_1.png'
bird_1.src = './image/bird0_0.png'
bird_2.src = './image/bird0_2.png'
num_0.src = './image/num_0.png'
num_1.src = './image/num_1.png'
num_2.src = './image/num_2.png'
num_3.src = './image/num_3.png'
num_4.src = './image/num_4.png'
num_5.src = './image/num_5.png'
num_6.src = './image/num_6.png'
num_7.src = './image/num_7.png'
num_8.src = './image/num_8.png'
num_9.src = './image/num_9.png'

function random_pipe() {
  return Math.random() * (canvas.height - 60 - 230) + 230
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
  },
  draw_game: function () {
    if (this.value < 10) {
      switch (this.value) {
        case 0: this.draw_one(num_0)
                break
        case 1: this.draw_one(num_1)
                break
        case 2: this.draw_one(num_2)
                break
        case 3: this.draw_one(num_3)
                break
        case 4: this.draw_one(num_4)
                break
        case 5: this.draw_one(num_5)
                break
        case 6: this.draw_one(num_6)
                break
        case 7: this.draw_one(num_7)
                break
        case 8: this.draw_one(num_8)
                break
        case 9: this.draw_one(num_9)
                break
      }
    } else if (this.value < 100) {
      let x = parseInt(this.value/10)
      let y = this.value % 10
      switch (x) {
        case 0: this.draw_two(num_0)
                break
        case 1: this.draw_two(num_1)
                break
        case 2: this.draw_two(num_2)
                break
        case 3: this.draw_two(num_3)
                break
        case 4: this.draw_two(num_4)
                break
        case 5: this.draw_two(num_5)
                break
        case 6: this.draw_two(num_6)
                break
        case 7: this.draw_two(num_7)
                break
        case 8: this.draw_two(num_8)
                break
        case 9: this.draw_two(num_9)
                break
      }
      switch (y) {
        case 0: this.draw_three(num_0)
                break
        case 1: this.draw_three(num_1)
                break
        case 2: this.draw_three(num_2)
                break
        case 3: this.draw_three(num_3)
                break
        case 4: this.draw_three(num_4)
                break
        case 5: this.draw_three(num_5)
                break
        case 6: this.draw_three(num_6)
                break
        case 7: this.draw_three(num_7)
                break
        case 8: this.draw_three(num_8)
                break
        case 9: this.draw_three(num_9)
                break
      }
    }
  },
  draw_reload: function () {
    if (this.value < 10) {
      switch (this.value) {
        case 0: this.draw_four(num_0)
                break
        case 1: this.draw_four(num_1)
                break
        case 2: this.draw_four(num_2)
                break
        case 3: this.draw_four(num_3)
                break
        case 4: this.draw_four(num_4)
                break
        case 5: this.draw_four(num_5)
                break
        case 6: this.draw_four(num_6)
                break
        case 7: this.draw_four(num_7)
                break
        case 8: this.draw_four(num_8)
                break
        case 9: this.draw_four(num_9)
                break
      }
    } else if (this.value < 100) {
      let x = parseInt(this.value/10)
      let y = this.value % 10
      switch (x) {
        case 0: this.draw_five(num_0)
                break
        case 1: this.draw_five(num_1)
                break
        case 2: this.draw_five(num_2)
                break
        case 3: this.draw_five(num_3)
                break
        case 4: this.draw_five(num_4)
                break
        case 5: this.draw_five(num_5)
                break
        case 6: this.draw_five(num_6)
                break
        case 7: this.draw_five(num_7)
                break
        case 8: this.draw_five(num_8)
                break
        case 9: this.draw_five(num_9)
                break
      }
      switch (y) {
        case 0: this.draw_six(num_0)
                break
        case 1: this.draw_six(num_1)
                break
        case 2: this.draw_six(num_2)
                break
        case 3: this.draw_six(num_3)
                break
        case 4: this.draw_six(num_4)
                break
        case 5: this.draw_six(num_5)
                break
        case 6: this.draw_six(num_6)
                break
        case 7: this.draw_six(num_7)
                break
        case 8: this.draw_six(num_8)
                break
        case 9: this.draw_six(num_9)
                break
      }
    }
  }
}

let land = {
  land1: 0,
  land2: canvas.width,
  load: true,
  working: function () {
    if (land.load) {
      if (land.land1 > -canvas.width) {
        land.land1 = land.land1 - 3
      } else {
        land.land1 = canvas.width - 5
      }
      if (land.land2 > -canvas.width) {
        land.land2 = land.land2 - 3
      } else {
        land.land2 = canvas.width - 5
      }
    }
    ctx.drawImage(land1, land.land1, canvas.height - 60, 400, 60)
    ctx.drawImage(land2, land.land2, canvas.height - 60, 400, 60)
  }
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
      console.log(x)
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
  state_menu: 0, //menu状态的小鸟 0: 向下 1: 向上
  jump: 0, //1: 向上飞
  v: 0, //速度
  draw: function (img) {
    if (!this.state) {
      ctx.drawImage(img, this.x, this.y, this.width, this.height)
    } else {
      ctx.save()
      ctx.translate(this.x, this.y)
      if (this.v <= 0) {
        ctx.rotate((Math.PI/10)*this.v/10)
      } else if (this.v < 10){
        ctx.rotate((Math.PI/10)*this.v/10)
      } else {
        ctx.rotate(Math.PI/10)
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
    pipe.pipe_up.x = canvas.width
    pipe.pipe_down.x = canvas.width
    pipe.state = false

    this.jump = 0 
    this.state = 0
    this.v = 0
    this.state_menu = 0
    this.y = canvas.height/2 - 35

    score.value = 0
  },
  fly_menu: function () {
    if (this.state_menu) {
      if (this.y > canvas.height/2 - 40) {
        this.y = this.y - 0.7
      } else {
        this.state_menu = 0
      }
    } else {
      if (this.y < canvas.height/2 - 30) {
        this.y = this.y + 0.7
      } else {
        this.state_menu = 1
      }
    }
  },
  fly_state: function () {
    if (this.state <= 10 && this.state >= 1) {
      this.state++
    } else {
      this.state = 1
    }
    if (this.state <= 5 && this.state >= 1) {
      this.draw(bird_1)
    } else {
      this.draw(bird_2)
    }
  },
  fly_working: function () {
    if (this.jump) {
      if (this.v < 0) {
        if (this.y > 0) {
          this.v = this.v + game.g * (1/15)
          this.y = this.y + (this.v * 1/15 - 0.5 * game.g * 1/15 * 1/15) * 18
        } else {
          this.over()
        }
      } else {
        this.v = 0
        this.jump = 0
      }
    } else {
      this.v = this.v + game.g * (1/15)
      if (this.y < canvas.height - 60 - this.height) {
        this.y = this.y + (this.v * (1/15) - 0.5 * game.g * (1/15) * (1/15)) * 18
      } else {
        this.over()
      }
    }
  },
  CD: function () {
    let a = this.x + this.width/2
    let b = this.y
    let c = this.y + this.height
    if ((a <= pipe.pipe_down.x + pipe.width && a >=  pipe.pipe_down.x && b <=  pipe.pipe_down.y - 10 + pipe.height && b >= 0) || (a <=  pipe.pipe_up.x + pipe.width && a >=  pipe.pipe_up.x && c <= canvas.height && c >=  pipe.pipe_up.y + 10)) {
      this.over()
    }
  } //碰撞检测
}