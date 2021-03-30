let starting = 0.1
let time = starting * 60

const eL = document.getElementById("countdown")
eL.addEventListener('change', () => {
    eL.classList.add('end')
})

console.log(eL);

setInterval(update, 1000)

function update() {
    let text = 'Votre chocolat est prêt <a href="/merci.html">►</a>'

    const min = Math.floor(time / 60)
    let sec = time % 60

    sec = sec < 10 ? '0' + sec : sec

    eL.innerHTML = `${min} : ${sec}`

    if ( time > 0) {
        time--
    } else {
        eL.innerHTML = text
    }
}



