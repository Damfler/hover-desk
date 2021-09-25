const board = document.querySelector('#board')
const colors =[
    '#FFFF66',
    '#CC33CC',
    '#3333CC',
    '#33CCFF',
    '#669999',
    '#00FF66',
    '#99CC00',
    '#CCFF00',
    '#333333',
    '#666666',
    '#003333',
    '#330066',
    '#330099',
    '#66FF66',
]
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mousemove', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(elem) {
    const color = getRandomColor()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}