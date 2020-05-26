document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid') // const grid receives the .grid values from html file
    let squares = Array.from(document.querySelectorAll('.grid div')) // Tuns divs into array with specific index number
    const width = 10
    const scoreDisplay = document.querySelector('#score') // span id = score
    const startButton = document.querySelector('#start-button') 

    // Tetraminós

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
   function unraw(){
       current.forEach(index => {
           squares[currentPosition + index].classList.remove('tetromino')
       })
   }

//times and intervals4533





})