console.log("veikia")

function Homepage() {
    window.location.href = "index.html"
}

let a = 0;

let atsakymai = [
    "kl1taip", "kl2taip", "kl3taip", "kl4taip", "kl5taip"
];

function start() {
    document.getElementsByClassName("kl1")[0].style.display = "flex";
    document.getElementsByClassName("start")[0].style.display = "none";
}

function funk1() {
    document.getElementsByClassName("kl1")[a].style.display = "none";
    if (document.getElementById(atsakymai[a]).checked) {
        a++
        document.getElementsByClassName("kl1")[a].style.display = "flex";
    } else {
        document.getElementsByClassName("error")[0].style.display = "flex"
    }
}

function restart() {
    window.location.reload()
}