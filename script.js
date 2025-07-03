const arrayBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function introductionGame() {
    alert('Bem vindo ao jogo da velha, cada quadrado é representado por um número de 1 a 9, cada linha tem 3 números e assim cada um signifca cada quadrado respectivamente.\nClique no botão "iniciar" para dar início ao jogo.')
    displayBoard();
}

introductionGame();

let gameStarted = false;
let humanStartedGame = false;
let simboloJogadaHuman = '';
let simboloJogadaComputer = '';

function startGame() {
    if (gameStarted) {
        alert('O jogo já foi iniciado');
        return;
    }

    const whoStartGame = prompt('Olá jogador, digite abaixo "sim" para vc começar o jogo como X, ou "nao" para a máquina começar o jogo com X');
    if (whoStartGame === 'sim') {
        gameStarted = true;
        simboloJogadaHuman = 'X';
        simboloJogadaComputer = 'O';
        humanStartedGame = true;
        gameController();

    } else if (whoStartGame === 'nao') {
        gameStarted = true;
        simboloJogadaHuman = 'O';
        simboloJogadaComputer = 'X';
        gameController();

    } else {
        alert('Por favor, digite corretamente como foi pedido');
    }
}

function playHuman() {
    displayBoard();
    let i = 0;
    while (i < 1) {
        const choice = prompt('Escolha um número disponível para efetuar a jogada.');

        if (choice === null) {
            alert('Jogo cancelado.');
            gameStarted = false;
            displayBoard();
            break;
        }

        const choiceNumber = parseInt(choice);
        const index = choiceNumber - 1;
        
        if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > 9) {
            alert('Entrada inválida, tente novamente.');
            
        } else if (typeof arrayBoard[index] !== 'number') {
            alert('Essa casa já está ocupada, escolha outra.');

        } else {
            arrayBoard[index] = simboloJogadaHuman;
            displayBoard();
            i++;
        }
        
    }
}

function playComputer() {
    let i = 0;
    while (i < 1) {
        const choice = Math.floor(Math.random() * arrayBoard.length);
        
        if (typeof arrayBoard[choice] !== 'number') {
            console.log('Computador escolhue uma casa ocupada, escolhendo outra..');

        } else {
            arrayBoard[choice] = simboloJogadaComputer;
            displayBoard();
            i++;
        }
    }
}

function gameController() {
    let whoPlay = humanStartedGame ? 'human' : 'computer';

    while (gameStarted) {
        if (whoPlay === 'human') {
            playHuman();

            if (verifyWinner(simboloJogadaHuman)) {
                console.log(`Parabéns, você venceu jogando com ${simboloJogadaHuman}`);
                alert(`Parabéns, você venceu jogando com ${simboloJogadaHuman}`);
                break;
            }

            if (verifyDraw()) {
                console.log('Empate..');
                alert('Empate..')
                break;
            }

            whoPlay = 'computer';

        } else {
            playComputer();

            if (verifyWinner(simboloJogadaComputer)) {
                console.log(`Sinto muito, vc perdeu para o computador.. Ele te venceu com ${simboloJogadaComputer}`);
                alert(`Sinto muito, vc perdeu para o computador.. Ele te venceu com ${simboloJogadaComputer}`);
                break;
            }

            if (verifyDraw()) {
                console.log('Empate..');
                alert('Empate..')
                break;
            }

            whoPlay = 'human';

        }
    }
}

function verifyWinner(symbol) {
    const winnerCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winnerCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            arrayBoard[a] === symbol &&
            arrayBoard[b] === symbol &&
            arrayBoard[c] === symbol
        );
    })
}

function verifyDraw() {
    return arrayBoard.every(board => typeof board !== 'number');
}

function displayBoard() {
    console.clear();
    console.log(arrayBoard[0], arrayBoard[1], arrayBoard[2]);
    console.log(arrayBoard[3], arrayBoard[4], arrayBoard[5]);
    console.log(arrayBoard[6], arrayBoard[7], arrayBoard[8]);
}