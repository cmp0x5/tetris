document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid') // const grid receives the .grid values from html file
    let squares = Array.from(document.querySelectorAll('.grid div')) // Tuns divs into array with specific index number
    const width = 10
    const scoreDisplay = document.querySelector('#score') // span id = score
    const startButton = document.querySelector('#start-button') 

    // Tetraminoes

    const lTetromino = [ // Draw each of the 5 tetrominoes in each of its 4 rotations using our width const
        [1, width+1, (width*2)+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, (width*2)+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ]

    const iTetromino = [
        [1, width+1, (width*2)+1, (width*3)+1],
        [width,width+1,width+2,width+3],
        [1, width+1, (width*2)+1, (width*3)+1],
        [width,width+1,width+2,width+3]
    ]

    const tTetromino = [
        [width, width+1, width+2, (width*2)+1],
        [width+1, width*2, (width*2)+1, (width*2)+2],
        [width+1, width*2, (width*2)+1, (width*3)+1],
        [width, width*2, width*3, (width*2)+1]
    ]

    const oTetromino = [
        [width, width+1, width*2, (width*2)+1],
        [width, width+1, width*2, (width*2)+1],
        [width, width+1, width*2, (width*2)+1],
        [width, width+1, width*2, (width*2)+1]
    ]

    const zTetromino = [
        [width, width*2, (width*2)+1, (width*3)+1],
        [width+1, width+2, width*2, (width*2)+1],
        [width, width*2, (width*2)+1, (width*3)+1],
        [width+1, width+2, width*2, (width*2)+1]
    ]

    const tetrominoes = [lTetromino, iTetromino, tTetromino, oTetromino, zTetromino]

    let currentPosition = 4
    let currentRotation = 0

    // randomly select a tetromino and its first rotation
    let random = Math.floor(Math.random()*tetrominoes.length)
    let current = tetrominoes[random][currentRotation]

   // Draw the Tetromino

   function draw() {
       current.forEach(index => {
           squares[currentPosition + index].classList.add('tetromino') // Add class 'tetromino' for each tetramino position in the array, as to color those.
       })
   }

   //undraw the tetromino
   function undraw(){
       current.forEach(index => {
           squares[currentPosition + index].classList.remove('tetromino')
       })
   }

    //times and intervals
    //setInterval so tetromino goes down every second

    timerId = setInterval(moveDown, 1000)

    // keycodes and events
    //assign functions to keycodes
    function control(e) {
        if (e.keyCode === 37) { // keyCodes => 37 left, 39 right, 40 down, 38 up
            moveLeft()
        }
        else if (e.keyCode === 38){
            rotate()
        }
        else if (e.keyCode === 39){
            moveRight()
        }
        else if (e.keyCode === 40){
            moveDown()
        }
    }
    document.addEventListener('keyup', control)
    //move down function
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze() // freeze is checked every second
    }
    // freeze function - if tetromino reaches bottom

    function freeze(){
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            //start a new tetromino falling
            random = Math.floor(Math.random() * tetrominoes.length)
            current = tetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }
    // modulus to define our place in the grid
    // moving tetromino left, unless is at the edge or there is a blockage
    function moveLeft(){
        undraw() // remove shape at its current location
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        // one of the squares divided by width leaves exactly 0 as a remainder, meaning we're at the left edge(10,20,30...)
        if (!isAtLeftEdge) currentPosition -= 1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition += 1
        }

        draw()
    }
    // same logic but for right side
    function moveRight(){
        undraw() // remove shape at its current location
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === (width-1))
        if (!isAtRightEdge) currentPosition += 1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -= 1
        }

        draw()
    }
    //choosing items from arrays
    //rotating the tetromino
    function rotate(){
        undraw()
        currentRotation++
        if(currentRotation === current.length) { // if currentRotation gets to 4, make it go back to 0
            currentRotation = 0
        }
        current = tetrominoes[random][currentRotation]
        draw()
    }



})