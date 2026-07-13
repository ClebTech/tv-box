// ==========================
// JOGO DA MEMÓRIA - PARTE 1
// ==========================

// Emojis das cartas (8 pares)
const simbolos = [
    "🐶",
    "🐱",
    "🐵",
    "🦁",
    "🐸",
    "🐼",
    "🐰",
    "🦊"
];

// Duplica os símbolos para formar os pares
let cartas = [...simbolos, ...simbolos];

// Elementos da página
const tabuleiro = document.getElementById("tabuleiro");
const tempoElemento = document.getElementById("tempo");
const jogadasElemento = document.getElementById("jogadas");
const telaVitoria = document.getElementById("vitoria");
const resultadoFinal = document.getElementById("resultadoFinal");

const btnReiniciar = document.getElementById("reiniciar");
const btnJogarNovamente = document.getElementById("jogarNovamente");
const btnVoltar = document.getElementById("voltar");

// Variáveis do jogo
let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;

let jogadas = 0;
let paresEncontrados = 0;

let segundos = 0;
let cronometro = null;

// ==========================
// EMBARALHAR
// ==========================

function embaralhar(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }

}

// ==========================
// CRONÔMETRO
// ==========================

function iniciarCronometro(){

    clearInterval(cronometro);

    segundos = 0;

    atualizarTempo();

    cronometro = setInterval(()=>{

        segundos++;

        atualizarTempo();

    },1000);

}

function atualizarTempo(){

    const min = String(Math.floor(segundos/60)).padStart(2,"0");

    const seg = String(segundos%60).padStart(2,"0");

    tempoElemento.textContent = `${min}:${seg}`;

}

// ==========================
// CRIAR TABULEIRO
// ==========================

function criarTabuleiro(){

    tabuleiro.innerHTML = "";

    embaralhar(cartas);

    cartas.forEach(simbolo=>{

        const carta = document.createElement("div");

        carta.classList.add("carta");

        carta.dataset.simbolo = simbolo;

        carta.innerHTML = `

            <div class="face verso">
                ?
            </div>

            <div class="face frente">
                ${simbolo}
            </div>

        `;

        carta.addEventListener("click", virarCarta);

        tabuleiro.appendChild(carta);

    });

}

// ==========================
// VIRAR CARTA
// ==========================

function virarCarta(){

    if(bloqueado) return;

    if(this === primeiraCarta) return;

    if(this.classList.contains("encontrada")) return;

    this.classList.add("virada");

    if(primeiraCarta === null){

        primeiraCarta = this;

        return;

    }

    segundaCarta = this;

    jogadas++;

    jogadasElemento.textContent = jogadas;

    verificarPar();

}

// ==========================
// VERIFICAR PAR
// ==========================

function verificarPar(){

    bloqueado = true;

    const iguais =
        primeiraCarta.dataset.simbolo ===
        segundaCarta.dataset.simbolo;

    if(iguais){

        primeiraCarta.classList.add("encontrada");
        segundaCarta.classList.add("encontrada");

        primeiraCarta = null;
        segundaCarta = null;

        bloqueado = false;

        paresEncontrados++;

        if(paresEncontrados === simbolos.length){

            clearInterval(cronometro);

            resultadoFinal.innerHTML = `
                ⏱ Tempo: <strong>${tempoElemento.textContent}</strong><br><br>
                🎯 Jogadas: <strong>${jogadas}</strong>
            `;

            telaVitoria.classList.remove("oculto");

        }

    }else{

        setTimeout(()=>{

            primeiraCarta.classList.remove("virada");
            segundaCarta.classList.remove("virada");

            primeiraCarta = null;
            segundaCarta = null;

            bloqueado = false;

        },900);

    }

}

// ==========================
// REINICIAR JOGO
// ==========================

function reiniciarJogo(){

    clearInterval(cronometro);

    primeiraCarta = null;
    segundaCarta = null;

    bloqueado = false;

    jogadas = 0;
    paresEncontrados = 0;

    jogadasElemento.textContent = "0";

    telaVitoria.classList.add("oculto");

    cartas = [...simbolos, ...simbolos];

    criarTabuleiro();

    iniciarCronometro();

}

// ==========================
// BOTÕES
// ==========================

btnReiniciar.addEventListener("click", reiniciarJogo);

btnJogarNovamente.addEventListener("click", reiniciarJogo);

btnVoltar.addEventListener("click", ()=>{

    window.location.href="../../index.html";

});

// ==========================
// INICIAR
// ==========================

reiniciarJogo();