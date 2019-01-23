//Word Title
const word = document.querySelector('#word').innerHTML;
document.querySelector('#word').innerHTML = 'Hi!';
let word_length = word.length;
for (var i = 3; i < word_length; i++) {
	let time = i*75;
	let char = word[i];
	setTimeout(function(){
		document.querySelector('#word').innerHTML = document.querySelector('#word').innerHTML+char;
	},600+time);
}

//My Snow
const snows = [];
for (let i = 0; i < 100; i++) {
	let snow = document.createElement("div");
	snow.classList.add("snow");
	snow.style.background = "#FFFFFF";
	snow.style.left = `${Math.floor(Math.random()*100)}vw`;
	snow.style.top = `${Math.floor(Math.random()*100)}vh`;
	snow.style.transform = `scale(${Math.random()})`;
	snow.style.width = `${Math.random()}em`;
	snow.style.height = snow.style.width;
	snows.push(snow);
	document.body.append(snow);
}
snows.forEach((elementsnow, number) => {
	let to = {
		x: Math.random()*(number%2 === 0 ? -11 : 11),
		y: Math.random()*12
	}
	let animation = elementsnow.animate(
		[
			{ transform: "translate(0, 0)" },
			{ transform: `translate(${to.x}em, ${to.y}em)` }
		],
		{
		duration: (Math.random() + 1)*5000,
		direction: "alternate",
		fill: "both",
		iterations: Infinity,
		easing: "ease-in-out"
		}
	);
});

//Loading Page
var myTime;
function myFunction() {
	myTime = setTimeout(showPage, 500);
}
function showPage() {
	document.getElementById("load").style.display = "none";
	document.getElementById("main").style.display = "flex";
}
