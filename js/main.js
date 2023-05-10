function dizOla() {
    console.log('Olá!')
    console.log('Bem-vindo, eu sou o Robotron-2000!')
}

dizOla()

const robotron = document.querySelector("#robotron")
//robotron.addEventListener("click", function() {
robotron.addEventListener("click", () => {
    console.log('Olá!!')
})

//bloco responsável por adicionar função de soma e subtração de pontos de poder para cada aspecto do robotron
const controle = document.querySelectorAll("[data-controle]")
controle.forEach((elemnto) => {
    elemnto.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-" && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1
    }
    if(operacao === "+" && peca.value < 50) {
        peca.value = parseInt(peca.value) + 1
    }
}

//bloco responsável por auterar as estatisticas do robotron conforme os pontos de poder distribuídos
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
