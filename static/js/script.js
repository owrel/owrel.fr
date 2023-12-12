let i = 0;
let timer;


function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			setTimeout(deletingEffect, 1500);
			return false;
		};
		timer = setTimeout(loopTyping, randint(100,500));
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, randint(50,200));
	};
	loopDeleting();
};

deletingEffect();
