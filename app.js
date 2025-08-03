document.addEventListener('DOMContentLoaded', () => {
createSquares();


    function createSquares() {
        const gameBoard = document.getElementById('board')
        const array = [1, 2, 3, 4, 5]; // Example array, replace with your logic

        for (let index = 0; index <30; index++) {
            const element = array[index];
            let square = document.createElement('div');
            square.classList.add('square')
            square.setAttribute('id', index + 1)
            gameBoard.appendChild(square);
        }
    }

    
});