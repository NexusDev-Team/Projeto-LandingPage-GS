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