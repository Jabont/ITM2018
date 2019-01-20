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

//coming soon alert
function myFuncalert() {
	alert("Coming Soon!!");
}

//My Snow
const colors = ["#FFFFFF"];

const numSnows = 100;
const snows = [];

for (let i = 0; i < numSnows; i++) {
	let snow = document.createElement("div");
	snow.classList.add("snow");
	snow.style.background = colors[Math.floor(Math.random() * colors.length)];
	snow.style.left = `${Math.floor(Math.random() * 100)}vw`;
	snow.style.top = `${Math.floor(Math.random() * 100)}vh`;
	snow.style.transform = `scale(${Math.random()})`;
	snow.style.width = `${Math.random()}em`;
	snow.style.height = snow.style.width;

	snows.push(snow);
	document.body.append(snow);
}

snows.forEach((el, i, ra) => {
	let to = {
		x: Math.random() * (i % 2 === 0 ? -11 : 11),
		y: Math.random() * 12
	}

	let anim = el.animate(
		[
			{ transform: "translate(0, 0)" },
			{ transform: `translate(${to.x}rem, ${to.y}rem)` }
		],
		{
		duration: (Math.random() + 1) * 2000,
		direction: "alternate",
		fill: "both",
		iterations: Infinity,
		easing: "ease-in-out"
		}
	);
});
