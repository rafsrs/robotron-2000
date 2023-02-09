
const partes = document.querySelectorAll('.controle-contador')
const estatisticas = document.querySelectorAll('[data-estatistica]')
const controle = document.querySelectorAll('[data-controle]')
const imagens = document.querySelectorAll('[data-cor]')

const imgRobo = document.querySelector('.robo')



const pecas = {
    "bracos": {
        "forca": 29,"poder": 35,"energia": -21,"velocidade": -5
    },

    "blindagem": {
        "forca": 41,"poder": 20,"energia": 0,"velocidade": -20
    },
    "nucleos":{
        "forca": 0,"poder": 7,"energia": 48,"velocidade": -24
    },
    "pernas":{
        "forca": 27,"poder": 21,"energia": -32,"velocidade": 42
    },
    "foguetes":{
        "forca": 0,"poder": 28,"energia": 0,"velocidade": -2
    }
}

const cores = {
    "azul": 1,
    "amarelo": 2,
    "branco": 3,
    "preto": 6,
    "rosa": 8,
    "vermelho": 10
}


function ajustes(operacao, parte) {
    const peca = parte.querySelector('[data-contador]')
    if (operacao === "-" && peca.value > 0) {
        peca.value = parseInt(peca.value) - 1
    } if (operacao === "+") {
        peca.value = parseInt(peca.value) + 1
    } else {return}
}



controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        atualizaEstatisticas(evento.target)
        ajustes(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function atualizaEstatisticas(peca) {
    

    estatisticas.forEach( (elemento) => {
        const parte = peca.dataset.peca
        const intEstatistica = parseInt(elemento.textContent)
        const valor = peca.parentNode.querySelector('[data-contador]').value
        console.log(valor.value, peca.dataset.controle)
        if (peca.dataset.controle == "-" && valor > 0) {
            elemento.textContent = intEstatistica - pecas[parte][elemento.dataset.estatistica] * cores[imgRobo.dataset.cor]
        } if (peca.dataset.controle === "+") {
            elemento.textContent = intEstatistica + pecas[parte][elemento.dataset.estatistica] * cores[imgRobo.dataset.cor]
        }
    })



}


imagens.forEach( (imagem) => {
    imagem.addEventListener("click", (evento) => {
        trocaImagem(evento.target.parentNode)
        imgRobo.dataset.cor = imagem.dataset.cor

        estatisticas.forEach( (e) => {
            e.textContent = 0
        })
        partes.forEach( (e) => {
            e.value = "00"
        })
    })
})


function trocaImagem(elemento) {
    const novaImagem = elemento.querySelector('img').src
    
    imgRobo.src = novaImagem

    
}

