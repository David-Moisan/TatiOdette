

// Changer l'icon du drapeau et de la langue

function changeImage() {
    var changeLang = document.getElementById("image0");
    var v = changeLang.getAttribute("src");
    if (v == "/source/flag.png") {
        v = "/source/flag2.png";
    } else if (v == "/source/flag2.png") {
        v = "/source/flag3.png"
    } else if (v == "/source/flag3.png") {
        v = "/source/flag4.png"
    } else if (v == "/source/flag4.png") {
        v = "/source/flag5.png"
    }
    else {
        v = "/source/flag.png";
    }

    if (v == "/source/flag2.png") {
        var btn = document.getElementById("btn").innerHTML = "<a href='/sizeChoice.html'>チョコレートの作成を開始します</a>";
    } else if (v == "/source/flag3.png") {
        var btn = document.getElementById("btn").innerHTML = "<a href='/sizeChoice.html'>Start to create my chocolate</a>";
    } else if (v == "/source/flag4.png") {
        var btn = document.getElementById("btn").innerHTML = "<a href='/sizeChoice.html'>Fange an, meine Schokolade zu kreieren</a>";
    } else if (v == "/source/flag5.png") {
        var btn = document.getElementById("btn").innerHTML = "<a href='/sizeChoice.html'>Empieza a crear mi chocolate</a>";
    }
    else {
        var btn2 = document.getElementById("btn").innerHTML = "<a href='/sizeChoice.html'>Commencer à créer mon chocolat</a>";
    }

    changeLang.setAttribute("src", v);
}
