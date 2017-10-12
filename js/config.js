let main = {
	state: 'menu'
}
let menu = {
	button: {
		text: '开始游戏',
		width: 200,
		height: 170
	}
}
let goBg = {
	view: [
		{ 
			width: 50,
			height: 100, 
			color: '#a56755', 
			type: 'tree', 
			position: { width: 1180, height: 530 },
			broken: false
		},
		{
			width: 12,
			height: 12,
			color: 'yellow',
			type: 'clock',
			position: { width: 1000,height: 100 },
			broken: false
		}
	]
}