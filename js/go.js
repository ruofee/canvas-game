function drawGo(ctx1, ctx2, width, height) {
	ctx1.clearRect(0,0,width,height)
	drawGoBox(ctx1, width, height)
	if (main.state == 'go') {
		drawGoBg(ctx2, width, height)
	}
}

function drawGoBox(ctx, width, height) {
	ctx.save()
	ctx.clearRect(hero.position.width - hero.r,hero.position.height - hero.r,hero.r*2,hero.r*2)

	drawBlood(ctx, width, height)
	drawSpeed(ctx, width, height)

	if ( main.state == 'ready' && hero.position.width < 200) {
		hero.position.width++
	} else {
		main.state = 'go'
	}
	if(hero.state == 'jump') {
		drawJump(ctx, width, height)
		console.log('drawJump')
	}

	ctx.beginPath()
	ctx.arc(hero.position.width,hero.position.height,hero.r,0,2*Math.PI)
	ctx.fill()
	ctx.closePath()

	ctx.restore()
}

function drawGoBg (ctx, width, height) {
	ctx.save()

	let date = new Date()
	let hour = date.getHours()

	for (let i = 0, j = goBg.view.length; i < j; i++) {
		if (goBg.view[i].type == 'tree') {
			drawTree(ctx, width, height, i)
		} else if (goBg.view[i].type == 'clock') {
			if (hour >= 6 && hour <= 18) {
        drawSun(ctx, width, height, i)
      } else {
        drawMoon(ctx, width, height, i)
      }
		}
	}

	ctx.restore()
}

function drawJump (ctx, width, height) {
	if (hero.jump.state == 'top') {
		if (hero.position.height > 513 - hero.jump.height) {
			hero.position.height--
		} else if (hero.position.height <= 513 - hero.jump.height) {
			hero.jump.state = 'bottom'
		}
	}
	if (hero.jump.state == 'bottom') {
		if (hero.position.height < 513) {
			hero.position.height++
		} else {
			hero.jump.state = 'end'
			hero.state = 'run'
		}
	}
}
function drawBlood (ctx, width, height) {
	let img = new Image()
	img.src = './images/game/blood.png'
	for (let i = 0, j = hero.blood; i < j; i++) {
		ctx.drawImage(img,20+(i*40),20,40,40)
	}
}
function drawSpeed (ctx, width, height) {
	let img = new Image()
	img.src = './images/game/speed.png'
	ctx.drawImage(img,200,20,40,40)
	ctx.beginPath()
	ctx.textAlign = 'end'
	ctx.font = '18px Lithos Pro'
	ctx.fillText(hero.speed,265,50)
	ctx.closePath()
}

function drawTree (ctx, width, height, i) {
	let treeXFirst = goBg.view[i].position.width-goBg.view[i].width
	let treeYFirst = goBg.view[i].position.height-goBg.view[i].height-2
	ctx.clearRect(treeXFirst-50+goBg.view[i].width/2,treeYFirst-50,goBg.view[i].width+100,goBg.view[i].height+50)
	ctx.closePath()
	if (goBg.view[i].position.width > 20) {
		goBg.view[i].position.width -= hero.speed
		} else {
		goBg.view[i].position.width = 1180
	}
	let treeXLast = goBg.view[i].position.width-goBg.view[i].width
	let treeYLast = goBg.view[i].position.height-goBg.view[i].height-2
	ctx.fillStyle = goBg.view[i].color
	ctx.beginPath()
	ctx.rect(treeXLast,treeYLast,goBg.view[i].width,goBg.view[i].height)
	ctx.fill()
	ctx.closePath()

	ctx.beginPath()
	ctx.fillStyle = 'green'
	ctx.arc(treeXLast+goBg.view[i].width/2,treeYLast,50,0,2*Math.PI)
	ctx.fill()
	console.log('tree have ok')
	ctx.closePath()	
}//画树
let drawSun = (ctx, width, height, i) => {
  ctx.save()
  ctx.strokeStyle = goBg.view[i].color
  ctx.lineWidth = '1'
  ctx.beginPath()
  ctx.arc(goBg.view[i].position.width,goBg.view[i].position.height,20,0,2*Math.PI)
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
  ctx.save()
  ctx.lineWidth = '3'
  ctx.strokeStyle = goBg.view[i].color
  ctx.translate(goBg.view[i].position.width,goBg.view[i].position.height)
  for (let i = 0; i < 12; i++) {
    ctx.rotate(1/6 * Math.PI)
    ctx.beginPath()
    ctx.lineTo(0,-23)
    ctx.lineTo(0,-40)
    ctx.stroke()
    ctx.closePath()
  }
  ctx.restore() 
}
let drawMoon = (ctx, width, height, i) => {
  ctx.save()
  ctx.strokeStyle = '#a3b0c3'
  ctx.lineWidth = '1'
  ctx.beginPath()
  ctx.arc(goBg.view[i].position.width,goBg.view[i].position.height,30,(3/2)*Math.PI,(3/4)*Math.PI)
  // ctx.arc(440,60,30,0,2*Math.PI)
  ctx.stroke()
  ctx.closePath()
  ctx.beginPath()
  ctx.arc(goBg.view[i].position.width-20,goBg.view[i].position.height-10,30,(3/2 + .27)*Math.PI,(1/2 + .02)*Math.PI)
  ctx.stroke()
  ctx.closePath()
  ctx.restore()
}