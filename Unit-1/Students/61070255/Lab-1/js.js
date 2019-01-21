const word = document.querySelector('#word').innerHTML;
document.querySelector('#word').innerHTML = 'Hi!';
let word_length = word.length;
for (var i = 3; i < word_length; i++) {
	let time = i*75;
	let char = word[i];
	setTimeout(function(){
		document.querySelector('#word').innerHTML = document.querySelector('#word').innerHTML+char;
	},time);
}
const you = document.querySelector('#you').innerHTML;
document.querySelector('#you').innerHTML = "";
let you_length = you.length;
for (var i = 0; i < you_length; i++) {
	let time = i*10;
	let char = you[i];
	setTimeout(function(){
		document.querySelector('#you').innerHTML = document.querySelector('#you').innerHTML+char;
	},1500+time);
}
