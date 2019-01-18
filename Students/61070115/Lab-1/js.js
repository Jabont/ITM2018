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
const word2 = document.querySelector('#word2').innerHTML;
document.querySelector('#word2').innerHTML = 'These';
let word2_length = word2.length;
for (var i = 5; i < word2_length; i++) {
	let time = i*75;
	let char = word2[i];
	setTimeout(function(){
		document.querySelector('#word2').innerHTML = document.querySelector('#word2').innerHTML+char;
	},600+time);
}