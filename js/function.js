function menu() {
  bird.draw(bird_0)

  bird.fly_menu()

  ctx.drawImage(title, canvas.width/2 - 150, 80, 300, 80)
}

function working() {
  bird.fly_working()
  pipe.load()
  pipe.draw(pipe_up, pipe_down)
  bird.fly_state()
  bird.CD()
  score.draw_game()
}

function reload() {
  pipe.draw(pipe_up, pipe_down)
  bird.draw(bird_0)

  ctx.drawImage(game_over, canvas.width/2 - 150, canvas.height/2 - 160, 300, 70)

  score.draw_reload()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height + 100)

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

canvas.onclick = () => {
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

document.onkeydown = (e) => {
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
