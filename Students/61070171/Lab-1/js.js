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