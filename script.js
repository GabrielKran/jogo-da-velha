const arrayBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function introductionGame() {
    // alert('Bem vindo ao jogo da velha, cada quadrado é representado por um número de 1 a 9, cada linha tem 3 números e assim cada um signifca cada quadrado respectivamente.\nClique no botão "iniciar" para dar início ao jogo.')
    displayBoard();
}

introductionGame();

let gameStarted = false;
function startGame() {
    if (gameStarted) {
        alert('O jogo já foi iniciado');
        return;
    }

    const whoStartGame = prompt('Olá jogador, digite abaixo "sim" para vc começar o jogo como X, ou "nao" para a máquina começar o jogo com X');
    if (whoStartGame === 'sim') {
        playHuman();
        gameStarted = true;

    } else if (whoStartGame === 'nao') {
        playComputer();
        gameStarted = true;

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
            break;
        }

        const choiceNumber = parseInt(choice);
        const index = choiceNumber - 1;
        
        if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > 9) {
            alert('Entrada inválida, tente novamente.');
            
        } else if (typeof arrayBoard[index] !== 'number') {
            alert('Essa casa já está ocupada, escolha outra.');

        } else {
            arrayBoard[index] = 'X';
            displayBoard();
            playComputer();
            i++;
        }
        
    }
}

function playComputer() {
    const escolhas = arrayBoard;
}

function displayBoard() {
    console.clear();
    console.log(arrayBoard[0], arrayBoard[1], arrayBoard[2]);
    console.log(arrayBoard[3], arrayBoard[4], arrayBoard[5]);
    console.log(arrayBoard[6], arrayBoard[7], arrayBoard[8]);
}