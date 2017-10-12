function drawMenu (ctx1, ctx2, width, height) {
	drawButton(ctx1, width, height)
	drawMenuBg(ctx2, width, height)
}

function drawButton (ctx, width, height) {
	ctx.save()

	let img = new Image()
	img.src = './images/button/menu-button.png'
	img.onload = () => {
		ctx.drawImage(img,width/2-menu.button.width/2,height/2-menu.button.height/2,menu.button.width,menu.button.height)

		ctx.beginPath()
		ctx.font = '23px 幼圆'
		ctx.fillStyle = '#030303'
		ctx.fillText(menu.button.text,width/2-40,height/2+10)
		ctx.closePath()
	}

	ctx.restore()
}

function drawMenuBg(ctx, width, height) {
	ctx.save()

	ctx.beginPath()
	ctx.lineWidth = '4'
	ctx.lineTo(20,height-20)
	ctx.lineTo(width-20,height-20)
	ctx.stroke()
	ctx.closePath()

	ctx.restore()
}