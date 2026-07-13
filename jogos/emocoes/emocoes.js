const emocoes = [
    { nome: "FELIZ", emoji: "😊" },
    { nome: "TRISTE", emoji: "😢" },
    { nome: "BRAVO", emoji: "😠" },
    { nome: "SURPRESO", emoji: "😲" },
    { nome: "APAIXONADO", emoji: "😍" },
    { nome: "PENSATIVO", emoji: "🤔" },
    { nome: "ASSUSTADO", emoji: "😨" },
    { nome: "CANSADO", emoji: "😴" }
];

const tabuleiro = document.getElementById("tabuleiro");
const emocaoTexto = document.getElementById("emocao");
const pontuacaoElemento = document.getElementById("pontuacao");
const rodadaElemento = document.getElementById("rodada");
const mensagem = document.getElementById("mensagem");

const tempoElemento = document.getElementById("tempo");

const fimJogo = document.getElementById("fimJogo");
const resultadoFinal = document.getElementById("resultadoFinal");

const btnReiniciar = document.getElementById("reiniciar");
const btnJogarNovamente = document.getElementById("jogarNovamente");
const btnVoltar = document.getElementById("voltar");

let pontuacao = 0;
let rodada = 1;
const totalRodadas = 10;

let resposta = "";

let tempo = 30;
let cronometro;

// ======================
// EMBARALHAR
// ======================

function embaralhar(array){

    for(let i=array.length-1;i>0;i--){

        const j = Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

}

// ======================
// TIMER
// ======================

function iniciarTimer(){

    clearInterval(cronometro);

    tempo = 30;

    tempoElemento.textContent = tempo;

    cronometro = setInterval(()=>{

        tempo--;

        tempoElemento.textContent = tempo;

        if(tempo<=0){

            clearInterval(cronometro);

            terminar();

        }

    },1000);

}

// ======================
// NOVA RODADA
// ======================

function novaRodada(){

    mensagem.textContent="";

    rodadaElemento.textContent=`${rodada} / ${totalRodadas}`;

    tabuleiro.innerHTML="";

    let opcoes=[...emocoes];

    embaralhar(opcoes);

    opcoes=opcoes.slice(0,4);

    const correta=opcoes[Math.floor(Math.random()*4)];

    resposta=correta.nome;

    emocaoTexto.textContent=correta.nome;

    opcoes.forEach(e=>{

        const cartao=document.createElement("div");

        cartao.classList.add("cartao");

        cartao.textContent=e.emoji;

        cartao.addEventListener("click",()=>clicou(e.nome));

        tabuleiro.appendChild(cartao);

    });

}

// ======================
// CLIQUE
// ======================

function clicou(nome){

    if(nome===resposta){

        pontuacao++;

        pontuacaoElemento.textContent=pontuacao;

        mensagem.style.color="#28a745";

        mensagem.textContent="✔ Muito bem!";

    }else{

        mensagem.style.color="#d32f2f";

        mensagem.textContent="✖ Tente novamente!";

        return;

    }

    rodada++;

    if(rodada>totalRodadas){

        terminar();

        return;

    }

    setTimeout(novaRodada,700);

}

// ======================
// FINAL
// ======================

function terminar(){

    clearInterval(cronometro);

    resultadoFinal.innerHTML=`

        Você acertou
        <strong>${pontuacao}</strong>
        de
        <strong>${totalRodadas}</strong>
        emoções.

    `;

    fimJogo.classList.remove("oculto");

}

// ======================
// REINICIAR
// ======================

function reiniciar(){

    pontuacao=0;

    rodada=1;

    pontuacaoElemento.textContent="0";

    fimJogo.classList.add("oculto");

    iniciarTimer();

    novaRodada();

}

// ======================
// BOTÕES
// ======================

btnReiniciar.addEventListener("click",reiniciar);

btnJogarNovamente.addEventListener("click",reiniciar);

btnVoltar.addEventListener("click",()=>{

    window.location.href="../../index.html";

});

// ======================
// INICIAR
// ======================

reiniciar();