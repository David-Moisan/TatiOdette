const text = "Eh Pssssssst, tu veux du chocolat ?";

const btn = document.getElementById("btn");

let i = 0;

function writePush() {
    btn.innerHTML = text.slice(0, i);
    i++;
    if(i > text.length) {
        i = 0;
    }
}

setInterval(writePush, 100);