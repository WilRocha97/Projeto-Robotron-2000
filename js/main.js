//quanda o elemento da imagem do robotron
const robotron = document.querySelector("#robotron")
//guarda os botões de mais e menos
const controle = document.querySelectorAll("[data-controle]")
//guarda as estatisticas do robotron
const estatisticas = document.querySelectorAll("[data-estatistica]")
//objeto com os valores que seram alterados quando cada parte do robotron sofrer um upgrade ou downgrade
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

//bloco responsável por adicionar função de soma e subtração de pontos de poder para cada aspecto do robotron
controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)

        //verifica se as estatisticas estão menores que zero, se sim reverte a operação de soma
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent)
            if(elemento.textContent <= 0) {
                alert(elemento.dataset.estatistica + ' Não pode ser menor que zero')
                manipulaDados("-", evento.target.parentNode, evento.target.dataset.peca)
            }
        })
    })
})

//função responsável por somar ou subtrair os pontos de poder do robotron
function manipulaDados(operacao, controle, peca) {
    const peca_upgrade = controle.querySelector("[data-contador]")
    
    if(operacao === "-" && peca_upgrade.value > 0) {
        peca_upgrade.value = parseInt(peca_upgrade.value) - 1
        atualizaEstatistica(operacao, controle, peca)
    }
    if(operacao === "+" && peca_upgrade.value < 10) {
        peca_upgrade.value = parseInt(peca_upgrade.value) + 1
        atualizaEstatistica(operacao, controle, peca)
    }
}

//função responsável por auterar as estatisticas do robotron conforme os pontos de poder distribuídos
function atualizaEstatistica(operacao, controle, peca) {
    const peca_upgrade = controle.querySelector("[data-contador]")
    estatisticas.forEach((elemento) => {
        if(operacao === "-" && peca_upgrade.value >= 0) {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
        if(operacao === "+" && peca_upgrade.value <= 10) {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }
    })
}

function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }

