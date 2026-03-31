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
const alunoPos = document.querySelector('.PosAluno')

let posAluno = 0

let Alunos = [
    ['POS', 'Nº', 'NOME DE GUERRA'],
    ['1', '501', 'BUENO'],
    ['2', '614', 'MORAIS'],
    ['3', '613', 'LACERDA'],
    ['4', '526', 'GIULIANO'],
    ['5', '522', 'HITO'],
    ['6', '521', 'BIFULCO'],
    ['7', '429', 'DIAS'],
    ['8', '501', 'BUENO'],
    ['9', '614', 'MORAIS'],
    ['10', '613', 'LACERDA'],
    ['11', '526', 'GIULIANO'],
    ['12', '522', 'HITO'],
    ['13', '521', 'BIFULCO'],
    ['14', '429', 'DIAS'],
    ['15', '501', 'BUENO'],
    ['16', '614', 'MORAIS'],
    ['17', '613', 'LACERDA'],
    ['18', '526', 'GIULIANO'],
    ['19', '522', 'HITO'],
    ['20', '521', 'BIFULCO'],
    ['21', '429', 'DIAS'],
    ['22', '501', 'BUENO'],
    ['23', '614', 'MORAIS'],
    ['24', '613', 'LACERDA'],
    ['25', '526', 'GIULIANO'],
    ['26', '522', 'HITO'],
    ['27', '521', 'BIFULCO'],
    ['28', '429', 'DIAS'],
    ['29', '501', 'BUENO'],
    ['30', '614', 'MORAIS'],
    ['31', '613', 'LACERDA'],
    ['32', '526', 'GIULIANO'],
    ['33', '522', 'HITO'],
    ['34', '521', 'BIFULCO'],
    ['35', '429', 'DIAS'],
    ['36', '501', 'BUENO'],
    ['37', '614', 'MORAIS'],
    ['38', '613', 'LACERDA'],
    ['39', '526', 'GIULIANO'],
    ['40', '522', 'HITO'],
    ['41', '521', 'BIFULCO'],
    ['42', '429', 'DIAS'],
    ['43', '501', 'BUENO'],
    ['44', '614', 'MORAIS'],
    ['45', '613', 'LACERDA'],
    ['46', '526', 'GIULIANO'],
    ['47', '522', 'HITO'],
    ['48', '521', 'BIFULCO'],
    ['49', '429', 'DIAS'],
    ['50', '501', 'BUENO'],
    ['51', '614', 'MORAIS'],
    ['52', '613', 'LACERDA'],
    ['53', '526', 'GIULIANO'],
    ['54', '522', 'HITO'],
    ['55', '521', 'BIFULCO'],
    ['56', '429', 'DIAS'],
    ['57', '501', 'BUENO'],
    ['58', '614', 'MORAIS'],
    ['59', '613', 'LACERDA'],
    ['60', '526', 'GIULIANO'],
    ['61', '522', 'HITO'],
    ['62', '521', 'BIFULCO'],
    ['63', '429', 'DIAS'],
    ['64', '501', 'BUENO'],
    ['65', '614', 'MORAIS'],
    ['66', '613', 'LACERDA'],
    ['67', '526', 'GIULIANO'],
    ['68', '522', 'HITO'],
    ['69', '521', 'BIFULCO'],
    ['70', '429', 'DIAS'],
    ['71', '501', 'BUENO'],
    ['72', '614', 'MORAIS'],
    ['73', '613', 'LACERDA'],
    ['74', '526', 'GIULIANO'],
    ['75', '522', 'HITO'],
    ['76', '521', 'BIFULCO'],
    ['77', '429', 'DIAS'],
    ['78', '501', 'BUENO'],
    ['79', '614', 'MORAIS'],
    ['80', '613', 'LACERDA'],
    ['81', '526', 'GIULIANO'],
    ['82', '522', 'HITO'],
    ['83', '521', 'BIFULCO'],
    ['84', '429', 'DIAS'],
    ['85', '501', 'BUENO'],
    ['86', '614', 'MORAIS'],
    ['87', '613', 'LACERDA'],
    ['88', '526', 'GIULIANO'],
    ['89', '522', 'HITO'],
    ['90', '521', 'BIFULCO'],
    ['91', '429', 'DIAS'],
    ['92', '501', 'BUENO'],
    ['93', '614', 'MORAIS'],
    ['94', '613', 'LACERDA'],
    ['95', '526', 'GIULIANO'],
    ['96', '522', 'HITO'],
    ['97', '521', 'BIFULCO'],
    ['98', '429', 'DIAS'],
    ['99', '501', 'BUENO'],
    ['100', '614', 'MORAIS'],
    ['101', '613', 'LACERDA'],
    ['102', '526', 'GIULIANO'],
    ['103', '522', 'HITO'],
    ['104', '521', 'BIFULCO'],
    ['105', '429', 'DIAS'],
    ['106', '501', 'BUENO'],
    ['107', '614', 'MORAIS'],
    ['108', '613', 'LACERDA'],
    ['109', '526', 'GIULIANO'],
    ['110', '522', 'HITO'],
    ['111', '521', 'BIFULCO'],
    ['112', '429', 'DIAS'],
    ['113', '501', 'BUENO'],
    ['114', '614', 'MORAIS'],
    ['115', '613', 'LACERDA'],
    ['116', '526', 'GIULIANO'],
    ['117', '522', 'HITO'],
    ['118', '521', 'BIFULCO'],
    ['119', '429', 'DIAS'],
    ['120', '501', 'BUENO'],
    ['121', '614', 'MORAIS'],
    ['122', '613', 'LACERDA'],
    ['123', '526', 'GIULIANO'],
    ['124', '522', 'HITO'],
    ['125', '521', 'BIFULCO'],
    ['126', '429', 'DIAS'],
    ['127', '501', 'BUENO'],
    ['128', '614', 'MORAIS'],
    ['129', '613', 'LACERDA'],
    ['130', '526', 'GIULIANO'],
    ['131', '522', 'HITO'],
    ['132', '521', 'BIFULCO'],
    ['133', '429', 'DIAS'],
    ['134', '501', 'BUENO'],
    ['135', '614', 'MORAIS'],
    ['136', '613', 'LACERDA'],
    ['137', '526', 'GIULIANO'],
    ['138', '522', 'HITO'],
    ['139', '521', 'BIFULCO'],
    ['140', '429', 'DIAS'],
    ['141', '501', 'BUENO'],
    ['142', '614', 'MORAIS'],
    ['143', '613', 'LACERDA'],
    ['144', '526', 'GIULIANO'],
    ['145', '522', 'HITO'],
    ['146', '521', 'BIFULCO'],
    ['147', '429', 'DIAS'],
    ['148', '501', 'BUENO'],
    ['149', '614', 'MORAIS'],
    ['150', '613', 'LACERDA'],
    ['151', '526', 'GIULIANO'],
    ['152', '522', 'HITO'],
    ['153', '521', 'BIFULCO'],
    ['154', '429', 'DIAS'],
    ['155', '501', 'BUENO'],
    ['156', '614', 'MORAIS'],
    ['157', '613', 'LACERDA'],
    ['158', '526', 'GIULIANO'],
    ['159', '522', 'HITO'],
    ['160', '521', 'BIFULCO'],
    ['161', '429', 'DIAS'],
    ['162', '501', 'BUENO'],
    ['163', '614', 'MORAIS'],
    ['164', '613', 'LACERDA'],
    ['165', '526', 'GIULIANO'],
    ['166', '522', 'HITO'],
    ['167', '521', 'BIFULCO'],
    ['168', '429', 'DIAS'],
    ['169', '501', 'BUENO'],
    ['170', '614', 'MORAIS'],
    ['171', '613', 'LACERDA'],
    ['172', '526', 'GIULIANO'],
    ['173', '522', 'HITO'],
    ['174', '521', 'BIFULCO'],
    ['175', '429', 'DIAS']
];

console.log(Alunos.length)

const card = `
<div class="card" id="Arma%%%">
    </div>
    `
    function att(arma, index){
        if(posAluno < 175){
            alunoPos.innerHTML = `
            <h1>ESCOLHA: ${Alunos[posAluno + 1][0]}º Lugar Al ${Alunos[posAluno + 1][1]} - ${Alunos[posAluno + 1][2]} </h1>
            `
        }
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
            <p class="pNumero">${25-escolhasArmas[index].length}</p>
            <p class="pButton">Vagas Restantes</p>
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
                ${armas[0][index]}
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
                <tbody id="tb${armas[1][index]}"></tbody>
            </table>
        </div>`
        const Alu = arma.querySelector(`#tb${armas[1][index]}`)
        for(i = 0; i < escolhasArmas[index].length; i++){
            console.log(Alunos[escolhasArmas[index][i]][1])
            Alu.innerHTML += `<tr><th>${Alunos[escolhasArmas[index][i]][0]}</th><th>${Alunos[escolhasArmas[index][i]][1]}</th><th>${Alunos[escolhasArmas[index][i]][2]}</th></tr>`
        }
        arma.classList.remove('disable')
        arma.classList.add('card')
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