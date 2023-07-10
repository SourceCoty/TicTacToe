const grid = document.querySelector("board");
const notice = document.querySelector(".printer")
const segment = document.querySelectorAll(".segment");
const clear = document.querySelector(".clear")

clear.addEventListener('click', function(e) {
    e.target.onclick = clearDisplay.reset();
    controlPlay.activateClick();
    e.target.onclick = gameBoard.getLog();
    notice.innerHTML = "Complete the game to declare a winner!"
});

segment.forEach((div) => {
    div.addEventListener('click', function(e) {
        e.target.onclick = gameCount.setCount();
        let indexValue = e.target.getAttribute("data-index");
        e.target.innerHTML = displayController.setDisplay();
        e.target.onclick = gameBoard.setLog(indexValue);
        e.target.onclick = gameOutcome.getIndex();
        e.target.onclick = gameOutcome.printResult();
    });
});

const gameBoard = ( () => {
    let log = [0,1,2,3,4,5,6,7,8];
    const getLog = () => log;
    const setLog = (indexValue) => {
        if (gameCount.getCount() % 2 === 0 ) {
            return log.splice(indexValue, 1, "O")
        } else {return log.splice(indexValue, 1, "X")}
    };
    const resetLog = () => { 
        log = [0,1,2,3,4,5,6,7,8]
    }
    return {getLog, setLog, resetLog};
})();

const gameCount = (() => {
    let count = 0;
    const getCount = () => count;
    const setCount = () => {
        count++
        if(count > 8) {
            count = 9;
            return count;
        }
    };
    const resetCount = () => {
        count = 0;
    }
    return {getCount, setCount, resetCount}
})();

const displayController = ( () => {
    const setDisplay = () => {
        if (gameCount.getCount() === null) {
            segment.p
        } else if (gameCount.getCount() % 2 === 0) {
            return "O";
        } else { return "X"}
    }
    return {setDisplay}
})();

const gameOutcome = ( () => {
    let index = '';
    let result = '';
    const getIndex = () => {
        index = gameBoard.getLog();
        return index;
    }
    const getResult = () => result;
    const resetResult = () => {
            result = "";
    }
    const printResult = () => {
        if (index[0] === index[1] && index[0] === index[2]) {
            if (index[0] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('zero').style.backgroundColor = "#AEF359";
            document.getElementById('one').style.backgroundColor = "#AEF359";
            document.getElementById('two').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[3] === index[4] && index[3] === index[5]) {
            if (index[3] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('three').style.backgroundColor = "#AEF359";
            document.getElementById('four').style.backgroundColor = "#AEF359";
            document.getElementById('five').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[6] === index[7] && index[6] === index[8]) {
            if (index[6] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('six').style.backgroundColor = "#AEF359";
            document.getElementById('seven').style.backgroundColor = "#AEF359";
            document.getElementById('eight').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[0] === index[3] && index[0] === index[6]) {
            if (index[0] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('zero').style.backgroundColor = "#AEF359";
            document.getElementById('three').style.backgroundColor = "#AEF359";
            document.getElementById('six').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[1] === index[4] && index[1] === index[7]) {
            if (index[1] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('one').style.backgroundColor = "#AEF359";
            document.getElementById('four').style.backgroundColor = "#AEF359";
            document.getElementById('seven').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[2] === index[5] && index[2] === index[8]) {
            if (index[2] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('two').style.backgroundColor = "#AEF359";
            document.getElementById('five').style.backgroundColor = "#AEF359";
            document.getElementById('eight').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[0] === index[4] && index[0] === index[8]) {
            if (index[0] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('zero').style.backgroundColor = "#AEF359";
            document.getElementById('four').style.backgroundColor = "#AEF359";
            document.getElementById('eight').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[2] === index[4] && index[2] === index[6]) {
            if (index[2] === playerOne.getToken()) {
                result = `The winner is ${playerOne.getName()}`;
            } else { result = `The winner is ${playerTwo.getName()}`
            }
            document.getElementById('two').style.backgroundColor = "#AEF359";
            document.getElementById('four').style.backgroundColor = "#AEF359";
            document.getElementById('six').style.backgroundColor = "#AEF359"; 
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
        } else if (index[0] !== 0 && index[1] !== 1 && index[2] !== 2 && index[3] !== 3 && index[4] !== 4 && index[5] !== 5 && index[6] !== 6 && index[7] !== 7 && index[8] !== 8) {
            document.getElementById('printer').innerHTML = result;
            controlPlay.preventClick();
            result = "It's a tie!";
        };
    }
    return {getResult, printResult, resetResult, getIndex};
})(gameBoard.getLog);

const clearDisplay = (() => {
    const reset = () => {
        document.querySelectorAll(".segment");
        segment.forEach((div) => {
            div.innerHTML = '';
            div.style.backgroundColor = "";
        });
        gameCount.resetCount();
        gameBoard.resetLog();
        gameOutcome.resetResult();
    };
    return {reset}
})();

const controlPlay = (() => {
    const preventClick = () => {
        document.querySelectorAll(".segment");
        segment.forEach((div) => { 
            div.className = "segmentfreeze";
            })
        };
    const activateClick = () => {
        document.getElementById('zero').className = "segment";
        document.getElementById('one').className = "segment";
        document.getElementById('two').className = "segment";
        document.getElementById('three').className = "segment";
        document.getElementById('four').className = "segment";
        document.getElementById('five').className = "segment";
        document.getElementById('six').className = "segment";
        document.getElementById('seven').className = "segment";
        document.getElementById('eight').className = "segment";
    };
    return {preventClick, activateClick}
})();

const Player = function (name, token) {
    const getName = () => name;
    const getToken = () => token;
    return {getName, getToken}
};

const playerOne = Player(prompt("Enter Player One Name"), "X");
const playerTwo = Player(prompt("Enter Player Two Name"), "O");

// let playerOne = Player("Player One", "X");
// let playerTwo = Player("Player Two", "O");

