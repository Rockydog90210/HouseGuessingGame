placeGuess = document.getElementById('submitGuess') //button
    episodeIndex = document.getElementById('episodeTitle') //placeholder where title goes
    const episodeGuess = document.getElementById('episodeGuess') //imput
    wrongOrRight = document.getElementById('wrongOrRight')
    playAgain = document.getElementById('playAgain')
    noRepeatFun = document.getElementById('noRepeatButtion')
    hardModeButton = document.getElementById('hardModeEnable')
    easyModeButton = document.getElementById('easyModeEnable')

    Correct = document.getElementById('Right')
    Incorrect = document.getElementById('Wrong')
    Percent = document.getElementById('Percent')

    var totCorrect = 0;
var totWrong = 0;
let alreadyGussed = false
    let noRepeatButt = false
    let hardMode = false
    let easyMode = false

    window.addEventListener('load', restartArray);
window.addEventListener('load', tryAgain);
noRepeatFun.addEventListener('click', toggleRepeat);
hardModeButton.addEventListener('click', hardModeToggle);
easyModeButton.addEventListener('click', easyModeToggle);

episodeGuess.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        check();
    }
});
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

function toggleRepeat() {
    if (noRepeatButt == false) {
        noRepeatButt = true;
        document.getElementById("noRepeatButtion").style.backgroundColor = '#9da4ad';
    } else if (noRepeatButt == true) {
        noRepeatButt = false;
        document.getElementById("noRepeatButtion").style.backgroundColor = "white";
    }
}
function updateStat() {
    ++totWrong;
    Correct.textContent = totCorrect;
    Incorrect.textContent = totWrong;
    Percent.textContent = ((totCorrect / totWrong) * 100).toFixed(2);
    if (hardMode == true) {
        if (totCorrect !== totWrong) {
            totCorrect = 0;
            totWrong = 0;
            Correct.textContent = totCorrect;
            Incorrect.textContent = totWrong;
            Percent.textContent = "0"
                restartArray();
        }
    }
}
function hardModeToggle() {
    if (hardMode == false) {
        hardMode = true;
        document.getElementById("hardModeEnable").style.backgroundColor = 'red';
    } else if (hardMode == true) {
        hardMode = false;
        document.getElementById("hardModeEnable").style.backgroundColor = 'white';
    }
}
function easyModeToggle() {
    if (easyMode == false) {
        easyMode = true;
        document.getElementById("easyModeEnable").style.backgroundColor = 'green';
    } else if (easyMode == true) {
        easyMode = false;
        document.getElementById("easyModeEnable").style.backgroundColor = 'white';
    }
}
function restartArray() {
    episodes = ['Season 1 Episode 1', 'Season 1 Episode 2', 'Season 1 Episode 3', 'Season 1 Episode 4', 'Season 1 Episode 5', 'Season 1 Episode 6', 'Season 1 Episode 7', 'Season 1 Episode 8', 'Season 1 Episode 9', 'Season 1 Episode 10', 'Season 1 Episode 11', 'Season 1 Episode 12', 'Season 1 Episode 13', 'Season 1 Episode 14', 'Season 1 Episode 15', 'Season 1 Episode 16', 'Season 1 Episode 17', 'Season 1 Episode 18', 'Season 1 Episode 19', 'Season 1 Episode 20', 'Season 1 Episode 21', 'Season 1 Episode 22', 'Season 2 Episode 1', 'Season 2 Episode 2', 'Season 2 Episode 3', 'Season 2 Episode 4', 'Season 2 Episode 5', 'Season 2 Episode 6', 'Season 2 Episode 7', 'Season 2 Episode 8', 'Season 2 Episode 9', 'Season 2 Episode 10', 'Season 2 Episode 11', 'Season 2 Episode 12', 'Season 2 Episode 13', 'Season 2 Episode 14', 'Season 2 Episode 15', 'Season 2 Episode 16', 'Season 2 Episode 17', 'Season 2 Episode 18', 'Season 2 Episode 19', 'Season 2 Episode 20', 'Season 2 Episode 21', 'Season 2 Episode 21', 'Season 2 Episode 22', 'Season 2 Episode 23', 'Season 2 Episode 23', 'Season 2 Episode 24', 'Season 3 Episode 1', 'Season 3 Episode 2', 'Season 3 Episode 3', 'Season 3 Episode 4', 'Season 3 Episode 5', 'Season 3 Episode 6', 'Season 3 Episode 7', 'Season 3 Episode 8', 'Season 3 Episode 9', 'Season 3 Episode 10', 'Season 3 Episode 11', 'Season 3 Episode 12', 'Season 3 Episode 13', 'Season 3 Episode 14', 'Season 3 Episode 15', 'Season 3 Episode 16', 'Season 3 Episode 17', 'Season 3 Episode 18', 'Season 3 Episode 19', 'Season 3 Episode 20', 'Season 3 Episode 21', 'Season 3 Episode 22', 'Season 3 Episode 23', 'Season 3 Episode 24', 'Season 4 Episode 1', 'Season 4 Episode 2', 'Season 4 Episode 3', 'Season 4 Episode 4', 'Season 4 Episode 5', 'Season 4 Episode 6', 'Season 4 Episode 7', 'Season 4 Episode 8', 'Season 4 Episode 9', 'Season 4 Episode 10', 'Season 4 Episode 11', 'Season 4 Episode 12', 'Season 4 Episode 13', 'Season 4 Episode 14', 'Season 4 Episode 15', 'Season 4 Episode 16', 'Season 5 Episode 1', 'Season 5 Episode 2', 'Season 5 Episode 3', 'Season 5 Episode 4', 'Season 5 Episode 5', 'Season 5 Episode 6', 'Season 5 Episode 7', 'Season 5 Episode 8', 'Season 5 Episode 9', 'Season 5 Episode 10', 'Season 5 Episode 11', 'Season 5 Episode 12', 'Season 5 Episode 13', 'Season 5 Episode 14', 'Season 5 Episode 15', 'Season 5 Episode 16', 'Season 5 Episode 17', 'Season 5 Episode 18', 'Season 5 Episode 19', 'Season 5 Episode 20', 'Season 5 Episode 21', 'Season 5 Episode 22', 'Season 5 Episode 23', 'Season 5 Episode 24', 'Season 6 Episode 1', 'Season 6 Episode 2', 'Season 6 Episode 3', 'Season 6 Episode 4', 'Season 6 Episode 5', 'Season 6 Episode 6', 'Season 6 Episode 7', 'Season 6 Episode 8', 'Season 6 Episode 9', 'Season 6 Episode 10', 'Season 6 Episode 11', 'Season 6 Episode 12', 'Season 6 Episode 13', 'Season 6 Episode 14', 'Season 6 Episode 15', 'Season 6 Episode 16', 'Season 6 Episode 17', 'Season 6 Episode 18', 'Season 6 Episode 19', 'Season 6 Episode 20', 'Season 6 Episode 21', 'Season 7 Episode 1', 'Season 7 Episode 2', 'Season 7 Episode 3', 'Season 7 Episode 4', 'Season 7 Episode 5', 'Season 7 Episode 6', 'Season 7 Episode 7', 'Season 7 Episode 8', 'Season 7 Episode 9', 'Season 7 Episode 10', 'Season 7 Episode 11', 'Season 7 Episode 12', 'Season 7 Episode 13', 'Season 7 Episode 14', 'Season 7 Episode 15', 'Season 7 Episode 16', 'Season 7 Episode 17', 'Season 7 Episode 18', 'Season 7 Episode 19', 'Season 7 Episode 20', 'Season 7 Episode 21', ]
}

placeGuess.addEventListener('click', check);
playAgain.addEventListener('click', tryAgain);

function tryAgain() {
    episodeX = randomValueFromArray(episodes);
   // episodeX = 'Season 1 Episode 1';
    episodeIndex.textContent = episodeX;
    wrongOrRight.textContent = '';
    document.getElementById('housePNG').src = "houseNet.png";
    episodeGuess.value = '';
    episodeGuessEasy = '';
    alreadyGussed = false;

}
function check() {
    episodeGuess.toLowerCase
    if (alreadyGussed == false) {
        check2();
        alreadyGussed = true;
    } else if (alreadyGussed == true) {
        tryAgain();
        alreadyGussed = false;
    }
}
function check2() {

    if (easyMode == true) {
        episodeGuessEasy = episodeGuess.value.toLowerCase();
        console.log(episodeGuessEasy);
    }
    if (episodeX == 'Season 1 Episode 1') {
        episodeName = 'Pilot';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }

    } else if (episodeX == 'Season 1 Episode 2') {
        episodeName = 'Paternity';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }

    } else if (episodeX == 'Season 1 Episode 3') {
        episodeName = "Occam's Razor";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }

    } else if (episodeX == 'Season 1 Episode 4') {
        episodeName = 'Maternity';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }

    } else if (episodeX == 'Season 1 Episode 5') {
        episodeName = 'Damned If You Do';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }

    } else if (episodeX == 'Season 1 Episode 6') {
        episodeName = 'The Socratic Method';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 7') {
        episodeName = 'Fidelity';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 8') {
        episodeName = 'Poison';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 9') {
        episodeName = 'DNR';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 9');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 10') {
        episodeName = 'Histories';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 10');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 11') {
        episodeName = 'Detox';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 11');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 12') {
        episodeName = 'Sports Medicine';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 12');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 13') {
        episodeName = 'Cursed';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 13');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 14') {
        episodeName = 'Control';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 14');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 15') {
        episodeName = 'Mob Rules';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 15');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 16') {
        episodeName = 'Heavy';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 16');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 17') {
        episodeName = 'Role Model';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 17');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 18') {
        episodeName = 'Babies & Bathwater';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 18');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 19') {
        episodeName = 'Kids';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 19');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 20') {
        episodeName = 'Love Hurts';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 20');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 21') {
        episodeName = 'Three Stories';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 21');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 1 Episode 22') {
        episodeName = 'Honeymoon';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 1 Episode 22');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 1') {
        episodeName = 'Acceptance';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 2') {
        episodeName = 'Autopsy';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 3') {
        episodeName = 'Humpty Dumpty';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 4') {
        episodeName = 'TB or Not TB';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 5') {
        episodeName = "Daddy's Boy";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 6') {
        episodeName = 'Spin';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 7') {
        episodeName = 'Hunting';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 8') {
        episodeName = 'The Mistake';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 9') {
        episodeName = 'Deception';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 9');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 10') {
        episodeName = 'Failure to Communicate';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 10');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 11') {
        episodeName = 'Need to Know';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 11');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 12') {
        episodeName = 'Distractions';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 12');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 13') {
        episodeName = 'Skin Deep';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 13');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 14') {
        episodeName = 'Sex Kills';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 14');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 15') {
        episodeName = 'Clueless';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 15');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 16') {
        episodeName = 'Safe';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 16');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 17') {
        episodeName = 'All In';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 17');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 18') {
        episodeName = 'Sleeping Dogs Lie';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 18');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }

    } else if (episodeX == 'Season 2 Episode 19') {
        episodeName = 'House vs. God';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 19');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 20') {
        episodeName = 'Euphoria: part 1';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 20');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 21') {
        episodeName = 'Euphoria: part 2';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 21');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 22') {
        episodeName = 'Forever';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 22');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 23') {
        episodeName = "Who's Your Daddy?";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 23');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 2 Episode 24') {
        episodeName = 'No Reason';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 2 Episode 24');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 1') {
        episodeName = 'Meaning';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 2') {
        episodeName = 'Cane and Able';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 3') {
        episodeName = 'Informed Consent';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 4') {
        episodeName = 'Lines in the Sand';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 5') {
        episodeName = 'Fools for Love';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 6') {
        episodeName = 'Que Será Será';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase() || episodeGuess.value == 'Que Sera Sera') {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 7') {
        episodeName = 'Son of Coma Guy';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 8') {
        episodeName = 'Whac-A-Mole';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 9') {
        episodeName = 'Finding Judas';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 9');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 10') {
        episodeName = 'Merry Little Christmas';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 10');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 11') {
        episodeName = 'Words and Deeds';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 11');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 12') {
        episodeName = 'One Day, One Room';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 12');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 13') {
        episodeName = 'Needle in a Haystack';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 13');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 14') {
        episodeName = 'Insensitive';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 14');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 15') {
        episodeName = 'Half-wit';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 15');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 16') {
        episodeName = 'Top Secret';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 16');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 17') {
        episodeName = 'Fetal Position';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 17');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 18') {
        episodeName = 'Airborne';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 18');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 19') {
        episodeName = 'Act Your Age';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 19');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 20') {
        episodeName = 'House Training';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 20');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 21') {
        episodeName = 'Family';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 21');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 22') {
        episodeName = 'Resignation';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 22');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 23') {
        episodeName = 'The Jerk';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 23');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 3 Episode 24') {
        episodeName = 'Human Error';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 3 Episode 24');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 1') {
        episodeName = 'Alone';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 2') {
        episodeName = 'The Right Stuff';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 3') {
        episodeName = '97 Seconds';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 4') {
        episodeName = 'Guardian Angels';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 5') {
        episodeName = 'Mirror Mirror';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 6') {
        episodeName = 'Whatever It Takes';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 7') {
        episodeName = 'Ugly';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 8') {
        episodeName = "You Don't Want to Know";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 9') {
        episodeName = 'Games';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 9');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 10') {
        episodeName = "It's a Wonderful Lie";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 10');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 11') {
        episodeName = 'Frozen';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 11');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 12') {
        episodeName = "Don't Ever Change";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 12');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 13') {
        episodeName = 'No More Mr. Nice Guy';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 13');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 14') {
        episodeName = 'Living the Dream';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 14');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 15') {
        episodeName = "House's Head";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 15');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 4 Episode 16') {
        episodeName = "Wilson's Heart";
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 4 Episode 16');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 1') {
        episodeName = 'Dying Changes Everything';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 2') {
        episodeName = 'Not Cancer';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 3') {
        episodeName = 'Adverse Events';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 4') {
        episodeName = 'Birthmarks';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 5') {
        episodeName = 'Lucky Thirteen';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 6') {
        episodeName = 'Joy';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 7') {
        episodeName = 'The Itch';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 8') {
        episodeName = 'Emancipation';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 9') {
        episodeName = 'Last Resort';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 9');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 10') {
        episodeName = 'Let Them Eat Cake';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 10');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 11') {
        episodeName = 'Joy to the World';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 11');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 12') {
        episodeName = 'Painless';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 12');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 13') {
        episodeName = 'Big Baby';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 13');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 14') {
        episodeName = 'The Greater Good';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 14');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 15') {
        episodeName = 'Unfaithful';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 15');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 16') {
        episodeName = 'The Softer Side';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 16');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 17') {
        episodeName = 'The Social Contract';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 17');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 18') {
        episodeName = 'Here Kitty';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 18');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 19') {
        episodeName = 'Locked In';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 19');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 20') {
        episodeName = 'Simple Explanation';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 20');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 21') {
        episodeName = 'Saviors';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 21');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 22') {
        episodeName = 'House Divided';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 22');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 23') {
        episodeName = 'Under My Skin';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 23');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 5 Episode 24') {
        episodeName = 'Both Sides Now';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 5 Episode 24');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 1') {
        episodeName = 'Broken';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 2') {
        episodeName = 'Epic Fail';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 3') {
        episodeName = 'The Tyrant';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 4') {
        episodeName = 'Instant Karma';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 5') {
        episodeName = 'Brave Heart';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 6') {
        episodeName = 'Known Unknows';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 7') {
        episodeName = 'Teamwork';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 8') {
        episodeName = 'Ignorance Is Bliss';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 9') {
        episodeName = 'Wilson';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 9');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 10') {
        episodeName = 'The Down Low';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 10');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 11') {
        episodeName = 'Remorse';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 11');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 12') {
        episodeName = 'Moving the Chains';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 12');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 13') {
        episodeName = '5 to 9';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 13');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 14') {
        episodeName = 'Private Lives';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 14');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 15') {
        episodeName = 'Black Hole';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 15');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 16') {
        episodeName = 'Lockdown';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 16');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 17') {
        episodeName = 'Knight Fall';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 17');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 18') {
        episodeName = 'Open and Shut';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 18');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 19') {
        episodeName = 'The Choice';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 19');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 20') {
        episodeName = 'Baggage';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 20');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 6 Episode 21') {
        episodeName = 'Help Me';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 6 Episode 21');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 1') {
        episodeName = 'Now What?';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 1');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 2') {
        episodeName = 'Selfish';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 2');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 3') {
        episodeName = 'Unwritten';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 3');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 4') {
        episodeName = 'Massage Therapy';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 4');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 5') {
        episodeName = 'Unplanned Parenthood';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 5');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 6') {
        episodeName = 'Office Politics';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 6');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 7') {
        episodeName = 'A Pox on Our House';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 7');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 8') {
        episodeName = 'Small Sacrifices';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 8');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 9') {
        episodeName = 'Larger than Life';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 9');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 10') {
        episodeName = 'Carrot or Stick';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 10');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 11') {
        episodeName = 'Family Practice';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 11');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 12') {
        episodeName = 'You Must Remember This';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 12');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 13') {
        episodeName = 'Two Stories';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 13');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 14') {
        episodeName = 'Recession Proof';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 14');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 15') {
        episodeName = 'BombShells';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 15');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 16') {
        episodeName = 'Out of the Chute';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 16');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 17') {
        episodeName = 'Fall from Grace';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 17');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 18') {
        episodeName = 'The Dig';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 18');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 19') {
        episodeName = 'Last Temptation';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 19');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 20') {
        episodeName = 'Changes';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 20');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    } else if (episodeX == 'Season 7 Episode 21') {
        episodeName = 'The Fix';
        if (episodeGuess.value == episodeName || episodeGuessEasy.toLowerCase() == episodeName.toLowerCase()) {
            correct();
        } else if (episodeGuess.Value !== episodeName) {
            incorrect();
        }
        updateStat();
        if (noRepeatButt == true) {
            episodePreDelete = episodes.indexOf('Season 7 Episode 21');
            episodeDelete = episodes.splice(episodePreDelete, 1);
        }
    }
}
function correct() {
    wrongOrRight.textContent = 'Right';
    wrongOrRight.style.color = 'green';
    document.getElementById('housePNG').src = "houseHappy.png";
    ++totCorrect;
}
function incorrect() {
    wrongOrRight.textContent = 'Wrong - ' + episodeName;
    wrongOrRight.style.color = 'red';
    document.getElementById('housePNG').src = "houseSad.png";
}
