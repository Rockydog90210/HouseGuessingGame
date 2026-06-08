placeGuess = document.getElementById('submitGuess') //button
episodeIndex = document.getElementById('episodeTitle') //placeholder where title goes
const episodeGuess = document.getElementById('episodeGuess') //imput
wrongOrRight = document.getElementById('wrongOrRight')
playAgain = document.getElementById('playAgain')

window.addEventListener('load',tryAgain);

function randomValueFromArray(array){
	const random = Math.floor(Math.random()*array.length);
	return array[random];
}

episodes = ['Season 1 Episode 1', 'Season 1 Episode 2','Season 1 Episode 3','Season 1 Episode 4','Season 1 Episode 5','Season 1 Episode 6','Season 1 Episode 7','Season 1 Episode 8','Season 1 Episode 9','Season 1 Episode 10','Season 1 Episode 11', 'Season 1 Episode 12', 'Season 1 Episode 13','Season 1 Episode 14','Season 1 Episode 15','Season 1 Episode 16','Season 1 Episode 17','Season 1 Episode 18', 'Season 1 Episode 19', 'Season 1 Episode 20','Season 1 Episode 21',]

placeGuess.addEventListener('click',check);
//placeGuess.addEventListener('',check) 
playAgain.addEventListener('click',tryAgain);
	


function tryAgain() {
	episodeX = randomValueFromArray(episodes);
	episodeIndex.textContent = episodeX;
	wrongOrRight.textContent = '';
	
}

function check() {
	
	if (episodeX == 'Season 1 Episode 1') {
		S1E1();
	} else if (episodeX == 'Season 1 Episode 2'){
		S1E2();
	} else if (episodeX == 'Season 1 Episode 3'){
		S1E3();
	} else if (episodeX == 'Season 1 Episode 4') {
		S1E4();
	} else if (episodeX == 'Season 1 Episode 5') {
		S1E5();
	} else if (episodeX == 'Season 1 Episode 6') {
		S1E6();
	} else if (episodeX == 'Season 1 Episode 7') {
		S1E7();
	} else if (episodeX =='Season 1 Episode 8') {
		S1E8();
	} else if (episodeX == 'Season 1 Episode 9') {
		S1E9();
	} else if (episodeX == 'Season 1 Episode 10') {
		S1E10();
	} else if (episodeX == 'Season 1 Episode 11') {
		S1E11();
	} else if (episodeX == 'Season 1 Episode 12') {
		S1E12();
	} else if (episodeX == 'Season 1 Episode 13') {
		S1E13();
	} else if (episodeX == 'Season 1 Episode 14') {
		S1E14();
	} else if (episodeX == 'Season 1 Episode 15') {
		S1E15();
	} else if (episodeX == 'Season 1 Episode 16') {
		S1E16();
	} else if (episodeX == 'Season 1 Episode 17') {
		S1E17();
	} else if (episodeX == 'Season 1 Episode 18') {
		S1E18();
	} else if (episodeX == 'Season 1 Episode 19') {
		S1E19();
	} else if (episodeX == 'Season 1 Episode 20') {
		S1E20();
	} else if (episodeX == 'Season 1 Episode 21') {
		S1E21();
	} 

	
}

function S1E1(){
	if (episodeGuess.value == 'Pilot') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'pilot'){
		wrongOrRight.textContent = 'wrong - Pilot';
		wrongOrRight.style.color = 'red';
	}
}

function S1E2(){
	if (episodeGuess.value == 'Paternity') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		
	} else if (episodeGuess.value !== 'Paternity') {
		wrongOrRight.textContent = 'wrong - Paternity';
		wrongOrRight.style.color = 'red';
	}
}

function S1E3(){
	if (episodeGuess.value == "Occam's Razor") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== "Occam's Razor"){
		wrongOrRight.textContent = "Wrong - Occam's Razor";
		wrongOrRight.style.color = 'red';
	}
}

function S1E4(){
	if (episodeGuess.value == 'Maternity') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Maternity'){
		wrongOrRight.textContent = 'wrong - Maternity';
		wrongOrRight.style.color = 'red';
	}
}

function S1E5(){
	if (episodeGuess.value == 'Dammed If You Do') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Dammed If You Do'){
		wrongOrRight.textContent = 'wrong - Dammed If You Do';
		wrongOrRight.style.color = 'red';
	}
}

function S1E6(){
	if (episodeGuess.value == 'The Socratic Method') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'The Socratic Method'){
		wrongOrRight.textContent = 'wrong - The Socratic Method';
		wrongOrRight.style.color = 'red';
	}
}

function S1E7(){
	if (episodeGuess.value == 'Fidelity') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Fidelity'){
		wrongOrRight.textContent = 'wrong - Fidelity';
		wrongOrRight.style.color = 'red';
	}
}
function S1E8(){
	if (episodeGuess.value == 'Posion') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Posion'){
		wrongOrRight.textContent = 'wrong - Posion';
		wrongOrRight.style.color = 'red';
	}
}
function S1E9(){
	if (episodeGuess.value == 'DNR') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'DNR'){
		wrongOrRight.textContent = 'wrong - DNR';
		wrongOrRight.style.color = 'red';
	}
}

function S1E10(){
	if (episodeGuess.value == 'Histories') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Histories'){
		wrongOrRight.textContent = 'wrong - Histories';
		wrongOrRight.style.color = 'red';
	}
}
function S1E11(){
	if (episodeGuess.value == 'Detox') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Detox'){
		wrongOrRight.textContent = 'wrong - Detox';
		wrongOrRight.style.color = 'red';
	}
}
function S1E12(){
	if (episodeGuess.value == 'Sports Medicine') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Sports Medicine'){
		wrongOrRight.textContent = 'wrong - Sports Medicine';
		wrongOrRight.style.color = 'red';
	}
}
function S1E13(){
	if (episodeGuess.value == 'Cursed') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Cursed'){
		wrongOrRight.textContent = 'wrong - Cursed';
		wrongOrRight.style.color = 'red';
	}
}
function S1E14(){
	if (episodeGuess.value == 'Control') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Control'){
		wrongOrRight.textContent = 'wrong - Control';
		wrongOrRight.style.color = 'red';
	}
}
function S1E15(){
	if (episodeGuess.value == 'Mob Rules') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Mob Rules'){
		wrongOrRight.textContent = 'wrong - Mob Rules';
		wrongOrRight.style.color = 'red';
	}
}

function S1E16(){
	if (episodeGuess.value == 'Heavy') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Heavy'){
		wrongOrRight.textContent = 'wrong - Heavy';
		wrongOrRight.style.color = 'red';
	}
}
function S1E17(){
	if (episodeGuess.value == 'Role Model') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Role Model'){
		wrongOrRight.textContent = 'wrong - Role Model';
		wrongOrRight.style.color = 'red';
	}
}
function S1E18(){
	if (episodeGuess.value == 'Babies & Bathwater') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Babies & Bathwater'){
		wrongOrRight.textContent = 'wrong - Babies & Bathwater';
		wrongOrRight.style.color = 'red';
	}
}
function S1E19(){
	if (episodeGuess.value == 'Kids') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Kids'){
		wrongOrRight.textContent = 'wrong - Kids';
		wrongOrRight.style.color = 'red';
	}
}
function S1E20(){
	if (episodeGuess.value == 'Love Hurts') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Love Hurts'){
		wrongOrRight.textContent = 'wrong - Love Hurts';
		wrongOrRight.style.color = 'red';
	}
}
function S1E21(){
	if (episodeGuess.value == 'Three Stories') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Three Stories'){
		wrongOrRight.textContent = 'wrong - Three Stories';
		wrongOrRight.style.color = 'red';
	}
}
function S1E22(){
	if (episodeGuess.value == 'Honeymoon') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
	} else if (episodeGuess.Value !== 'Honeymoon'){
		wrongOrRight.textContent = 'wrong - Honeymoon';
		wrongOrRight.style.color = 'red';
	}
}