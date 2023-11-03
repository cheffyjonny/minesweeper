document.addEventListener('DOMContentLoaded', () => {
    const easy = document.querySelector('.grid.easy')
    const easyBtn = document.querySelector('.easy_btn');
    const mediumBtn = document.querySelector('.medium_btn');
    const hardBtn = document.querySelector('.hard_btn');
    const levelctrl = document.querySelector('#level_ctrl_btn'); 
    const display = document.querySelector('#display'); 
    const clicksound = new Audio("./click.mp3")
    const bombsound = new Audio("./bomb.mp3")
    let width = 11;
    let height = 10;
    let bombAmount = 10;
    let flags = 0;
    let squares = [];
    let isGameOver = false;




    /** Easy button control start**/
    easyBtn.addEventListener('click', () => {
        reset()
        levelctrl.classList.add('easy');
        width = 11;
        height = 10;
        bombAmount = 10;
        //Create Board
        function createBoard() {
            //Get shuffled game array with random bombs
            const bombArray = Array(bombAmount).fill('bomb');
            const emptyArray = Array(width * height - bombAmount).fill('valid');
            const gameArray = emptyArray.concat(bombArray);
            const shuffledArray = gameArray.sort(() => Math.random() -0.5); 

            for(let i = 0; i < width*height; i++) {
                const square = document.createElement('div')
                square.setAttribute('id', i)
                square.classList.add(shuffledArray[i]);
                easy.appendChild(square);
                squares.push(square);

                //Background color
                if(i % 2 === 0) {
                    square.style.backgroundColor = 'rgba(229,229,229)';
                }

                //Normal click
                square.addEventListener('click', () => {
                    click(square)
                })

                //Ctrl right click
                square.addEventListener('contextmenu', () => {
                    addFlag(square);
                })
            }
            
            //Add numbers
            for(let i = 0; i < squares.length; i++){
                let total = 0;
                const isLeftEdge = (i % width === 0);
                const isRightEdge = (i % width === width - 1);

                if(squares[i].classList.contains('valid')){
                    if(i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total ++;
                    if(i > width - 1 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total ++;
                    if(i >= width && squares[i - width].classList.contains('bomb')) total ++
                    if(i > width + 1 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total ++
                    if(i < width * height - 2 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total ++
                    if(i < width * height - width && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total ++
                    if(i < width * height - width - 2 && !isRightEdge && squares[i + 1 +width].classList.contains('bomb')) total ++
                    if(i <= width * height - width - 1 && squares[i + width].classList.contains('bomb')) total ++
                    squares[i].setAttribute('data', total)
                }
            }

        }
        createBoard()
    })
    /** Easy button control end**/

    /** Medium button control start**/
    mediumBtn.addEventListener('click', () => {
        reset()
        levelctrl.classList.add('medium')
        width = 19;
        height = 12;
        bombAmount = 20;
        //Create Board
        function createBoard() {
            //Get shuffled game array with random bombs
            const bombArray = Array(bombAmount).fill('bomb');
            const emptyArray = Array(width * height - bombAmount).fill('valid');
            const gameArray = emptyArray.concat(bombArray);
            const shuffledArray = gameArray.sort(() => Math.random() -0.5); 

            for(let i = 0; i < width*height; i++) {
                const square = document.createElement('div')
                square.setAttribute('id', i)
                square.classList.add(shuffledArray[i]);
                easy.appendChild(square);
                squares.push(square);

                //Background color
                if(i % 2 === 0) {
                    square.style.backgroundColor = 'rgba(229,229,229)';
                }

                //Normal click
                square.addEventListener('click', () => {
                    click(square)
                })

                //Ctrl right click
                square.addEventListener('contextmenu', () => {
                    addFlag(square);
                })
            }
            
            //Add numbers
            for(let i = 0; i < squares.length; i++){
                let total = 0;
                const isLeftEdge = (i % width === 0);
                const isRightEdge = (i % width === width - 1);

                if(squares[i].classList.contains('valid')){
                    if(i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total ++;
                    if(i > width - 1 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total ++;
                    if(i >= width && squares[i - width].classList.contains('bomb')) total ++
                    if(i > width + 1 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total ++
                    if(i < width * height - 2 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total ++
                    if(i < width * height - width && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total ++
                    if(i < width * height - width - 2 && !isRightEdge && squares[i + 1 +width].classList.contains('bomb')) total ++
                    if(i <= width * height - width - 1 && squares[i + width].classList.contains('bomb')) total ++
                    squares[i].setAttribute('data', total)
                }
            }

        }
        createBoard()
    })
    /** Medium button control end**/
    
    /** Hard button control start**/
    hardBtn.addEventListener('click', () => {
        reset()
        levelctrl.classList.add('hard')
        width = 21;
        height = 16;
        bombAmount = 40;
        //Create Board
        function createBoard() {
            //Get shuffled game array with random bombs
            const bombArray = Array(bombAmount).fill('bomb');
            const emptyArray = Array(width * height - bombAmount).fill('valid');
            const gameArray = emptyArray.concat(bombArray);
            const shuffledArray = gameArray.sort(() => Math.random() -0.5); 

            for(let i = 0; i < width*height; i++) {
                const square = document.createElement('div')
                square.setAttribute('id', i)
                square.classList.add(shuffledArray[i]);
                easy.appendChild(square);
                squares.push(square);

                //Background color
                if(i % 2 === 0) {
                    square.style.backgroundColor = 'rgba(229,229,229)';
                }

                //Normal click
                square.addEventListener('click', () => {
                    click(square)
                })

                //Ctrl right click
                square.addEventListener('contextmenu', () => {
                    addFlag(square);
                })
            }
            
            //Add numbers
            for(let i = 0; i < squares.length; i++){
                let total = 0;
                const isLeftEdge = (i % width === 0);
                const isRightEdge = (i % width === width - 1);

                if(squares[i].classList.contains('valid')){
                    if(i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total ++;
                    if(i > width - 1 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total ++;
                    if(i >= width && squares[i - width].classList.contains('bomb')) total ++
                    if(i > width + 1 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total ++
                    if(i < width * height - 2 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total ++
                    if(i < width * height - width && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total ++
                    if(i < width * height - width - 2 && !isRightEdge && squares[i + 1 +width].classList.contains('bomb')) total ++
                    if(i <= width * height - width - 1 && squares[i + width].classList.contains('bomb')) total ++
                    squares[i].setAttribute('data', total)
                }
            }

        }
        createBoard()
    })
     /** Hard button control end**/


    /** Create Board start  **/
    function createBoard() {
        //Get shuffled game array with random bombs
        const bombArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width * height - bombAmount).fill('valid');
        const gameArray = emptyArray.concat(bombArray);
        const shuffledArray = gameArray.sort(() => Math.random() -0.5); 

        for(let i = 0; i < width * height; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', i)
            square.classList.add(shuffledArray[i]);
            easy.appendChild(square);
            squares.push(square);

            //Background color
            if(i % 2 === 0) {
                square.style.backgroundColor = 'rgba(229,229,229)';
            }

            //Normal click
            square.addEventListener('click', () => {
                click(square)
            })

            //Ctrl right click
            square.oncontextmenu = e => {
                e.preventDefault();
                addFlag(square);
            }

        }
        
        //Add numbers
        for(let i = 0; i < squares.length; i++){
            let total = 0;
            const isLeftEdge = (i % width === 0);
            const isRightEdge = (i % width === width - 1);

            if(squares[i].classList.contains('valid')){
                if(i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total ++;
                if(i > width - 1 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total ++;
                if(i >= width && squares[i - width].classList.contains('bomb')) total ++
                if(i > width + 1 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total ++
                if(i < width * height - 2 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total ++
                if(i < width * height - width && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total ++
                if(i < width * height - width - 2 && !isRightEdge && squares[i + 1 +width].classList.contains('bomb')) total ++
                if(i <= width * height - width - 1 && squares[i + width].classList.contains('bomb')) total ++
                squares[i].setAttribute('data', total)
            }
        }

    }
    createBoard()
    /** Create Board end **/


    /** Flag control start **/
    function addFlag(square) {
        clicksound.play();
        if(isGameOver) return
        if(!square.classList.contains('checked') && !square.classList.contains('checkedTwo')) {
            if(!square.classList.contains('flag')) {
                square.classList.add('flag');
                square.innerHTML = '🚩';
                flags ++;
                checkForWin()

            } else {
                square.classList.remove('flag');
                square.innerHTML = '';
                flags --;

            }
        }
    }
    /** Flag control end **/


    /** Click control start **/
    function click(square) {
        clicksound.play();
        const randomNum = Math.round(Math.random());
        const checkList = ['checked', 'checkedTwo'];
        let currentId = square.id
        if(isGameOver) return
        if(square.classList.contains('checked') || square.classList.contains('checkedTwo') ||square.classList.contains('flag')) return
        if(square.classList.contains('bomb')) {
            gaveOver(square)

        } else {
            let total = square.getAttribute('data');
            if(total != 0) {
                square.innerHTML = `<div>${total}</div>`;
                square.classList.add(checkList[randomNum]);

                //Background color start
                if(currentId % 2 === 0) {
                    if(square.classList.contains('checked') || square.classList.contains('checkedTwo'))
                    square.style.backgroundColor = '#e573d5';
                }
                if(currentId % 2 === 1){
                    if(square.classList.contains('checked') || square.classList.contains('checkedTwo'))
                    square.style.backgroundColor = '#ff80ed';
                }
                //Background color end

                checkForWin()
                return
            }
            square.innerHTML = `<div></div>`;
            checkSquare(square, currentId);
            square.classList.add(checkList[randomNum]);
            checkForWin()
        }

        //Background color start
        if(currentId % 2 === 0) {
            if(square.classList.contains('checked') || square.classList.contains('checkedTwo'))
            square.style.backgroundColor = '#e573d5';
        }
        if(currentId % 2 === 1){
            if(square.classList.contains('checked') || square.classList.contains('checkedTwo'))
            square.style.backgroundColor = '#ff80ed';
        }
        //Background color end
    }
    /** Click control end **/

    /** Checksquare start (check neighboring squares once square is clicked) **/
    function checkSquare(square, currentId) {
        const isLeftEdge = (currentId % width === 0)
        const isRightEdge = (currentId % width === width - 1)

        setTimeout(() => {
            if(currentId > 0 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId > width - 1 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1 - width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId >= width) {
                const newId = squares[parseInt(currentId) - width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId > width + 1  && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1 - width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId < width * height - 2 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId < width * height - width && !isLeftEdge) {
                const newId = squares[parseInt(currentId) - 1 + width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId < width * height - width - 2 && !isRightEdge) {
                const newId = squares[parseInt(currentId) + 1 + width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
            if(currentId <= width * height - width - 1) {
                const newId = squares[parseInt(currentId) + width].id;
                const newSquare = document.getElementById(newId);
                click(newSquare);
            }
        }, 5)
    }
    /** Checksquare end **/

    /** Gameover start **/
    function gaveOver(square) {
        bombsound.play()
        setTimeout(() => {
            alert('GAVE OVER!')
        }, 200)
        isGameOver = true;

        //Show ALL the bombs
        squares.forEach(square => {
            if(square.classList.contains('bomb')){
                square.innerHTML = '💣';
                square.style.backgroundColor = 'red'
            }
        })
    }
    /** Gameover end **/

    /** Check for win start **/
    function checkForWin() {
        let matches = 0
        
        for(let i = 0; i < squares.length; i++){
            if(squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
                matches ++
            }
            if(matches === bombAmount ) {
                display.innerHTML = '🎉WINNER WINNER CHICKEN DINNER🎉';
                isGameOver = true;
            }
        }
    }
    /** Check for win end **/


    /** Reset start **/
    function reset() {
        easy.innerHTML = ''
        squares = [];
        checkedArr = [];
        isGameOver = false;
        levelctrl.classList.remove('easy');
        levelctrl.classList.remove('medium');
        levelctrl.classList.remove('hard');
        checkedNum = width * height - bombAmount;
    }
    /** Reset end **/
})


