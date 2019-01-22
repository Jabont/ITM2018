const cover = document.getElementById("cover");
const word = document.querySelector('#word').innerHTML;
const boxList = []
const toneList = ["Red", "Green", "Blue"]

/*
 * Colorize box
 * Class for create a colorful box for display
 * Author: Woramat Ngamkham
 *
 */
class ColorizeBox {
	constructor(id, width, height, color) {
		this.element = document.createElement("div")
		this.element.id = "_box_" + id
		this.element.className = "colorize_box"
		this.element.style.width = width + "%"
		this.element.style.height = height + "%"
		this.element.style.backgroundColor = color
		this.element.style.float = "left"
		this.element.style.zIndex = -100
	}

	getBox() {
		return this.element
	}

	getId() {
		return this.element.id
	}

	getHeight() {
		let height = this.element.style.height
		return Number(height.slice(0, height.length - 1))
	}

	getWidth() {
		let width = this.element.style.width
		return Number(width.slice(0, width.length - 1))
	}

	setHeight(height) {
		this.element.style.height = typeof height === 'string' ? height : height + "%"
	}

	setWidth(width) {
		this.element.style.width = typeof width === 'string' ? width : width + "%"
	}

	setColor(color) {
		this.element.style.backgroundColor = color
	}
}

function randomColor(tone="Red") {
	colorCode = "0123456789ABCDEF"
	color = "#"
	for (let i = 0; i < 3; i++) {
		if (i == 0 && tone === "Red") {
			color += "F" + colorCode[Math.floor(Math.random() * 16)]
		} else if (i == 1 && tone === "Green") {
			color += (Math.random() >= 0.5 ? "F" : "E") + colorCode[Math.floor(Math.random() * 16)]
		} else if (i == 2 && tone === "Blue") {
			color += "F" + colorCode[Math.floor(Math.random() * 16)]
		} else {
			color += colorCode[Math.max(2, Math.floor(Math.random() * 13))] + colorCode[Math.floor(Math.random() * 16)]
		}
	}
	return color
}

function createBox(element, id, min_width=1.4, tone) {
	let width = Math.max(min_width, Math.random() * 7.8)
	let height = Math.random() * 100
	let box = new ColorizeBox(id, width, height, randomColor(tone))

	element.appendChild(box.getBox())
	return box
}

function doItForEver() {
	setTimeout(function () {
		let heightList = boxList.map(box => box.getHeight())
		let max_height = Math.max.apply(null, heightList)
		let min_height = Math.min.apply(null, heightList)
		boxList.forEach((box) => {
			let height = box.getHeight()
			let bias = (height - min_height) / (max_height - min_height)
			let diff = Math.random() >= 0.5 - (bias / 100) ? Math.sin((Math.random() * 45)) : Math.sin((Math.random() * -45))
			box.setHeight(box.getHeight() + diff)
			cover.replaceChild(box.getBox(), document.getElementById(box.getId()))
		})
		doItForEver()
	}, 50)
}

function running(element, tone="Red") {
	for (let i = 0; i <= 100; i++) {
		boxList.push(createBox(element, i, 1.4, tone))
	}

	if (document.getElementById('script').getAttribute('data-loopback') === "true") {
		doItForEver()
	}
}

window.onload = function () {
	/* URL Building */
	let url_str = window.location.href
	let url = new URL(url_str)
	const tone = url.searchParams.get("tone") != null && toneList.includes(url.searchParams.get("tone")) ? 
		         url.searchParams.get("tone") : toneList[Math.floor(Math.random() * 3)]

	/* Body Color */
	document.body.style.backgroundColor = tone === "Red" ? "#FFEAEA" : 
										  tone === "Blue" ? "#EAFAEF" : 
										  tone === "Green" ? "#E3FFE3" : "#FAFAFA"
	
	/* Button Color & Link */
	let see_more = document.getElementById("see-more")
	see_more.onmouseover = function () {
		this.style.backgroundColor = tone
	}
	see_more.onmouseout = function () {
		this.style.backgroundColor = "black"
	}
	if (see_more.getAttribute("href") == "./mywork/mywork.html") {
		see_more.href += "?tone=" + tone
	}

	/* Loopback on animation */
	let loopback = document.getElementById('script').getAttribute('data-loopback')
	if (loopback === "true") {
		document.querySelector('#word').innerHTML = 'Hi!';
		let word_length = word.length;
		for (var i = 3; i < word_length; i++) {
			var time = i*75;
			let char = word[i];
			setTimeout(function(){
				document.querySelector('#word').innerHTML = document.querySelector('#word').innerHTML + char;
			}, 600+time);
		}

		setTimeout(function() {
			running(cover, tone)
		}, 675 + time)
	} else {
		running(cover, tone)
	}
}