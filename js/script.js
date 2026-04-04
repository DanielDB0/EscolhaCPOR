//import { Alunos } from './Alunos.js';
//import "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";


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
    'comunicacoes',
    'matbel',
    'intendencia',
]

const nomeArmas = [
    'Infantaria',
    'Cavalaria',
    'Artilharia',
    'Engenharia',
    'Comunicações',
    'Material Bélico',
    'Intendência',
]

let escolhasArmas = [[],[],[],[],[],[],[]]

const armas = [nomeArmas, imgArmas]
const alunoPos = document.querySelector('.PosAluno')
const Undo = document.querySelector('#undo')

let posAluno = 0

let Alunos = [
    ['POS', 'Nº', 'NOME DE GUERRA'],
    [1, 101, 'MALDONADO'], 
    [2, 102, 'MOTTA'], 
    [3, 103, 'MENDES'], 
    [4, 104, 'LUCCA'],
    [5, 105, 'KAUÃ'],
    [6, 106, 'SOUZA'], 
    [7, 107, 'OSTROWSKI'], 
    [8, 108, 'ALMEIDA'], 
    [9, 109, 'MALTEZ'], 
    [10, 110, 'PARANHOS'],
    [11, 111, 'MARINHO'], 
    [12, 112, 'SANTANA'], 
    [13, 113, 'SABINO'], 
    [14, 114, 'FERES'], 
    [15, 115, 'BRITO'],
    [16, 116, 'PAIVA'], 
    [17, 117, 'LIRA'], 
    [18, 118, 'RIOS'], 
    [19, 119, 'NEVES'], 
    [20, 120, 'PERES'],
    [21, 121, 'MONTEIRO'], 
    [22, 122, 'MASCARENHAS'], 
    [23, 123, 'DEZERTO'], 
    [24, 124, 'AZEVEDO'], 
    [25, 125, 'RODRIGUES'],
    [26, 126, 'LUCAS SANTOS'], 
    [27, 127, 'PERILLO'], 
    [28, 128, 'MORETTI'], 
    [29, 129, 'LIMA'], 
    [30, 130, 'MATIASI'],
    [31, 201, 'TRINHAIN'], 
    [32, 202, 'CAMILO'], 
    [33, 203, 'AGRASSO'], 
    [34, 204, 'FRANCO'], 
    [35, 205, 'CASTRO'],
    [36, 206, 'DELNERI'], 
    [37, 207, 'COSTA'], 
    [38, 208, 'FONSECA'], 
    [39, 209, 'CRUZ'], 
    [40, 210, 'SILVA LIMA'],
    [41, 211, 'PINSKY'], 
    [42, 212, 'REGO'], 
    [43, 213, 'ARTHUR OLIVEIRA'], 
    [44, 214, 'CHINEN'], 
    [45, 215, 'LYMBERIS'],
    [46, 216, 'GAMBOA'], 
    [47, 217, 'VALERIO'], 
    [48, 218, 'VAIRO'], 
    [49, 219, 'G. SILVA'], 
    [50, 220, 'CUNHA'],
    [51, 221, 'LUZO'], 
    [52, 222, 'SOARES'],
    [53, 223, 'ROSA'], 
    [54, 224, 'MIGUEL OLIVEIRA'], 
    [55, 225, 'SILVA'],
    [56, 226, 'CESAR'], 
    [57, 227, 'MOREIRA'], 
    [58, 228, 'VIEIRA'], 
    [59, 229, 'TAVANO'],
    [60, 301, 'TEIXEIRA'], 
    [61, 302, 'AIDAR'], 
    [62, 303, 'GUSTAVO'], 
    [63, 304, 'EVARISTO'], 
    [64, 305, 'FERREIRA'],
    [65, 306, 'FIGUEIREDO'], 
    [66, 307, 'LUNA'], 
    [67, 308, 'GOY'], 
    [68, 309, 'GENEROZO'], 
    [69, 310, 'MATEUS'],
    [70, 311, 'AMARAL'], 
    [71, 312, 'GUILHERME MEVES'], 
    [72, 313, 'FRANCISCHINI'], 
    [73, 314, 'MOURA'], 
    [74, 315, 'PINTON'],
    [75, 316, 'SERRA'], 
    [76, 317, 'FARIAS'], 
    [77, 318, 'PASSOS'], 
    [78, 319, 'PABLO'], 
    [79, 320, 'LUPIANES'],
    [80, 321, 'MIGUEL'], 
    [81, 322, 'MARQUES'], 
    [82, 323, 'MURILO'], 
    [83, 324, 'DA SILVA'], 
    [84, 325, 'MIRA'],
    [85, 326, 'MAKHLOUF'], 
    [86, 327, 'IWASSAKI'], 
    [87, 328, 'DELGADO'], 
    [88, 329, 'COELHO'],
    [89, 401, 'BEZERRA'], 
    [90, 402, 'SCHINEIDER'], 
    [91, 403, 'ROCHE'], 
    [92, 404, 'TISAKA'], 
    [93, 405, 'PALACIO'],
    [94, 406, 'ALENCAR'], 
    [95, 407, 'DANIEL ALVES'], 
    [96, 408, 'FAVARO'], 
    [97, 409, 'PINESE'], 
    [98, 410, 'OTAVIO LIMA'],
    [99, 411, 'RIBEIRO'], 
    [100, 412, 'PARIZOTTO'], 
    [101, 413, 'MARGONI'], 
    [102, 414, 'MEDEIROS'], 
    [103, 415, 'PONTES'],
    [104, 416, 'MAYER'], 
    [105, 417, 'JOAO VITOR'], 
    [106, 418, 'CARLOS'], 
    [107, 419, 'ARAUJO'], 
    [108, 420, 'MATIELLO'],
    [109, 421, 'ALEXANDRE'], 
    [110, 422, 'PAFFILE'], 
    [111, 423, 'QUEIROZ'], 
    [112, 424, 'CICOTI'], 
    [113, 425, 'GOMES'],
    [114, 426, 'FALCONI'], 
    [115, 427, 'DE JESUS'], 
    [116, 428, 'ZION'], 
    [117, 429, 'DIAS'],
    [118, 501, 'BUENO'], 
    [119, 502, 'ISSHIKI'], 
    [120, 503, 'ISIDRO'], 
    [121, 504, 'CANATO'], 
    [122, 505, 'CAZOTTI'],
    [123, 506, 'LASTRI'], 
    [124, 507, 'MILAN'], 
    [125, 508, 'LUCAS MENDES'], 
    [126, 509, 'RODRIGUEZ'], 
    [127, 510, 'IADANZA'],
    [128, 511, 'BARRIOS'], 
    [129, 512, 'AMORIM'], 
    [130, 513, 'MAGALHAES'], 
    [131, 514, 'WENDELL'], 
    [132, 515, 'GUEDES'],
    [133, 516, 'SANTOS'], 
    [134, 517, 'LOPES'], 
    [135, 518, 'ABDALLA'], 
    [136, 519, 'VICENTE'], 
    [137, 520, 'BARBOSA'],
    [138, 521, 'BIFULCO'], 
    [139, 522, 'HITO'], 
    [140, 523, 'LAVOISIER'], 
    [141, 524, 'NETO'], 
    [142, 525, 'BUCHLER'],
    [143, 526, 'GIULIANO'], 
    [144, 527, 'FERFOGLIA'], 
    [145, 528, 'DE SOUZA'], 
    [146, 529, 'ALVES'],
    [147, 601, 'BARRETO'], 
    [148, 602, 'SANCHEZ'], 
    [149, 603, 'R. SILVA'], 
    [150, 604, 'LEONI'], 
    [151, 605, 'MARTINS'],
    [152, 606, 'CONSTANTINO'], 
    [153, 607, 'OLIVEIRA'], 
    [154, 608, 'GONCALVES'], 
    [155, 609, 'KALIL'], 
    [156, 610, 'TAYAR'],
    [157, 611, 'COLADO'], 
    [158, 612, 'MAIA'], 
    [159, 613, 'LACERDA'], 
    [160, 614, 'MORAIS'], 
    [161, 615, 'TOSELLI'],
    [162, 616, 'HANSER'], 
    [163, 617, 'MELLO'], 
    [164, 618, 'MARCOLINO'], 
    [165, 619, 'RIKELME'], 
    [166, 620, 'FERRAZ'],
    [167, 621, 'BASTOS'], 
    [168, 622, 'DANTAS'], 
    [169, 623, 'BATISTA'], 
    [170, 624, 'ANUNCIATO'], 
    [171, 625, 'MACIEL'],
    [172, 626, 'DE ALMEIDA'], 
    [173, 627, 'ALBUQUERQUE'], 
    [174, 628, 'FERNANDES'], 
    [175, 629, 'BENVENUTO']
];

const card = `
<div class="card" id="Arma%%%">
    </div>
    `
    function att(arma, index, origem = 'do'){
        if(posAluno < 175){
            alunoPos.innerHTML = `
            <h1>ESCOLHA: ${posAluno + 1}º Lugar Al ${Alunos[posAluno + 1][1]} - ${Alunos[posAluno + 1][2]} </h1>
            `
        }
        else{
            alunoPos.innerHTML = '<h1>Escolhas Finalizadas!</h1>'
        }
        if(posAluno != 0 && origem !== 'undo'){
            Undo.style.display = "inline"
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
        console.log(index + ' ' + escolhasArmas[index] + ' ' + posAluno)
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
    const comunicacoes = document.querySelector('#Arma5')
    comunicacoes.addEventListener("click", Com)
    const matbel = document.querySelector('#Arma6')
    matbel.addEventListener("click", Mat)
    const intendencia = document.querySelector('#Arma7')
    intendencia.addEventListener("click", Int)
    
    const ObjArma = [infantaria, cavalaria, artilharia, engenharia, comunicacoes, matbel, intendencia]

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
function Com(){
    if(25-escolhasArmas[4].length < 1){
        comunicacoes.removeEventListener(Com)
    }
    posAluno++
    att(comunicacoes, 4)
}
function Mat(){
    if(25-escolhasArmas[5].length < 1){
        matbel.removeEventListener(Mat)
    }
    posAluno++
    att(matbel, 5)
}
function Int(){
    if(25-escolhasArmas[6].length < 1){
        intendencia.removeEventListener(Int)
    }
    posAluno++
    att(intendencia, 6)
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
            <table class="tbArma" id="tb${index}"><thead>
            <tr><th>POS</th><th>Nº</th><th>NOME DE GUERRA</th></tr></thead><tbody id="tb${armas[1][index]}"></tbody>
            </table>
        </div>`
        const Alu = arma.querySelector(`#tb${armas[1][index]}`)
        Alu.innerHTML += `
`
        for(i = 0; i < escolhasArmas[index].length; i++){
            console.log(Alunos[escolhasArmas[index][i]][1])
            Alu.innerHTML += `<tr><th>${Alunos[escolhasArmas[index][i]][0]}</th><th>${Alunos[escolhasArmas[index][i]][1]}</th><th>${Alunos[escolhasArmas[index][i]][2]}</th></tr>`
        }
        arma.classList.remove('disable')
        arma.classList.add('card1')
        arma.innerHTML += `
        <div id="download${index}" class="down" onclick="exportExcel(${index})"><img src="img/download.png" alt="download" class="imgDown"/></div>
        `
}

function exportExcel(index){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(`tb${index}`);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20').replaceAll('</tr>',`
`).replaceAll('<tr>', '').replaceAll('</th>', ';').replaceAll('<th>', '').replace(`<tbody id="tb${armas[1][index]}">`, '').replaceAll(
'thead', '').replaceAll(`<table class="tbArma" id="tb${index}">`, `ALUNOS ${armas[0][index].toUpperCase()} - TURMA 2026`).replace(
'</tbody>', ''). replace('</table>', '').replaceAll('/', '').replaceAll('<>', '');
    
    // Especificando o nome do arquivo
    filename = `Alunos_${armas[0][index].toUpperCase()}_2026.xls`;
    
    // Criando o elemento para download do arquivo
    downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);
      
    // Criando o link do arquivo
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    // Setando o nome do arquivo
    downloadLink.download = filename;
    //Acionando a função
    downloadLink.click();
    }

function verArma(){
    fecharModal()
    for (let index = 0; index < 7; index++) {
        attTbArma(ObjArma[index], index)
    }
}

Undo.addEventListener("click", undo)

function undo(){
    for(index = 0; index < 7; index++){
        if(escolhasArmas[index][escolhasArmas[index].length - 1] == posAluno) {
            escolhasArmas[index].pop()
            console.log(index + ' ' + escolhasArmas[index] + ' ' + posAluno)
            posAluno--
            if(posAluno == 0){
                Undo.style.display = "none"
            }
            if(escolhasArmas[index].length == 24){
                ObjArma[index].classList.remove('disable')
                ObjArma[index].classList.add('card')
            }
            att(ObjArma[index], index, 'undo')
            break
        }
    }

}