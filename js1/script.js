

function removeTransition(e){
	if(e.propertyName != 'transform') return;
	e.target.classList.remove('playing');
}

function playSound(e){
	let a = 'audio[data-key="'+e.keyCode+'"]';
	let k = 'div[data-key="'+e.keyCode+'"]'
	const audio = document.querySelector(a);
	const key = document.querySelector(k);

	if(!audio)
		return;

	console.log(audio);

	key.classList.add('playing');
	audio.currentTime= 0;
	audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound);