img.load()

let game = new Game(0, 400, 600, 9.8)
canvas_load(game.width, game.height)
let score = new Score(0)
let land = new Land(0, canvas.width, true)
let pipe = new Pipe(90, canvas.height)
let bird = new Bird(70, 70, 140, canvas.height/2 - 35)

canvas.onmousedown = clickEvent
document.onkeydown = keydownEvent
canvas.ontouchend = clickEvent

window.requestAnimationFrame(draw)