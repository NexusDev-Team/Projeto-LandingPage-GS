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