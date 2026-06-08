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

episodes = ['Season 1 Episode 1', 'Season 1 Episode 2','Season 1 Episode 3','Season 1 Episode 4','Season 1 Episode 5','Season 1 Episode 6','Season 1 Episode 7','Season 1 Episode 8','Season 1 Episode 9','Season 1 Episode 10','Season 1 Episode 11', 'Season 1 Episode 12', 'Season 1 Episode 13','Season 1 Episode 14','Season 1 Episode 15','Season 1 Episode 16','Season 1 Episode 17','Season 1 Episode 18', 'Season 1 Episode 19', 'Season 1 Episode 20','Season 1 Episode 21','Season 2 Episode 1', 'Season 2 Episode 2', 'Season 2 Episode 3', 'Season 2 Episode 4', 'Season 2 Episode 5', 'Season 2 Episode 6', 'Season 2 Episode 7', 'Season 2 Episode 8', 'Season 2 Episode 9', 'Season 2 Episode 10', 'Season 2 Episode 11', 'Season 2 Episode 12', 'Season 2 Episode 13', 'Season 2 Episode 14', 'Season 2 Episode 15', 'Season 2 Episode 16', 'Season 2 Episode 17', 'Season 2 Episode 18', 'Season 2 Episode 19', 'Season 2 Episode 20', 'Season 2 Episode 21', 'Season 2 Episode 21', 'Season 2 Episode 22', 'Season 2 Episode 23', 'Season 2 Episode 23', 'Season 2 Episode 24', 'Season 3 Episode 1', 'Season 3 Episode 2', 'Season 3 Episode 3', 'Season 3 Episode 4', 'Season 3 Episode 5', 'Season 3 Episode 6', 'Season 3 Episode 7', 'Season 3 Episode 8', 'Season 3 Episode 9', 'Season 3 Episode 10', 'Season 3 Episode 11', 'Season 3 Episode 12', 'Season 3 Episode 13', 'Season 3 Episode 14', 'Season 3 Episode 15', 'Season 3 Episode 16', 'Season 3 Episode 17', 'Season 3 Episode 18', 'Season 3 Episode 19', 'Season 3 Episode 20', 'Season 3 Episode 21', 'Season 3 Episode 22', 'Season 3 Episode 23', 'Season 3 Episode 24', 'Season 4 Episode 1', 'Season 4 Episode 2', 'Season 4 Episode 3', 'Season 4 Episode 4', 'Season 4 Episode 5', 'Season 4 Episode 6', 'Season 4 Episode 7', 'Season 4 Episode 8', 'Season 4 Episode 9', 'Season 4 Episode 10', 'Season 4 Episode 11', 'Season 4 Episode 12', 'Season 4 Episode 13', 'Season 4 Episode 14', 'Season 4 Episode 15', 'Season 4 Episode 16', 'Season 5 Episode 1', 'Season 5 Episode 2', 'Season 5 Episode 3', ]

placeGuess.addEventListener('click',check);
//placeGuess.addEventListener('',check) 
playAgain.addEventListener('click',tryAgain);
	


function tryAgain() {
	episodeX = randomValueFromArray(episodes);
	episodeIndex.textContent = episodeX;
	wrongOrRight.textContent = '';
	document.getElementById('housePNG').src = "houseNet.png";
	episodeGuess.value = '';
	
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
	} else if (episodeX == 'Season 2 Episode 1') {
		S2E1();
	} else if (episodeX == 'Season 2 Episode 2') {
		S2E2();
	} else if (episodeX == 'Season 2 Episode 3') {
		S2E3();
	} else if (episodeX == 'Season 2 Episode 4') {
		S2E4();
	} else if (episodeX == 'Season 2 Episode 5') {
		S2E5();
	} else if (episodeX == 'Season 2 Episode 6') {
		S2E6();
	} else if (episodeX == 'Season 2 Episode 7') {
		S2E7();
	} else if (episodeX == 'Season 2 Episode 8') {
		S2E8();
	} else if (episodeX == 'Season 2 Episode 9') {
		S2E9();
	} else if (episodeX == 'Season 2 Episode 10') {
		S2E10();
	} else if (episodeX == 'Season 2 Episode 11') {
		S2E11();
	} else if (episodeX == 'Season 2 Episode 12') {
		S2E12();
	} else if (episodeX == 'Season 2 Episode 13') {
		S2E13();
	} else if (episodeX == 'Season 2 Episode 14') {
		S2E14();
	} else if (episodeX == 'Season 2 Episode 15') {
		S2E15();
	} else if (episodeX == 'Season 2 Episode 16') {
		S2E16();
	} else if (episodeX == 'Season 2 Episode 17') {
		S2E17();
	} else if (episodeX == 'Season 2 Episode 18') {
		S2E18();
	} else if (episodeX == 'Season 2 Episode 19') {
		S2E19();
	} else if (episodeX == 'Season 2 Episode 20') {
		S2E20();
	} else if (episodeX == 'Season 2 Episode 21') {
		S2E21();
	} else if (episodeX == 'Season 2 Episode 22') {
		S2E22();
	} else if (episodeX == 'Season 2 Episode 23') {
		S2E23();
	} else if (episodeX == 'Season 2 Episode 24') {
		S2E24();
	} else if (episodeX =='Season 3 Episode 1') {
		S3E1();
	} else if (episodeX =='Season 3 Episode 2') {
		S3E2();
	} else if (episodeX =='Season 3 Episode 3') {
		S3E3();
	} else if (episodeX =='Season 3 Episode 4') {
		S3E4();
	} else if (episodeX =='Season 3 Episode 5') {
		S3E5();
	} else if (episodeX =='Season 3 Episode 6') {
		S3E6();
	} else if (episodeX =='Season 3 Episode 7') {
		S3E7();
	} else if (episodeX =='Season 3 Episode 8') {
		S3E8();
	} else if (episodeX =='Season 3 Episode 9') {
		S3E9();
	} else if (episodeX =='Season 3 Episode 10') {
		S3E10();
	} else if (episodeX =='Season 3 Episode 11') {
		S3E11();
	} else if (episodeX =='Season 3 Episode 12') {
		S3E12();
	} else if (episodeX =='Season 3 Episode 13') {
		S3E13();
	} else if (episodeX =='Season 3 Episode 14') {
		S3E14();
	} else if (episodeX =='Season 3 Episode 15') {
		S3E15();
	} else if (episodeX =='Season 3 Episode 16') {
		S3E16();
	} else if (episodeX =='Season 3 Episode 17') {
		S3E17();
	} else if (episodeX =='Season 3 Episode 18') {
		S3E18();
	} else if (episodeX =='Season 3 Episode 19') {
		S3E19();
	} else if (episodeX =='Season 3 Episode 20') {
		S3E20();
	} else if (episodeX =='Season 3 Episode 21') {
		S3E21();
	} else if (episodeX =='Season 3 Episode 22') {
		S3E22();
	} else if (episodeX =='Season 3 Episode 23') {
		S3E23();
	} else if (episodeX =='Season 3 Episode 24') {
		S3E24();
	} else if (episodeX =='Season 4 Episode 1') {
		S4E1();
	} else if (episodeX =='Season 4 Episode 2') {
		S4E2();
	} else if (episodeX =='Season 4 Episode 3') {
		S4E3();
	} else if (episodeX =='Season 4 Episode 4') {
		S4E4();
	} else if (episodeX =='Season 4 Episode 5') {
		S4E5();
	} else if (episodeX =='Season 4 Episode 6') {
		S4E6();
	} else if (episodeX =='Season 4 Episode 7') {
		S4E7();
	} else if (episodeX =='Season 4 Episode 8') {
		S4E8();
	} else if (episodeX =='Season 4 Episode 9') {
		S4E9();
	} else if (episodeX =='Season 4 Episode 10') {
		S4E10();
	} else if (episodeX =='Season 4 Episode 11') {
		S4E11();
	} else if (episodeX =='Season 4 Episode 12') {
		S4E12();
	} else if (episodeX =='Season 4 Episode 13') {
		S4E13();
	} else if (episodeX =='Season 4 Episode 14') {
		S4E14();
	} else if (episodeX =='Season 4 Episode 15') {
		S4E15();
	} else if (episodeX =='Season 4 Episode 16') {
		S4E16();
	} else if (episodeX =='Season 5 Episode 1') {
		S5E1();
	} else if (episodeX =='Season 5 Episode 2') {
		S5E2();
	} else if (episodeX =='Season 5 Episode 3') {
		S5E3();
	}





	
}

function S1E1(){
	if (episodeGuess.value == 'Pilot') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'pilot'){
		wrongOrRight.textContent = 'wrong - Pilot';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E2(){
	if (episodeGuess.value == 'Paternity') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
		
	} else if (episodeGuess.value !== 'Paternity') {
		wrongOrRight.textContent = 'wrong - Paternity';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E3(){
	if (episodeGuess.value == "Occam's Razor") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "Occam's Razor"){
		wrongOrRight.textContent = "Wrong - Occam's Razor";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E4(){
	if (episodeGuess.value == 'Maternity') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Maternity'){
		wrongOrRight.textContent = 'wrong - Maternity';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E5(){
	if (episodeGuess.value == 'Damned If You Do') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Damned If You Do'){
		wrongOrRight.textContent = 'wrong - Damned If You Do';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E6(){
	if (episodeGuess.value == 'The Socratic Method') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'The Socratic Method'){
		wrongOrRight.textContent = 'wrong - The Socratic Method';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E7(){
	if (episodeGuess.value == 'Fidelity') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Fidelity'){
		wrongOrRight.textContent = 'wrong - Fidelity';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E8(){
	if (episodeGuess.value == 'Posion') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Posion'){
		wrongOrRight.textContent = 'wrong - Posion';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E9(){
	if (episodeGuess.value == 'DNR') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'DNR'){
		wrongOrRight.textContent = 'wrong - DNR';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E10(){
	if (episodeGuess.value == 'Histories') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Histories'){
		wrongOrRight.textContent = 'wrong - Histories';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E11(){
	if (episodeGuess.value == 'Detox') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Detox'){
		wrongOrRight.textContent = 'wrong - Detox';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E12(){
	if (episodeGuess.value == 'Sports Medicine') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Sports Medicine'){
		wrongOrRight.textContent = 'wrong - Sports Medicine';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E13(){
	if (episodeGuess.value == 'Cursed') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Cursed'){
		wrongOrRight.textContent = 'wrong - Cursed';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E14(){
	if (episodeGuess.value == 'Control') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Control'){
		wrongOrRight.textContent = 'wrong - Control';
		wrongOrRight.style.color = 'red';
	}
}
function S1E15(){
	if (episodeGuess.value == 'Mob Rules') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Mob Rules'){
		wrongOrRight.textContent = 'wrong - Mob Rules';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S1E16(){
	if (episodeGuess.value == 'Heavy') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Heavy'){
		wrongOrRight.textContent = 'wrong - Heavy';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E17(){
	if (episodeGuess.value == 'Role Model') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Role Model'){
		wrongOrRight.textContent = 'wrong - Role Model';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E18(){
	if (episodeGuess.value == 'Babies & Bathwater') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Babies & Bathwater'){
		wrongOrRight.textContent = 'wrong - Babies & Bathwater';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E19(){
	if (episodeGuess.value == 'Kids') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Kids'){
		wrongOrRight.textContent = 'wrong - Kids';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E20(){
	if (episodeGuess.value == 'Love Hurts') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Love Hurts'){
		wrongOrRight.textContent = 'wrong - Love Hurts';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E21(){
	if (episodeGuess.value == 'Three Stories') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Three Stories'){
		wrongOrRight.textContent = 'wrong - Three Stories';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S1E22(){
	if (episodeGuess.value == 'Honeymoon') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Honeymoon'){
		wrongOrRight.textContent = 'wrong - Honeymoon';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E1(){
	if (episodeGuess.value == 'Acceptance') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Acceptance'){
		wrongOrRight.textContent = 'wrong - Acceptance';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E2(){
	if (episodeGuess.value == 'Autopsy') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Autopsy'){
		wrongOrRight.textContent = 'wrong - Autopsy';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E3(){
	if (episodeGuess.value == 'Humpty Dumpty') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Humpty Dumpty'){
		wrongOrRight.textContent = 'wrong - Humpty Dumpty';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E4(){
	if (episodeGuess.value == 'TB or Not TB') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'TB or Not TB'){
		wrongOrRight.textContent = 'wrong - TB or Not TB';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E5(){
	if (episodeGuess.value == "Daddy's Boy") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "Daddy's Boy"){
		wrongOrRight.textContent = "wrong - Daddy's Boy";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E6(){
	if (episodeGuess.value == 'Spin') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Spin'){
		wrongOrRight.textContent = 'wrong - Spin';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E7(){
	if (episodeGuess.value == 'Hunting') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Hunting'){
		wrongOrRight.textContent = 'wrong - Hunting';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E8(){
	if (episodeGuess.value == 'The Mistake') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'The Mistake'){
		wrongOrRight.textContent = 'wrong - The Mistake';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E9(){
	if (episodeGuess.value == 'Deception') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Deception'){
		wrongOrRight.textContent = 'wrong - Deception';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E10(){
	if (episodeGuess.value == 'Failure to Communicate') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Failure to Communicate'){
		wrongOrRight.textContent = 'wrong - Failure to Communicate';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E11(){
	if (episodeGuess.value == 'Need to Know') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Need to Know'){
		wrongOrRight.textContent = 'wrong - Need to Know';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E12(){
	if (episodeGuess.value == 'Distractions') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Distractions'){
		wrongOrRight.textContent = 'wrong - Distractions';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E13(){
	if (episodeGuess.value == 'Skin Deep') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Skin Deep'){
		wrongOrRight.textContent = 'wrong - Skin Deep';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E14(){
	if (episodeGuess.value == 'Sex Kills') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Sex Kills'){
		wrongOrRight.textContent = 'wrong - Sex Kills';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E15(){
	if (episodeGuess.value == 'Clueless') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Clueless'){
		wrongOrRight.textContent = 'wrong - Clueless';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E16(){
	if (episodeGuess.value == 'Safe') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Safe'){
		wrongOrRight.textContent = 'wrong - Safe';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E17(){
	if (episodeGuess.value == 'All In') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'All In'){
		wrongOrRight.textContent = 'wrong - All In';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E18(){
	if (episodeGuess.value == 'Sleeping Dogs Lie') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Sleeping Dogs Lie'){
		wrongOrRight.textContent = 'wrong - Sleeping Dogs Lie';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E19(){
	if (episodeGuess.value == 'House vs. God') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'House vs. God'){
		wrongOrRight.textContent = 'wrong - House vs. God';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E20(){
	if (episodeGuess.value == 'Euphoria: part 1') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Euphoria: part 1'){
		wrongOrRight.textContent = 'wrong - Euphoria: part 1';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E21(){
	if (episodeGuess.value == 'Euphoria: part 2') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Euphoria: part 2'){
		wrongOrRight.textContent = 'wrong - Euphoria: part 2';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E22(){
	if (episodeGuess.value == 'Forever') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Forever'){
		wrongOrRight.textContent = 'wrong - Forever';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E23(){
	if (episodeGuess.value == "Who's Your Daddy?") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "Who's Your Daddy?"){
		wrongOrRight.textContent = "wrong - Who's Your Daddy?";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S2E24(){
	if (episodeGuess.value == 'No Reason') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'No Reason'){
		wrongOrRight.textContent = 'wrong - No Reason';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E1(){
	if (episodeGuess.value == 'Meaning') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Meaning'){
		wrongOrRight.textContent = 'wrong - Meaning';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E2(){
	if (episodeGuess.value == 'Cane and Able') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Cane and Able'){
		wrongOrRight.textContent = 'wrong - Cane and Able';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S3E3(){
	if (episodeGuess.value == 'Informed Consent') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Informed Consent'){
		wrongOrRight.textContent = 'wrong - Informed Consent';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E4(){
	if (episodeGuess.value == 'Lines in the Sand') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Lines in the Sand'){
		wrongOrRight.textContent = 'wrong - Lines in the Sand';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E5(){
	if (episodeGuess.value == 'Fools for Love') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Fools for Love'){
		wrongOrRight.textContent = 'wrong - Fools for Love';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E6(){
	if (episodeGuess.value == 'Que Sera Sera') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Que Sera Sera'){
		wrongOrRight.textContent = 'wrong - Que Sera Sera';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E7(){
	if (episodeGuess.value == 'Son of Coma Guy') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Son of Coma Guy'){
		wrongOrRight.textContent = 'wrong - Son of Coma Guy';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E8(){
	if (episodeGuess.value == 'Whac-A-Mole') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Whac-A-Mole'){
		wrongOrRight.textContent = 'wrong - Whac-A-Mole';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E9(){
	if (episodeGuess.value == 'Finding Judas') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Finding Judas'){
		wrongOrRight.textContent = 'wrong - Finding Judas';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E10(){
	if (episodeGuess.value == 'Merry Little Christmas') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Merry Little Christmas'){
		wrongOrRight.textContent = 'wrong - Merry Little Christmas';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E11(){
	if (episodeGuess.value == 'Words and Deeds') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Words and Deeds'){
		wrongOrRight.textContent = 'wrong - Words and Deeds';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E12(){
	if (episodeGuess.value == 'One Day, One Room') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'One Day, One Room'){
		wrongOrRight.textContent = 'wrong - One Day, One Room';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E13(){
	if (episodeGuess.value == 'Needle in a Haystack') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Needle in a Haystack'){
		wrongOrRight.textContent = 'wrong - Needle in a Haystack';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E14(){
	if (episodeGuess.value == 'Insensitive') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Insensitive'){
		wrongOrRight.textContent = 'wrong - Insensitive';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E15(){
	if (episodeGuess.value == 'Half-wit') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Half-wit'){
		wrongOrRight.textContent = 'wrong - Half-wit';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E16(){
	if (episodeGuess.value == 'Top Secret') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Top Secret'){
		wrongOrRight.textContent = 'wrong - Top Secret';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E17(){
	if (episodeGuess.value == 'Fetal Position') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Fetal Position'){
		wrongOrRight.textContent = 'wrong - Fetal Position';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E18(){
	if (episodeGuess.value == 'Airborne') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Airborne'){
		wrongOrRight.textContent = 'wrong - Airborne';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E19(){
	if (episodeGuess.value == 'Act Your Age') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Act Your Age'){
		wrongOrRight.textContent = 'wrong - Act Your Age';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E20(){
	if (episodeGuess.value == 'House Training') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'House Training'){
		wrongOrRight.textContent = 'wrong - House Training';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E21(){
	if (episodeGuess.value == 'Family') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Family'){
		wrongOrRight.textContent = 'wrong - Family';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S3E22(){
	if (episodeGuess.value == 'Resignation') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Resignation'){
		wrongOrRight.textContent = 'wrong - Resignation';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E23(){
	if (episodeGuess.value == 'The Jerk') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'The Jerk'){
		wrongOrRight.textContent = 'wrong - The Jerk';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S3E24(){
	if (episodeGuess.value == 'Human Error') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Human Error'){
		wrongOrRight.textContent = 'wrong - Human Error';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E1(){
	if (episodeGuess.value == 'Alone') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Alone'){
		wrongOrRight.textContent = 'wrong - Alone';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E2(){
	if (episodeGuess.value == 'The Right Stuff') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'The Right Stuff'){
		wrongOrRight.textContent = 'wrong - The Right Stuff';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E3(){
	if (episodeGuess.value == '97 Seconds') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== '97 Seconds'){
		wrongOrRight.textContent = 'wrong - 97 Seconds';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S4E4(){
	if (episodeGuess.value == 'Guardian Angels') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Guardian Angels'){
		wrongOrRight.textContent = 'wrong - Guardian Angels';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E5(){
	if (episodeGuess.value == 'Mirror Mirror') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Mirror Mirror'){
		wrongOrRight.textContent = 'wrong - Mirror Mirror';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E6(){
	if (episodeGuess.value == 'Whatever It Takes') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Whatever It Takes'){
		wrongOrRight.textContent = 'wrong - Whatever It Takes';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E7(){
	if (episodeGuess.value == 'Ugly') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Ugly'){
		wrongOrRight.textContent = 'wrong - Ugly';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E8(){
	if (episodeGuess.value == "You Don't Want to Know") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "You Don't Want to Know"){
		wrongOrRight.textContent = "wrong - You Don't Want to Know";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E9(){
	if (episodeGuess.value == 'Games') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Games'){
		wrongOrRight.textContent = 'wrong - Games';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E10(){
	if (episodeGuess.value == "It's a Wonderful Lie") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "It's a Wonderful Lie"){
		wrongOrRight.textContent = "wrong - It's a Wonderful Lie";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S4E11(){
	if (episodeGuess.value == 'Frozen') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Frozen'){
		wrongOrRight.textContent = 'wrong - Frozen';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E12(){
	if (episodeGuess.value == "Don't Ever Change") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "Don't Ever Change"){
		wrongOrRight.textContent = "wrong - Don't Ever Change";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E13(){
	if (episodeGuess.value == 'No More Mr. Nice Guy') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'No More Mr. Nice Guy'){
		wrongOrRight.textContent = 'wrong - No More Mr. Nice Guy';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S4E14(){
	if (episodeGuess.value == 'Living the Dream') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Living the Dream'){
		wrongOrRight.textContent = 'wrong - Living the Dream';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E15(){
	if (episodeGuess.value == "House's Head") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "House's Head"){
		wrongOrRight.textContent = "wrong - House's Head";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S4E16(){
	if (episodeGuess.value == "Wilson's Head") {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== "Wilson's Head"){
		wrongOrRight.textContent = "wrong - Wilson's Head";
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S5E1(){
	if (episodeGuess.value == 'Dying Changes Everything') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Dying Changes Everything'){
		wrongOrRight.textContent = 'wrong - Dying Changes Everything';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}

function S5E2(){
	if (episodeGuess.value == 'Not Cancer') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Not Cancer'){
		wrongOrRight.textContent = 'wrong - Not Cancer';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}
function S5E3(){
	if (episodeGuess.value == 'Adverse Events') {
		wrongOrRight.textContent = 'Right';
		wrongOrRight.style.color = 'green';
		document.getElementById('housePNG').src = "houseHappy.png";
	} else if (episodeGuess.Value !== 'Adverse Events'){
		wrongOrRight.textContent = 'wrong - Adverse Events';
		wrongOrRight.style.color = 'red';
		document.getElementById('housePNG').src = "houseSad.png";
	}
}




