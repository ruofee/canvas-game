function menu() {
  bird.draw(bird_0)

  if (bird.menu_state) {
    if (bird.y > canvas.height/2 - 40) {
      bird.y = bird.y - 0.7
    } else {
      bird.menu_state = 0
    }
  } else {
    if (bird.y < canvas.height/2 - 30) {
      bird.y = bird.y + 0.7
    } else {
      bird.menu_state = 1
    }
  }

  ctx.drawImage(title, canvas.width/2 - 150, 80, 300, 80)
}

function working() {
  if (bird.state <= 10 && bird.state >= 1) {
    bird.state++
  } else {
    bird.state = 1
  }

  bird.fly()

  pipe.load()
  pipe.draw(pipe_up, pipe_down)

  if (bird.state <= 5 && bird.state >= 1) {
    bird.draw(bird_1)
  } else {
    bird.draw(bird_2)
  }

  //碰撞检测
  let a = bird.x + bird.width/2
  let b = bird.y
  let c = bird.y + bird.height
  if ((a <= pipe.pipe_down.x + pipe.width && a >=  pipe.pipe_down.x && b <=  pipe.pipe_down.y - 10 + pipe.height && b >= 0) || (a <=  pipe.pipe_up.x + pipe.width && a >=  pipe.pipe_up.x && c <= canvas.height && c >=  pipe.pipe_up.y + 10)) {
    bird.over()
  }

  if (score.value < 10) {
    switch (score.value) {
      case 0: score.draw_one(num_0)
              break
      case 1: score.draw_one(num_1)
              break
      case 2: score.draw_one(num_2)
              break
      case 3: score.draw_one(num_3)
              break
      case 4: score.draw_one(num_4)
              break
      case 5: score.draw_one(num_5)
              break
      case 6: score.draw_one(num_6)
              break
      case 7: score.draw_one(num_7)
              break
      case 8: score.draw_one(num_8)
              break
      case 9: score.draw_one(num_9)
              break
    }
  } else if (score.value < 100) {
    let x = parseInt(score.value/10)
    let y = score.value % 10
    switch (x) {
      case 0: score.draw_two(num_0)
              break
      case 1: score.draw_two(num_1)
              break
      case 2: score.draw_two(num_2)
              break
      case 3: score.draw_two(num_3)
              break
      case 4: score.draw_two(num_4)
              break
      case 5: score.draw_two(num_5)
              break
      case 6: score.draw_two(num_6)
              break
      case 7: score.draw_two(num_7)
              break
      case 8: score.draw_two(num_8)
              break
      case 9: score.draw_two(num_9)
              break
    }
    switch (y) {
      case 0: score.draw_three(num_0)
              break
      case 1: score.draw_three(num_1)
              break
      case 2: score.draw_three(num_2)
              break
      case 3: score.draw_three(num_3)
              break
      case 4: score.draw_three(num_4)
              break
      case 5: score.draw_three(num_5)
              break
      case 6: score.draw_three(num_6)
              break
      case 7: score.draw_three(num_7)
              break
      case 8: score.draw_three(num_8)
              break
      case 9: score.draw_three(num_9)
              break
    }
  }
}

function reload() {
  pipe.draw(pipe_up, pipe_down)
  bird.draw(bird_0)

  ctx.drawImage(game_over, canvas.width/2 - 150, canvas.height/2 - 160, 300, 70)

  if (score.value < 10) {
    switch (score.value) {
      case 0: score.draw_four(num_0)
              break
      case 1: score.draw_four(num_1)
              break
      case 2: score.draw_four(num_2)
              break
      case 3: score.draw_four(num_3)
              break
      case 4: score.draw_four(num_4)
              break
      case 5: score.draw_four(num_5)
              break
      case 6: score.draw_four(num_6)
              break
      case 7: score.draw_four(num_7)
              break
      case 8: score.draw_four(num_8)
              break
      case 9: score.draw_four(num_9)
              break
    }
  } else if (score.value < 100) {
    let x = parseInt(score.value/10)
    let y = score.value % 10
    switch (x) {
      case 0: score.draw_five(num_0)
              break
      case 1: score.draw_five(num_1)
              break
      case 2: score.draw_five(num_2)
              break
      case 3: score.draw_five(num_3)
              break
      case 4: score.draw_five(num_4)
              break
      case 5: score.draw_five(num_5)
              break
      case 6: score.draw_five(num_6)
              break
      case 7: score.draw_five(num_7)
              break
      case 8: score.draw_five(num_8)
              break
      case 9: score.draw_five(num_9)
              break
    }
    switch (y) {
      case 0: score.draw_six(num_0)
              break
      case 1: score.draw_six(num_1)
              break
      case 2: score.draw_six(num_2)
              break
      case 3: score.draw_six(num_3)
              break
      case 4: score.draw_six(num_4)
              break
      case 5: score.draw_six(num_5)
              break
      case 6: score.draw_six(num_6)
              break
      case 7: score.draw_six(num_7)
              break
      case 8: score.draw_six(num_8)
              break
      case 9: score.draw_six(num_9)
              break
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height + 100)

  if (land.load) {
    {
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
  }

  switch (game.state) {
    case 0: menu()
            break
    case 1: working()
            break
    case 2: reload()
            break
  }

  ctx.drawImage(land1, land.land1, canvas.height - 60, 400, 60)
  ctx.drawImage(land2, land.land2, canvas.height - 60, 400, 60)

  window.requestAnimationFrame(draw)
}

canvas.onclick = () => {
  if (game.state == 0) {
    game.state = 1
    bird.state = 1
    time = 0
    a = setInterval(() => {
      time = time + 0.001
    }, 1)
  } else if (game.state == 1){
    bird.jump = 1
    bird.v = -10
    bird.time = time
  } else if (game.state == 2) {
    time = 0
    game.state = 1
    bird.reload()

    a = setInterval(() => {
      time = time + 0.001
    }, 1)
  }
}

document.onkeydown = (e) => {
  if (e.keyCode == 32 && game.state == 0) {
    game.state = 1
    bird.state = 1
    time = 0
    a = setInterval(() => {
      time = time + 0.001
    }, 1)
  } else if (e.keyCode == 32 && game.state == 1){
    bird.jump = 1
    bird.v = -10
    bird.time = time
  } else if (e.keyCode == 32 && game.state == 2) {
    time = 0
    game.state = 1
    bird.reload()

    a = setInterval(() => {
      time = time + 0.001
    }, 1)
  }
}
