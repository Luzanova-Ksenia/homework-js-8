let fc = String([])
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        fc += button.value
        let fcc = window.document.getElementById('output').innerHTML = fc;
        let a = button.value;
        if (a === "AC") {
            a = window.document.getElementById('output').innerHTML = `0`
            g = []
            fc = String([])
        }
        else if (a === "=") {
            calculator()
        }
        else if (a === "+/-") {
            g = Number(g.split("+/-"))
            if (g > 0) {
            g = Number(g * -1)}
            else if (g < 0) {g = Number(g * 1)}
            window.document.getElementById('output').innerHTML = g
            fc = String([])
            fc += g
            }
        else {
        b = String(a)
        g += b
        }
    })
});

let g = [];

function calculator() {
    if (g.indexOf("+") >= 0){
        g = g.split("+")
        g = Number(g[0]) + Number(g[1])
        window.document.getElementById('output').innerHTML = g
        fc = String([])
        fc += g
    } else if (g.indexOf("-")>= 0){
        g = g.split("-")
        g = Number(g[0]) - Number(g[1])
        window.document.getElementById('output').innerHTML = g
        fc = String([])
        fc += g
    } else if (g.indexOf("*")>= 0){
        g = g.split("*")
        g = Number(g[0]) * Number(g[1])
        window.document.getElementById('output').innerHTML = g
        fc = String([])
        fc += g
    } else if (g.indexOf("/")>= 0){
        g = g.split("/")
        g = Number(g[0]) / Number(g[1])
        window.document.getElementById('output').innerHTML = g
        fc = String([])
        fc += g
    }
};