const cores = [
    { nome: "AZUL", cor: "#2196F3" },
    { nome: "VERMELHO", cor: "#F44336" },
    { nome: "VERDE", cor: "#4CAF50" },
    { nome: "AMARELO", cor: "#FFEB3B" },
    { nome: "ROXO", cor: "#9C27B0" },
    { nome: "LARANJA", cor: "#FF9800" },
    { nome: "ROSA", cor: "#E91E63" },
    { nome: "MARROM", cor: "#795548" }
];

const tabuleiro = document.getElementById("tabuleiro");
const nomeCor = document.getElementById("nomeCor");
const pontuacaoElemento = document.getElementById("pontuacao");
const rodadaElemento = document.getElementById("rodada");
const mensagem = document.getElementById("mensagem");

const fimJogo = document.getElementById("fimJogo");
const resultadoFinal = document.getElementById("resultadoFinal");

const btnReiniciar = document.getElementById("reiniciar");
const btnJogarNovamente = document.getElementById("jogarNovamente");
const btnVoltar = document.getElementById("voltar");

let pontuacao = 0;
let rodada = 1;
const totalRodadas = 10;

let respostaCor = "";

// Embaralhar vetor
function embaralhar(array){

    for(let i=array.length-1;i>0;i--){

        const j = Math.floor(Math.random()*(i+1));

        [array[i],array[j]] = [array[j],array[i]];
    }

}

// Criar rodada
function novaRodada(){

    mensagem.textContent = "";

    rodadaElemento.textContent = `${rodada} / ${totalRodadas}`;

    tabuleiro.innerHTML = "";

    let opcoes = [...cores];

    embaralhar(opcoes);

    opcoes = opcoes.slice(0,4);

    const correta = opcoes[Math.floor(Math.random()*4)];

    respostaCor = correta.nome;

    nomeCor.textContent = correta.nome;

    opcoes.forEach(c=>{

        const botao = document.createElement("div");

        botao.classList.add("cor");

        botao.style.background = c.cor;

        botao.addEventListener("click",()=>clicou(c.nome));

        tabuleiro.appendChild(botao);

    });

}

// Clique
function clicou(nome){

    if(nome === respostaCor){

        pontuacao++;

        pontuacaoElemento.textContent = pontuacao;

        mensagem.style.color = "#28a745";

        mensagem.textContent = "✔ Muito bem!";

    }else{

        mensagem.style.color = "#d32f2f";

        mensagem.textContent = "✖ Tente novamente!";

        return;

    }

    rodada++;

    if(rodada > totalRodadas){

        terminar();

        return;

    }

    setTimeout(novaRodada,700);

}

// Tela final
function terminar(){

    resultadoFinal.innerHTML = `
        Você acertou <strong>${pontuacao}</strong>
        de <strong>${totalRodadas}</strong> cores.
    `;

    fimJogo.classList.remove("oculto");

}

// Reiniciar
function reiniciar(){

    pontuacao = 0;

    rodada = 1;

    pontuacaoElemento.textContent = "0";

    fimJogo.classList.add("oculto");

    novaRodada();

}

// Eventos
btnReiniciar.addEventListener("click",reiniciar);

btnJogarNovamente.addEventListener("click",reiniciar);

btnVoltar.addEventListener("click",()=>{

    window.location.href="../../index.html";

});

// Iniciar
reiniciar();