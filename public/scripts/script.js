window.addEventListener('DOMContentLoaded', () => {
    show()
})

// unordered pairs of numbers
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numbers = numbers.sort(() => {return Math.random() - 0.5})
console.log(numbers)

//initial counter
let reveal  = 0
let moves = 0
let hits = 0
let firstPick = null
let secondPick = null
let timer = false
let time = 30
let gameOver = null


//html elements
const btns = document.querySelectorAll('.btn')
const movesShow = document.querySelector('.moves')
const hitsShow = document.querySelector('.hits')
const timeShow = document.querySelector('.time')

//buttons events
const show = () => {
    btns.forEach( btn => {
        btn.addEventListener('click', () => {

            //start timer
            if(timer == false) {
                startTimer()
                timer = true
            }

            reveal++
            //first pick
            if (reveal == 1) {
                firstPick = btn
                firstPick.innerHTML = numbers[btn.id]
                firstPick.disabled = true
            } else if (reveal == 2) {
            //second pick
                secondPick = btn
                secondPick.innerHTML = numbers[btn.id]
                secondPick.disabled = true
                moves++
                movesShow.innerHTML = `Moves: ${moves}`

                hit()               
            }
        })
    })
}

//result of picks
const hit = () => {
    if (firstPick != null && secondPick != null) {
        if (firstPick.innerHTML == secondPick.innerHTML) {
            hits++
            hitsShow.innerHTML = `Hits: ${hits}`
            firstPick.disabled = true
            secondPick.disabled = true
            reveal = 0
            if (hits == 8) {
                window.alert('YOU WIN')
            }
    } else {
        setTimeout(() => {
            firstPick.innerHTML = ''
            secondPick.innerHTML = ''
            firstPick.disabled = false
            secondPick.disabled = false
            reveal = 0
        }, 700)
    }
    }
}

const startTimer = () => {
    gameOver = setInterval(() => {
        time--
        timeShow.innerHTML = `Time: ${time} seg`
        if (time == 0) {
            timeShow.innerHTML = 'Time: 0 seg'
            clearInterval(gameOver)
            blockCard()
        }
    }, 1000)
}

const blockCard = () => {
    btns.forEach(btn => {
        btn.innerHTML = numbers[btn.id]
        btn.disabled = true
    })
}