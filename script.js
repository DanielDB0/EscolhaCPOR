const imgArmas = [
    'infantaria',
    'cavalaria',
    'artilharia',
    'engenharia',
    'intendencia',
    'comunicacoes',
    'matbel'
]

const nomeArmas = [
    'Infantaria',
    'Cavalaria',
    'Artilharia',
    'Engenharia',
    'Intendência',
    'Comunicações',
    'Material Bélico'
]

let escolhasArmas = [[],[],[],[],[],[],[]]

const armas = [nomeArmas, imgArmas]

let posAluno = 0

const card = `
<div class="card" id="Arma%%%">
    </div>
    `
    function att(arma, index){
        if(posAluno != 0){
            escolhasArmas[index].push(posAluno)
        }
        arma.innerHTML = `
        <div class="txtCard">
            <h3 class="NomeArma">
                ${armas[0][index]}
            </h3>
        </div>
        <div class="imgCard">
            <img src="img/${armas[1][index]}.png" alt="Brasão de ${armas[0][index]}" class="imgArma"/>
        </div>
        <div class="vagas">
            <p class="pButton"> ${25-escolhasArmas[index].length} Vagas restantes</p>
        </div>
        `
        if(25-escolhasArmas[index].length === 0){
            arma.classList.remove('card')
            arma.classList.add('disable')

        }
        console.log(escolhasArmas)
    }
    const cardContainer = document.querySelector('#cards')
    
    for (let i = 0; i < nomeArmas.length; i++) {
        cardContainer.innerHTML += card.replace('%%%', i+1)
        att(document.querySelector(`#Arma${i+1}`), i)
    }
    
    const infantaria = document.querySelector('#Arma1')
    infantaria.addEventListener("click", Inf)
    const cavalaria = document.querySelector('#Arma2')
    cavalaria.addEventListener("click", Cav)
    const artilharia = document.querySelector('#Arma3')
    artilharia.addEventListener("click", Art)
    const engenharia = document.querySelector('#Arma4')
    engenharia.addEventListener("click", Eng)
    const intendencia = document.querySelector('#Arma5')
    intendencia.addEventListener("click", Int)
    const comunicacoes = document.querySelector('#Arma6')
    comunicacoes.addEventListener("click", Com)
    const matbel = document.querySelector('#Arma7')
    matbel.addEventListener("click", Mat)


function Inf(){
    if(25-escolhasArmas[0].length < 1){
        infantaria.removeEventListener(Inf)
    }
    posAluno++
    att(infantaria, 0)
}
function Cav(){
    if(25-escolhasArmas[1].length < 1){
        cavalaria.removeEventListener(Cav)
    }
    posAluno++
    att(cavalaria, 1)
}
function Art(){
    if(25-escolhasArmas[2].length < 1){
        artilharia.removeEventListener(Art)
    }
    posAluno++
    att(artilharia, 2)
}
function Eng(){
    if(25-escolhasArmas[3].length < 1){
        engenharia.removeEventListener(Eng)
    }
    posAluno++
    att(engenharia, 3)
}
function Int(){
    if(25-escolhasArmas[4].length < 1){
        intendencia.removeEventListener(Int)
    }
    posAluno++
    att(intendencia, 4)
}
function Com(){
    if(25-escolhasArmas[5].length < 1){
        comunicacoes.removeEventListener(Com)
    }
    posAluno++
    att(comunicacoes, 5)
}
function Mat(){
    if(25-escolhasArmas[6].length < 1){
        matbel.removeEventListener(Mat)
    }
    posAluno++
    att(matbel, 6)
}