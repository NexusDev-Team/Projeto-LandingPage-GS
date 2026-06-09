// MENU HAMBURGUER

document.addEventListener('DOMContentLoaded', ()=>{
    const menuIcone= document.getElementById("menu-icone");
    const navMenu = document.querySelector("nav");
    if(menuIcone && navMenu){
        menuIcone.onclick=()=>{
            navMenu.classList.toggle("active");
            menuIcone.classList.toggle("open")
        }
    }
})

// BOTÃO QUE MUDA A COR

function trocarTema(tema) {
    const root = document.documentElement;

    if (tema === 'laranja') {
        root.style.setProperty('--cor-destaque', '#FF9A3C');
        root.style.setProperty('--cor-destaque-claro', '#FF9A3C');
        root.style.setProperty('--descricao-card', '#FF9A3C');
    }

    if (tema === 'branco') {
        root.style.setProperty('--cor-destaque', '#F2F2F2');
        root.style.setProperty('--cor-destaque-claro', '#F2F2F2');
        root.style.setProperty('--descricao-card', '#F2F2F2');
    }

    if (tema === 'cinza') {
        root.style.setProperty('--cor-destaque', '#9A9A9A');
        root.style.setProperty('--cor-destaque-claro', '#9A9A9A');
        root.style.setProperty('--descricao-card', '#9A9A9A');
    }
}

//SlideShow
document.querySelectorAll('.slideshow').forEach(slideshow => {

    const slides = slideshow.querySelectorAll('.slide');

    let atual = 0;

    setInterval(() => {

        slides[atual].classList.remove('active');

        atual++;

        if(atual >= slides.length){
            atual = 0;
        }

        slides[atual].classList.add('active');

    }, 4000);

});

//Quiz
const abrirQuiz = document.getElementById("abrir-quiz");
const fecharQuiz = document.getElementById("fechar-quiz");
const modalQuiz = document.getElementById("modal-quiz");

abrirQuiz.addEventListener("click", () => {
    modalQuiz.classList.remove("hidden");
});

fecharQuiz.addEventListener("click", () => {
    modalQuiz.classList.add("hidden");
});

modalQuiz.addEventListener("click", (event) => {
    if (event.target === modalQuiz) {
        modalQuiz.classList.add("hidden");
    }
});

const perguntasQuiz = [
    {
        pergunta: "Qual problema o TetraLab busca resolver?",
        opcoes: [
            "Dependência de terras raras",
            "Falta de redes sociais",
            "Criação de jogos",
            "Produção de papel"
        ],
        resposta: 0
    },
    {
        pergunta: "O que é a tetrataenita?",
        opcoes: [
            "Um tipo de plástico",
            "Um material magnético",
            "Um combustível",
            "Um software"
        ],
        resposta: 1
    },
    {
        pergunta: "Onde a tetrataenita é encontrada naturalmente?",
        opcoes: [
            "Em meteoritos",
            "Em árvores",
            "Em oceanos",
            "Em nuvens"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual material a tetrataenita pode substituir?",
        opcoes: [
            "Ímãs de terras raras",
            "Vidro",
            "Madeira",
            "Papel"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual é um benefício ambiental do projeto?",
        opcoes: [
            "Mais poluição",
            "Menor impacto ambiental",
            "Mais mineração",
            "Mais desperdício"
        ],
        resposta: 1
    },
    {
        pergunta: "Quais tecnologias ajudam o TetraLab?",
        opcoes: [
            "Sensores e automação",
            "Papel e caneta",
            "Somente redes sociais",
            "Nenhuma tecnologia"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual setor pode ser beneficiado?",
        opcoes: [
            "Mobilidade elétrica",
            "Energia renovável",
            "Setor aeroespacial",
            "Todas as alternativas"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual é o objetivo do TetraLab?",
        opcoes: [
            "Viabilizar a produção da tetrataenita",
            "Aumentar a dependência de terras raras",
            "Criar foguetes caseiros",
            "Substituir computadores"
        ],
        resposta: 0
    },
    {
        pergunta: "Por que reduzir o uso de terras raras é importante?",
        opcoes: [
            "Reduz riscos ambientais e econômicos",
            "Impede inovação",
            "Aumenta a poluição",
            "Dificulta a indústria"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual frase representa melhor o projeto?",
        opcoes: [
            "Inovação espacial aplicada à indústria sustentável",
            "Tecnologia sem função",
            "Mineração sem controle",
            "Energia sem planejamento"
        ],
        resposta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let opcaoSelecionada = null;

const numeroPergunta = document.getElementById("numero-pergunta");
const perguntaQuiz = document.getElementById("pergunta-quiz");
const opcoesQuiz = document.getElementById("opcoes-quiz");
const botaoProxima = document.getElementById("proxima-quiz");

const quizArea = document.getElementById("quiz-area");
const resultadoQuiz = document.getElementById("resultado-quiz");
const pontuacaoFinal = document.getElementById("pontuacao-final");
const mensagemFinal = document.getElementById("mensagem-final");
const botaoReiniciar = document.getElementById("reiniciar-quiz");

function carregarPergunta() {
    opcaoSelecionada = null;

    const pergunta = perguntasQuiz[perguntaAtual];

    numeroPergunta.textContent = `Pergunta ${perguntaAtual + 1} de ${perguntasQuiz.length}`;
    perguntaQuiz.textContent = pergunta.pergunta;

    opcoesQuiz.innerHTML = "";

    pergunta.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");

        botao.textContent = opcao;
        botao.classList.add("opcao");

        botao.addEventListener("click", () => {
            selecionarOpcao(botao, index);
        });

        opcoesQuiz.appendChild(botao);
    });
}

function selecionarOpcao(botao, index) {
    const todasOpcoes = document.querySelectorAll(".opcao");

    todasOpcoes.forEach((opcao) => {
        opcao.classList.remove("selecionada");
    });

    botao.classList.add("selecionada");
    opcaoSelecionada = index;
}

function proximaPergunta() {
    if (opcaoSelecionada === null) {
        alert("Escolha uma alternativa antes de continuar.");
        return;
    }

    if (opcaoSelecionada === perguntasQuiz[perguntaAtual].resposta) {
        pontuacao++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntasQuiz.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    quizArea.classList.add("hidden");
    resultadoQuiz.classList.remove("hidden");

    pontuacaoFinal.textContent = `Você acertou ${pontuacao} de ${perguntasQuiz.length} perguntas.`;

    if (pontuacao <= 4) {
        mensagemFinal.textContent = "Você ainda está conhecendo o tema da tetrataenita.";
    } else if (pontuacao <= 7) {
        mensagemFinal.textContent = "Muito bom! Você entendeu bem a proposta do TetraLab.";
    } else {
        mensagemFinal.textContent = "Excelente! Você domina a ideia do projeto.";
    }
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontuacao = 0;
    opcaoSelecionada = null;

    resultadoQuiz.classList.add("hidden");
    quizArea.classList.remove("hidden");

    carregarPergunta();
}

botaoProxima.addEventListener("click", proximaPergunta);
botaoReiniciar.addEventListener("click", reiniciarQuiz);

carregarPergunta();