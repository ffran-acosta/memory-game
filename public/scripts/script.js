window.addEventListener('DOMContentLoaded', () => {
    show()
})

// unordered pairs of numbers
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numbers = numbers.sort(() => {return Math.random() - 0.5})
console.log(numbers)

//initial counter
let reveal  = 0
let firstPick = null
let secondPick = null

const btns = document.querySelectorAll('.btn')
const mvoes = document.querySelector('.moves')

const show = () => {
    btns.forEach( btn => {
        btn.addEventListener('click', () => {
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
            }
        })
    })
}
