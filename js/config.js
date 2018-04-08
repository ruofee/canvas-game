let canvas = document.getElementById('Canvas')
let ctx = canvas.getContext('2d')

let img = {
  title: new Image(),
  game_over: new Image(),
  land1: new Image(),
  land2: new Image(),
  pipe_down: new Image(),
  pipe_up: new Image(),
  bg: new Image(),
  bird_0: new Image(),
  bird_1: new Image(),
  bird_2: new Image(),
  num_0: new Image(),
  num_1: new Image(),
  num_2: new Image(),
  num_3: new Image(),
  num_4: new Image(),
  num_5: new Image(),
  num_6: new Image(),
  num_7: new Image(),
  num_8: new Image(),
  num_9: new Image(),
  load () {
    this.title.src = './image/title.png'
    this.game_over.src = './image/text_game_over.png'
    this.land1.src = './image/land.png'
    this.land2.src = './image/land.png'
    this.pipe_down.src = './image/pipe_down.png'
    this.pipe_up.src = './image/pipe_up.png'
    this.bg.src = './image/bg_day.png'
    this.bird_0.src = './image/bird0_1.png'
    this.bird_1.src = './image/bird0_0.png'
    this.bird_2.src = './image/bird0_2.png'
    this.num_0.src = './image/num_0.png'
    this.num_1.src = './image/num_1.png'
    this.num_2.src = './image/num_2.png'
    this.num_3.src = './image/num_3.png'
    this.num_4.src = './image/num_4.png'
    this.num_5.src = './image/num_5.png'
    this.num_6.src = './image/num_6.png'
    this.num_7.src = './image/num_7.png'
    this.num_8.src = './image/num_8.png'
    this.num_9.src = './image/num_9.png'
  }
}

//类集合
class Game {
  constructor (state, width, height, g) {
    this.state = state
    this.width = width
    this.height = height
    this.g = g
  }
}

class Land {
  constructor (land1, land2, load) {
    this.land1 = land1
    this.land2 = land2
    this.load = load
  }
  working () {
    if (this.load) {
      if (this.land1 > -canvas.width) {
        this.land1 = this.land1 - 5
      } else {
        this.land1 = canvas.width - 5
      }
      if (this.land2 > -canvas.width) {
        this.land2 = this.land2 - 5
      } else {
        this.land2 = canvas.width - 5
      }
    }
    ctx.drawImage(img.land1, this.land1, canvas.height - 60, 400, 60)
    ctx.drawImage(img.land2, this.land2, canvas.height - 60, 400, 60)
  }
}

class Score {
  constructor (value) {
    this.value = value
  }
  draw_one (img) {
    ctx.drawImage(img, canvas.width/2 - 20, 100, 40, 80)
  }
  draw_two (img) {
    ctx.drawImage(img, canvas.width/2 - 40, 100, 40, 80)
  }
  draw_three (img) {
    ctx.drawImage(img, canvas.width/2, 100, 40, 80)
  }
  draw_four (img) {
    ctx.drawImage(img, canvas.width/2 - 20, canvas.height/2 - 30, 40, 80)
  }
  draw_five (img) {
    ctx.drawImage(img, canvas.width/2 - 40, canvas.height/2 - 30, 40, 80)
  }
  draw_six (img) {
    ctx.drawImage(img, canvas.width/2, canvas.height/2 - 30, 40, 80)
  }
  draw_single () {
    this.draw_one(img[`num_${this.value}`])
  }
  draw_double () {
    let x = parseInt(this.value/10)
    let y = this.value % 10
    this.draw_two(img[`num_${x}`])
    this.draw_three(img[`num_${y}`])
  }
  draw_game () {
    let length = this.value.toString().length
    switch (length) {
      case 1: this.draw_single()
              break
      case 2: this.draw_double()
              break
    }
  }
  draw_reload () {
    let length = this.value.toString().length
    switch (length) {
      case 1: this.draw_four(img[`num_${this.value}`])
              break
      case 2: let x = parseInt(this.value/10)
              let y = this.value % 10
              this.draw_five(img[`num_${x}`])
              this.draw_six(img[`num_${y}`])
              break
    }
  }
}

class Pipe {
  constructor (width, height) {
    this.width = width
    this.height = height
    this.pipe_up = {
      x: canvas.width + 500,
      y: 0
    }
    this.pipe_down = {
      x: canvas.width + 500,
      y: 0
    }
    this.speed = 5
    this.state = false
  }
  random_pipe () {
    return Math.random() * (canvas.height - 60 - 230) + 230
  }
  draw (img1, img2) {
    ctx.drawImage(img1, this.pipe_up.x, this.pipe_up.y, this.width, this.height)
    ctx.drawImage(img2, this.pipe_down.x, this.pipe_down.y, this.width, this.height)
  }
  load () {
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
      let x = this.random_pipe()
      this.pipe_up.y = x
      this.pipe_down.y = x - 170 - this.height
      this.state = true
    }
  }
}

class Bird {
  constructor (width, height, x, y) {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.state = 0
    this.state_menu = 0
    this.jump = 0
    this.v = 0
  }
  draw (img) {
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
  }
  over () {
    land.load = false
    game.state = 2
  }
  reload () {
    pipe.pipe_up.x = canvas.width + 500
    pipe.pipe_down.x = canvas.width + 500
    pipe.state = false

    land.load = true
    land.land1 = 0
    land.land2 = canvas.width

    this.jump = 0 
    this.state = 0
    this.v = 0
    this.state_menu = 0
    this.y = canvas.height/2 - 35

    score.value = 0
  }
  fly_menu () {
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
  }
  fly_state () {
    if (this.state <= 10 && this.state >= 1) {
      this.state++
    } else {
      this.state = 1
    }
    if (this.state <= 5 && this.state >= 1) {
      this.draw(img.bird_1)
    } else {
      this.draw(img.bird_2)
    }
  }
  fly_working () {
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
  }
  CD () {
    let a = this.x + this.width/2
    let b = this.y
    let c = this.y + this.height
    if ((a <= pipe.pipe_down.x + pipe.width && a >=  pipe.pipe_down.x && b <=  pipe.pipe_down.y - 10 + pipe.height && b >= 0) || (a <=  pipe.pipe_up.x + pipe.width && a >=  pipe.pipe_up.x && c <= canvas.height && c >=  pipe.pipe_up.y + 10)) {
      this.over()
    }
  } //碰撞检测
}

//事件函数
function canvas_load(width, height) {
  canvas.width = width
  canvas.height = height 
}

function menu() {
  bird.draw(img.bird_0)

  bird.fly_menu()

  ctx.drawImage(img.title, canvas.width/2 - 150, 80, 300, 80)
}

function working() {
  bird.fly_working()
  pipe.load()
  pipe.draw(img.pipe_up, img.pipe_down)
  bird.fly_state()
  bird.CD()
  score.draw_game()
}

function reload() {
  pipe.draw(img.pipe_up, img.pipe_down)
  bird.draw(img.bird_0)

  ctx.drawImage(img.game_over, canvas.width/2 - 150, canvas.height/2 - 160, 300, 70)

  score.draw_reload()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(img.bg, 0, 0, canvas.width, canvas.height + 100)

  switch (game.state) {
    case 0: menu()
            break
    case 1: working()
            break
    case 2: reload()
            break
  }

  land.working()

  window.requestAnimationFrame(draw)
}

function clickEvent() {
  if (game.state == 0) {
    game.state = 1
    bird.state = 1
  } else if (game.state == 1){
    bird.jump = 1
    bird.v = -10
  } else if (game.state == 2) {
    game.state = 1
    bird.reload()
  }
}

function keydownEvent(e) {
  if (e.keyCode == 32 && game.state == 0) {
    game.state = 1
    bird.state = 1
  } else if (e.keyCode == 32 && game.state == 1){
    bird.jump = 1
    bird.v = -10
  } else if (e.keyCode == 32 && game.state == 2) {
    game.state = 1
    bird.reload()
  }
}


