<!-- BOTÕES PARA MUDAR A COR -->
prompt: Implementação de 3 opções de troca de cor (TEMA) de fundo da página 

me fale como adicionar esses requisitos no meu 

<!-- RESPOSTA -->

Troca de tema com 3 cores

Coloque os botões no HTML, por exemplo no header ou antes do main:

HTML: 

<div class="temas">
    <button onclick="trocarTema('laranja')">Laranja</button>
    <button onclick="trocarTema('azul')">Azul</button>
    <button onclick="trocarTema('roxo')">Roxo</button>
</div>

CSS:

.temas {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    background-color: var(--fundo-principal);
}

.temas button {
    padding: 8px 14px;
    border: 1px solid var(--cor-destaque);
    background-color: transparent;
    color: var(--texto-principal);
    border-radius: 8px;
    cursor: pointer;
    font-family: var(--font-family2);
}

.temas button:hover {
    background-color: var(--cor-destaque);
    color: var(--fundo-principal);
}

JS:

function trocarTema(tema) {
    const root = document.documentElement;

    if (tema === 'laranja') {
        root.style.setProperty('--cor-destaque', '#FF6A1A');
        root.style.setProperty('--cor-destaque-claro', '#FF9A3C');
    }

    if (tema === 'azul') {
        root.style.setProperty('--cor-destaque', '#00E5FF');
        root.style.setProperty('--cor-destaque-claro', '#66F2FF');
    }

    if (tema === 'roxo') {
        root.style.setProperty('--cor-destaque', '#7C3AED');
        root.style.setProperty('--cor-destaque-claro', '#A78BFA');
    }
}

Isso muda a cor dos botões, detalhes, bordas e textos destacados porque seu CSS já usa variáveis.

esse resultado muda apenas o hover dos itens no header, mudei o JS e o CSS para que ele mudasse a cor do texto da página também, resultado final:

adicionei essa variavel no css: --descricao-card: #9A9A9A;
para ser a cor padrão do texto 

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

mudei as cores e adicionei para mudar a cor do texto do card também.

<!-- --------------------------------------------------------------- -->

<!-- IMPLEMENTAÇÃO DE SLIDESHOW COM IMAGENS RELACIONADAS AO TEMA -->

prompt: Implementação de slideshow com 3 imagens relacionadas ao tema da solução.

me fale como adicionar esse requisito no meu projeto.

<!-- RESPOSTA -->

Foi criado um slideshow automático utilizando HTML, CSS e JavaScript para exibir imagens relacionadas a cada seção do projeto.

HTML:

Foi adicionada uma estrutura contendo um container `.slideshow` e múltiplos elementos `.slide`, cada um com uma imagem representando o conteúdo da seção.

Exemplo:

```html
<div class="slideshow">
    <div class="slide active">
        <img src="./src/assets/mineracao.jpg" alt="Mineração">
    </div>

    <div class="slide">
        <img src="./src/assets/maquinaDeMineracao.jpg" alt="Máquina">
    </div>

    <div class="slide">
        <img src="./src/assets/minananatureza.jpg" alt="Mina">
    </div>
</div>
```

CSS:

Foi criada a estilização do slideshow utilizando posicionamento absoluto, transições de opacidade e responsividade para dispositivos móveis.

Principais elementos:

```css
.slideshow{
    position: relative;
    width: 50%;
    height: 450px;
    overflow: hidden;
}

.slide{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s ease;
}

.slide.active{
    opacity: 1;
}
```

JavaScript:

Inicialmente foi desenvolvido um slideshow utilizando:

```js
const slides = document.querySelectorAll('.slide');
```

Porém, esse código fazia todos os slideshows da página funcionarem como um único slideshow, ocasionando falhas, desaparecimento de imagens e transições incorretas.

A solução foi criar um slideshow independente para cada container:

```js
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
```

<!-- Resultado final:

Cada seção passou a possuir seu próprio slideshow independente, exibindo imagens relacionadas ao tema apresentado. Além disso, foi implementada a alternância automática das imagens, melhorando a experiência visual e tornando a navegação mais dinâmica e intuitiva. -->

<!-- --------------------------------------------------------------- -->

<!-- ARRUMANDO FORMATAÇÃO PARA MOBILE -->

prompt: * meu index e meu css * como arrumar a formatação para mobile

<!-- RESPOSTA -->

Hoje seu p está com font-size: 2rem, isso é muito grande para celular. E seu h1, h2 está assim:

font-size: clamp(4.5rem, 5vw, 4.3rem);

Isso está errado porque o primeiro valor é maior que o último. O certo seria algo como:

font-size: clamp(2.2rem, 8vw, 4rem);

Adicione esse CSS no final do seu arquivo:

@media (max-width: 768px) {

    header {
        padding: 18px 4%;
        position: sticky;
        top: 0;
        z-index: 20;
    }

    .temas {
        padding: 10px 0;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 15px;
    }

    .temas button {
        padding: 7px 10px;
        font-size: 0.8rem;
    }

    .menu-hamburguer {
        display: flex;
        margin: 0 auto;
    }

    nav {
        display: none !important;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: rgba(3, 3, 3, 0.95);
        padding: 25px 0;
        z-index: 1001;
    }

    nav.active {
        display: flex !important;
        justify-content: center;
    }

    nav ul {
        flex-direction: column;
        gap: 18px;
        align-items: center;
    }

    header nav ul li a {
        font-size: 0.9rem;
        letter-spacing: 2px;
    }

    #imgFundo {
        height: 80vh;
        object-fit: cover;
        object-position: center;
    }

    #container section {
        min-height: auto;
        padding: 70px 5%;
    }

    .secao-com-slide,
    .secao-com-slide.reverse {
        flex-direction: column !important;
        gap: 30px;
        padding: 70px 5%;
    }

    .slideshow {
        width: 100%;
        height: 260px;
        max-width: 100%;
    }

    .slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slide-text {
        left: 15px;
        bottom: 15px;
        font-size: 1rem;
        max-width: 85%;
    }

    .secao-com-slide .card,
    .card {
        width: 100%;
        max-width: 100%;
        padding: 28px 20px;
        border-radius: 14px;
    }

    h1,
    h2 {
        font-size: clamp(2.1rem, 10vw, 3rem);
        line-height: 1.1;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        max-width: 100%;
    }

    .alvo-titulo span,
    .aplicacao-titulo span {
        display: block;
    }
}

<!-- Resultado final: 
diminui um pouco o titulo deixando o primeiro tamanho do clamp menor que o ultimo e adicionei esse media no fim do CSS -->

<!-- --------------------------------------------------------------- -->

<!-- Quiz -->

prompt: * meu index e meu css * 
- Formulários com validação para impedir envio de campos vazios 
- Quiz dinâmico contendo 10 perguntas sobre o tema 
- Exibição do resultado final do quiz de fundo da página

como adicionar no meu projeto.

<!-- RESPOSTA -->

Quiz com 10 perguntas

Coloque esse HTML:

<section id="quiz-section">
    <div class="card quiz-card">
        <h2>Quiz TetraLab</h2>

        <div id="quiz-area">
            <p id="numero-pergunta"></p>
            <h3 id="pergunta-quiz"></h3>

            <div id="opcoes-quiz"></div>

            <button id="proxima-quiz">Próxima</button>
        </div>

        <div id="resultado-quiz" class="hidden">
            <h3>Resultado Final</h3>
            <p id="pontuacao-final"></p>
            <p id="mensagem-final"></p>

            <button id="reiniciar-quiz">Refazer Quiz</button>
        </div>
    </div>
</section>

CSS:

.quiz-card {
    max-width: 750px;
    gap: 20px;
}

#numero-pergunta {
    color: var(--cor-destaque-claro);
    font-size: 1rem;
}

#pergunta-quiz {
    color: var(--texto-principal);
    font-family: var(--font-family2);
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 20px;
}

#opcoes-quiz {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.opcao {
    padding: 14px;

    background-color: rgba(11, 11, 13, 0.9);
    color: var(--texto-secundario);

    border: 1px solid var(--cor-destaque);
    border-radius: 8px;

    font-family: var(--font-family2);
    cursor: pointer;
    transition: 0.3s;
}

.opcao:hover {
    color: var(--texto-principal);
    box-shadow: 0 0 12px var(--cor-destaque);
}

.opcao.selecionada {
    background-color: var(--cor-destaque);
    color: var(--fundo-principal);
}

#proxima-quiz,
#reiniciar-quiz {
    width: 100%;
    margin-top: 20px;
    padding: 14px;

    background-color: transparent;
    color: var(--texto-principal);

    border: 1px solid var(--cor-destaque);
    border-radius: 8px;

    font-family: var(--font-family1);
    text-transform: uppercase;
    cursor: pointer;
}

#proxima-quiz:hover,
#reiniciar-quiz:hover {
    background-color: var(--cor-destaque);
    color: var(--fundo-principal);
}

#resultado-quiz {
    text-align: center;
}

#resultado-quiz h3 {
    color: var(--cor-destaque);
    font-family: var(--font-family1);
    font-size: 2rem;
}

.hidden {
    display: none;
}

JS:

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


depois pedi para ele deixar em forma de pop up:

HTML: 
<section id="quiz-section">
    <button id="abrir-quiz">Abrir Quiz</button>
</section>

<div id="modal-quiz" class="modal hidden">
    <div class="modal-conteudo">

        <button id="fechar-quiz" class="fechar-modal">X</button>

        <div class="quiz-card">
            <h2>Quiz TetraLab</h2>

            <div id="quiz-area">
                <p id="numero-pergunta"></p>
                <h3 id="pergunta-quiz"></h3>

                <div id="opcoes-quiz"></div>

                <button id="proxima-quiz">Próxima</button>
            </div>

            <div id="resultado-quiz" class="hidden">
                <h3>Resultado Final</h3>
                <p id="pontuacao-final"></p>
                <p id="mensagem-final"></p>

                <button id="reiniciar-quiz">Refazer Quiz</button>
            </div>
        </div>

    </div>
</div>

CSS:
#quiz-section {
    min-height: 100vh;
    padding: 70px 5%;

    display: flex;
    justify-content: center;
    align-items: center;
}

#abrir-quiz {
    padding: 16px 28px;

    background-color: transparent;
    color: var(--texto-principal);

    border: 1px solid var(--cor-destaque);
    border-radius: 10px;

    font-family: var(--font-family1);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;

    cursor: pointer;
    transition: 0.3s;
}

#abrir-quiz:hover {
    background-color: var(--cor-destaque);
    color: var(--fundo-principal);
    box-shadow: 0 0 18px var(--cor-destaque);
}

/* Fundo escuro do modal */
.modal {
    position: fixed;
    inset: 0;

    background-color: rgba(0, 0, 0, 0.85);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 9999;
    padding: 20px;
}

/* Caixa central */
.modal-conteudo {
    width: 100%;
    max-width: 750px;
    position: relative;
}

/* Botão fechar */
.fechar-modal {
    position: absolute;
    top: -15px;
    right: -15px;

    width: 42px;
    height: 42px;

    background-color: var(--cor-destaque);
    color: var(--fundo-principal);

    border: none;
    border-radius: 50%;

    font-family: var(--font-family1);
    font-weight: bold;

    cursor: pointer;
    z-index: 10000;
}

/* Card do quiz */
.quiz-card {
    width: 100%;
    padding: 40px 32px;

    background-color: rgba(3, 3, 3, 0.95);
    border: 1px solid var(--cor-destaque);
    border-radius: 18px;

    box-shadow: 0 0 30px rgba(255, 106, 26, 0.35);
}

.quiz-card h2 {
    color: var(--texto-principal);
    font-family: var(--font-family1);
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
}

#numero-pergunta {
    color: var(--cor-destaque-claro);
    font-size: 1rem;
}

#pergunta-quiz {
    color: var(--texto-principal);
    font-family: var(--font-family2);
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 20px;
}

#opcoes-quiz {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.opcao {
    padding: 14px;

    background-color: rgba(11, 11, 13, 0.9);
    color: var(--texto-secundario);

    border: 1px solid var(--cor-destaque);
    border-radius: 8px;

    font-family: var(--font-family2);
    cursor: pointer;
    transition: 0.3s;
}

.opcao:hover {
    color: var(--texto-principal);
    box-shadow: 0 0 12px var(--cor-destaque);
}

.opcao.selecionada {
    background-color: var(--cor-destaque);
    color: var(--fundo-principal);
}

#proxima-quiz,
#reiniciar-quiz {
    width: 100%;
    margin-top: 20px;
    padding: 14px;

    background-color: transparent;
    color: var(--texto-principal);

    border: 1px solid var(--cor-destaque);
    border-radius: 8px;

    font-family: var(--font-family1);
    text-transform: uppercase;

    cursor: pointer;
    transition: 0.3s;
}

#proxima-quiz:hover,
#reiniciar-quiz:hover {
    background-color: var(--cor-destaque);
    color: var(--fundo-principal);
}

#resultado-quiz {
    text-align: center;
}

#resultado-quiz h3 {
    color: var(--cor-destaque);
    font-family: var(--font-family1);
    font-size: 2rem;
    margin-bottom: 20px;
}

.hidden {
    display: none;
}

JS:
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


depois mudei o #quiz-section no css para deixar menos longe:
 
 #quiz-section {
    min-height: auto;
    padding: 30px 5% 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

<!-- Resultado final: adicionei o quiz com 10 questões, não deixa avançar ser colocar a resposta, mostra resultado final e está em forma de pop up. clica no botão e abre o quiz -->

<!-- --------------------------------------------------------------- -->

<!-- Forms no quiz -->

prompt: adicione um forms para contato dentro do quiz feito.

<!-- RESPOSTA -->

Troque esta parte do resultado do quiz

Você tem isso:

<div id="resultado-quiz" class="hidden">
    <h3>Resultado Final</h3>
    <p id="pontuacao-final"></p>
    <p id="mensagem-final"></p>

    <button id="reiniciar-quiz">Refazer Quiz</button>
</div>

Troque por isso:

<div id="resultado-quiz" class="hidden">
    <h3>Resultado Final</h3>
    <p id="pontuacao-final"></p>
    <p id="mensagem-final"></p>

    <form id="form-contato">
        <h4>Entre em contato</h4>

        <input type="text" id="nome" placeholder="Digite seu nome">
        <input type="email" id="email" placeholder="Digite seu e-mail">
        <textarea id="mensagem" placeholder="Digite sua mensagem"></textarea>

        <button type="submit">Enviar</button>

        <p id="erro-form"></p>
    </form>

    <button id="reiniciar-quiz">Refazer Quiz</button>
</div>


CSS do formulário dentro do quiz

Adicione no final do seu CSS:
#form-contato {
    width: 100%;
    margin-top: 25px;

    display: flex;
    flex-direction: column;
    gap: 12px;
}

#form-contato h4 {
    color: var(--texto-principal);
    font-family: var(--font-family1);
    font-size: 1.2rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
}

#form-contato input,
#form-contato textarea {
    width: 100%;
    padding: 14px;

    background-color: rgba(11, 11, 13, 0.9);
    color: var(--texto-principal);

    border: 1px solid var(--cor-destaque);
    border-radius: 8px;

    font-family: var(--font-family2);
    outline: none;
}

#form-contato textarea {
    height: 100px;
    resize: none;
}

#form-contato input::placeholder,
#form-contato textarea::placeholder {
    color: var(--texto-secundario);
}

#form-contato input:focus,
#form-contato textarea:focus {
    border-color: var(--cor-destaque-claro);
    box-shadow: 0 0 10px var(--cor-destaque);
}

#form-contato button {
    padding: 14px;

    background-color: transparent;
    color: var(--texto-principal);

    border: 1px solid var(--cor-destaque);
    border-radius: 8px;

    font-family: var(--font-family1);
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
}

#form-contato button:hover {
    background-color: var(--cor-destaque);
    color: var(--fundo-principal);
}

#erro-form {
    color: var(--cor-destaque-claro);
    font-size: 1rem;
    text-align: center;
}

JS da validação

Coloque essa parte no seu script.js, de preferência depois do código do quiz:

// FORMULÁRIO DENTRO DO QUIZ

const formContato = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const erroForm = document.getElementById("erro-form");

if (formContato) {
    formContato.addEventListener("submit", function(event) {
        event.preventDefault();

        if (
            nome.value.trim() === "" ||
            email.value.trim() === "" ||
            mensagem.value.trim() === ""
        ) {
            erroForm.textContent = "Preencha todos os campos antes de enviar.";
            return;
        }

        erroForm.textContent = "Mensagem enviada com sucesso!";

        nome.value = "";
        email.value = "";
        mensagem.value = "";
    });
}

<!-- Resultado final: adicionei o forms com validação que pede nome, email e uma mensagem. Está inserido no final do quiz -->