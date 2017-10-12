function bgAdd (bg) {
	if (bg < 2) {
		bg++
	} else {
		bg = 0
	}
	return bg
}
function bgMinus (bg) {
	if (bg < 1) {
		bg = 2
	} else {
		bg--
	}
	return bg
}