window.onload = index

let c1 = document.getElementById('myCanvas1')
let c2 = document.getElementById('myCanvas2')
let ctx1 = c1.getContext('2d')
let ctx2 = c2.getContext('2d')
let width = c1.width
let height = c1.height

function index () {
  if (main.state == 'menu') drawMenu(ctx1, ctx2, width, height)
  if (main.state == 'ready') drawGo(ctx1, ctx2, width, height)
  if (main.state == 'go') drawGo(ctx1, ctx2, width, height)
  window.requestAnimationFrame(index)
}

document.onkeydown = function (e) {
  if (main.state == 'menu') {
   if (e.keyCode == 13) {
     main.state = 'ready'
   }
  }
  if (main.state == 'go') {
    if (e.keyCode == '38') {
      if (hero.state == 'run') {
        hero.state = 'jump'
        hero.jump.state = 'top'
      }
    }
    if (e.keyCode == '37') {
      if (hero.position.width > 20) {
        hero.position.width--
      }
    }
    if (e.keyCode == '39') {
      if (hero.position.width < width - 20) {
        hero.position.width++
      }
    }
  }
}//top 38 bottom 40 left 37 right 39
