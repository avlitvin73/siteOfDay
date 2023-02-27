let SCORE = 0
const square = document.querySelector('.square')
const target = document.querySelector('.target')
const desk = document.querySelector('.desk')
const score = document.querySelector('.score')
const initPosition = () => {
    target.style.fontsize = '1px'
    square.style.fontsize = '1px'
    target.style.left = `${Math.ceil(desk.clientWidth * Math.random())}px`
    target.style.top = `${Math.ceil(desk.clientHeight * Math.random())}px`
    square.style.left = `${Math.ceil(desk.clientWidth * Math.random())}px`
    square.style.top = `${Math.ceil(desk.clientHeight * Math.random())}px`

}

const rotate = () => {
    const angle = parseInt(square.style.fontsize)
    angle.style.fontsize = `${angle + 5}px`
    square.style.transform = `rotate(${(angle + 5) % 360}deg)`
    console.log(`rotate(${(angle + 5) % 360}deg)`)
}

initPosition()
const move = () => {
    const direction = Math.random() > 0.73 ? 1 : 0
    const angle = parseInt(target.style.fontsize)
    target.style.fontsize = `${angle + direction}px`
    target.style.transform = `rotate(${(angle + direction) % 360}deg)`
    console.log(`rotate(${(angle + direction) % 360}deg)`)
    target.style.top = `${parseInt(target.style.top) + Math.random() * 3}px`
}


document.addEventListener('keydown', function(event) {
    move()
    if (event.code == 'KeyW') {
        square.style.top = `${parseInt(square.style.top) - 9}px`
    }
    if (event.code == 'KeyS') {
        square.style.top = `${parseInt(square.style.top) + 9}px`
    }
    if (event.code == 'KeyA') {
        square.style.left = `${parseInt(square.style.left) - 9}px`
    }
    if (event.code == 'KeyD') {
        square.style.left = `${parseInt(square.style.left) + 9}px`
    }
    if (Math.abs(parseInt(square.style.top) - parseInt(target.style.top)) < parseInt(target.clientHeight) &&
        Math.abs(parseInt(square.style.left) - parseInt(target.style.left)) < parseInt(target.clientWidth)) {
        initPosition()
        score.innerText = `Score: ${++SCORE}`
    }
    if (parseInt(square.style.top) > desk.clientHeight - square.clientHeight
        || parseInt(square.style.left) > desk.clientWidth - square.clientWidth
        || parseInt(target.style.top) > desk.clientHeight - target.clientHeight
        || parseInt(target.style.left) > desk.clientWidth - target.clientWidth
        || parseInt(square.style.top) < 0
        || parseInt(target.style.top) < 0
        || parseInt(target.style.left) < 0
        || parseInt(square.style.left) < 0) {
        initPosition()
        score.innerText = `Score: ${--SCORE}`
    }

});