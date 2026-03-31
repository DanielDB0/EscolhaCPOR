//import { Alunos } from './Alunos.js';

function abrirModal() {
    document.getElementById("modalAuto").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modalAuto").style.display = "none";
}

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

let Alunos = [
    ['POS', 'Nº', 'NOME DE GUERRA'],
    ['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['8', '501', 'BUENO'],
    ['9', '614', 'MORAIS'],
    ['10', '613', 'LACERDA'],
    ['11', '526', 'GIULIANO'],
    ['12', '522', 'HITO'],
    ['13', '521', 'BIFULCO'],
    ['14', '429', 'DIAS']['1', '501', 'BUENO'],
    ['15', '614', 'MORAIS'],
    ['16', '613', 'LACERDA'],
    ['17', '526', 'GIULIANO'],
    ['18', '522', 'HITO'],
    ['19', '521', 'BIFULCO'],
    ['20', '429', 'DIAS']['1', '501', 'BUENO'],
    ['21', '614', 'MORAIS'],
    ['22', '613', 'LACERDA'],
    ['23', '526', 'GIULIANO'],
    ['24', '522', 'HITO'],
    ['25', '521', 'BIFULCO'],
    ['26', '429', 'DIAS']
    ['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS']
];

console.log(Alunos.length)

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
        if(posAluno == 175){
            abrirModal();
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

document.querySelector("#modalTry").addEventListener("click", verArma)

function attTbArma(arma, index){
    arma.innerHTML = `
    <div class="txtCard">
            <h3 class="NomeArma">
                ${armas[index][0]}
            </h3>
        </div>
        <div class="tbAlu_Arma">
            <table class="tbArma">
                <thead>
                    <tr>
                        <th>POS</th>
                        <th>Nº</th>
                        <th>NOME DE GUERRA</th>
                    </tr>
                </thead>
                <tbody id="tb${armas[index][1]}"></tbody>
            </table>
        </div>`
        const Alu = arma.querySelector(`#tb${armas[index][1]}`)
        for(i = 0; i < escolhasArmas[0].length; i++){
            Alu.innerHTML += `<tr><th>${Alunos[escolhasArmas[index][i]][0]}</th><th>${Alunos[escolhasArmas[index][i]][1]}</th><th>${Alunos[escolhasArmas[index][i]][2]}</th></tr>`
        }
        arma.classList.remove('card')
        arma.classList.add('disable')
}

function verArma(){
    fecharModal()
    attTbArma(infantaria, 0)
    attTbArma(cavalaria, 1)
    attTbArma(artilharia, 2)
    attTbArma(engenharia, 3)
    attTbArma(intendencia, 4)
    attTbArma(comunicacoes, 5)
    attTbArma(matbel, 6)
}