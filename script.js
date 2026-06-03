/* ==========================================================================
   ÁREA DE EDIÇÃO FÁCIL - ALTERE OS DADOS DO SEU CASAL AQUI
========================================================================== */

const CONFIG = {
    nomesCasal: "George Filho & Natalia Duartt",
    dataInicio: "2022-12-06 20:30:00",

    tituloCarta: "Para o amor da minha vida",
    resumoCarta: "Clique aqui, preparei uma surpresa para você... ❤️",

    // ===== CONFIGURAÇÃO DE FOTOS =====
    prefixoFotos: "foto",
    extensaoFotos: ".jpg",

    sliderFotoInicio: 1,
    sliderFotoFim: 10,

    carrosselFotoInicio: 11,
    carrosselFotoFim: 20,

    // ===== CONFIGURAÇÃO DE MÚSICA LOCAL MP3 =====
    // Coloque o arquivo MP3 na pasta "musica/" e digite o nome correto aqui
    arquivoMP3: "musica/nossa-musica.mp3",
    nomeMusica: "Dilsinho - Duas",

    // ===== TEXTO PRINCIPAL =====
    textoApaixonante: `Meu amor,

"Sei que passamos por dias difíceis e que o peso das palavras ou dos silêncios acabou nos afastando. Mas o meu amor por você não diminuiu um segundo sequer. Pelo contrário, essa distância só me fez perceber o quanto a minha vida fica cinza sem o seu sorriso e o quanto você é essencial para mim. Reconciliar não é fingir que nada aconteceu, mas olhar para o que nos machucou e decidir, juntos, que o nosso amor é muito maior do que qualquer erro. Quando decidimos dar o passo do noivado, prometemos um futuro um ao outro. E eu continuo aqui, com o coração cheio de planos, querendo construir cada detalhe desse amanhã ao seu lado. Me desculpa pelas minhas falhas. Eu quero aprender com você, crescer com você e segurar a sua mão com ainda mais força daqui para frente. Você é o meu porto seguro, a minha escolha de todos os dias e o grande amor da minha vida. Vamos deixar o que passou para trás e recomeçar a nossa história? Eu amo você!

Quando encontrei você, amor
E vi que não preciso mais andar sozinho
Seu amor é o motivo de hoje eu dizer que sou feliz, amor
Feliz porque eu posso dividir meus dias com você
E não me preocupar como será o amanhã
Se estamos juntos
E não me preocupar como será o amanhã
Se estamos sempre juntos 🎼🎶💖❣️"`
};

/* ==========================================================================
   FRASES ROMÂNTICAS DO CORAÇÃO
========================================================================== */

const FRASES_CORACAO = [
    "Você é o meu lugar favorito no mundo inteirinho! ❤️",
    "Sete bilhões de sorrisos no mundo, e o seu é o meu único predileto.",
    "O amor é lindo, mas o seu sorriso supera qualquer definição.",
    "Dizer que te amo já ficou pequeno perto de tudo que sinto por você.",
    "Com você, até os dias mais nublados ganham a cor mais linda do universo.",
    "Você é a resposta exata para todas as minhas orações.",
    "Se eu pudesse viver toda a minha vida de novo, te encontraria muito mais cedo.",
    "Meu amor por você cresce a cada batida do meu próprio coração.",
    "Você não imagina o tamanho do sorriso que eu dou quando penso em você.",
    "Obrigado por transformar os meus momentos simples em memórias inesquecíveis.",
    "Estarei ao seu lado em cada vitória, em cada abraço e em todas as estações.",
    "Você é o meu porto seguro, a minha paz eterna e a minha melhor escolha diária.",
    "Te amo hoje, amanhã, depois e por toda a eternidade que nos espera.",
    "Seu carinho reconstruiu tudo de mais lindo que existe em mim.",
    "Não importa onde eu esteja, meu coração sempre vai pertencer a você.",
    "Estar com você é como ouvir a minha música favorita repetidamente sem nunca enjoar.",
    "Você é o sonho mais lindo que Deus me permitiu realizar acordado.",
    "O seu abraço tem o encaixe perfeito para acalmar todo o meu mundo.",
    "Prometo te amar nos pequenos detalhes e cuidar de você para sempre.",
    "Minha vida ganhou uma trilha sonora muito mais bonita desde que você chegou."
];

/* ==========================================================================
   INICIALIZAÇÃO DA PÁGINA
========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    carregarConteudoInicial();
    montarEstruturasDeFotos();
});

function carregarConteudoInicial() {
    document.getElementById("card-title").innerText = CONFIG.tituloCarta;
    document.getElementById("card-short-text").innerText = CONFIG.resumoCarta;
    document.getElementById("couple-names").innerText = CONFIG.nomesCasal;
    document.getElementById("main-love-text").innerText = CONFIG.textoApaixonante;
    
    // Vincula o título da música configurado ao player
    const musicTitle = document.getElementById("music-title");
    if (musicTitle) {
        musicTitle.innerText = CONFIG.nomeMusica;
    }

    // Vincula dinamicamente o arquivo MP3 local à tag de áudio escondida
    const localAudio = document.getElementById("local-audio-player");
    if (localAudio) {
        localAudio.src = CONFIG.arquivoMP3;
        localAudio.load(); // Deixa o arquivo pré-carregado na memória do celular
    }
}

/* ==========================================================================
   MONTAGEM AUTOMÁTICA DAS FOTOS
========================================================================== */

function montarEstruturasDeFotos() {
    const sliderContainer = document.getElementById("main-slider");
    const dotsContainer = document.getElementById("slider-dots");
    const galleryContainer = document.getElementById("horizontal-gallery");

    if (!sliderContainer || !galleryContainer) return;

    let isFirst = true;
    let indexDot = 0;

    // ===== SLIDER SUPERIOR =====
    for (let i = CONFIG.sliderFotoInicio; i <= CONFIG.sliderFotoFim; i++) {
        const slideDiv = document.createElement("div");
        slideDiv.className = `slide-item ${isFirst ? "active" : ""}`;

        const imgPath = `imag/${CONFIG.prefixoFotos}${i}${CONFIG.extensaoFotos}`;
        slideDiv.style.backgroundImage = `url('${imgPath}')`;
        slideDiv.innerHTML = `<img src="${imgPath}" alt="Nosso momento">`;

        const prevBtn = sliderContainer.querySelector(".prev-btn");
        if (prevBtn) {
            sliderContainer.insertBefore(slideDiv, prevBtn);
        } else {
            sliderContainer.appendChild(slideDiv);
        }

        if (dotsContainer) {
            const dotSpan = document.createElement("span");
            dotSpan.className = `dot ${isFirst ? "active" : ""}`;
            const currentIdx = indexDot;
            dotSpan.onclick = () => showSlide(currentIdx);
            dotsContainer.appendChild(dotSpan);
        }

        isFirst = false;
        indexDot++;
    }

    // ===== GALERIA HORIZONTAL =====
    for (let i = CONFIG.carrosselFotoInicio; i <= CONFIG.carrosselFotoFim; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "gallery-item";
        itemDiv.innerHTML = `
            <img 
                src="imag/${CONFIG.prefixoFotos}${i}${CONFIG.extensaoFotos}" 
                alt="Nosso momento"
                draggable="false"
            >
        `;
        galleryContainer.appendChild(itemDiv);
    }
}

/* ==========================================================================
   CONTROLE DO SLIDER
========================================================================== */

let currentSlide = 0;
let sliderTimer = null;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide-item");
    const dots = document.querySelectorAll(".dot");

    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    if (slides[currentSlide]) slides[currentSlide].classList.add("active");
    if (dots[currentSlide]) dots[currentSlide].classList.add("active");

    resetSliderTimer();
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function resetSliderTimer() {
    if (sliderTimer) clearInterval(sliderTimer);
    sliderTimer = setInterval(() => {
        changeSlide(1);
    }, 4000);
}

/* ==========================================================================
   CRONÔMETRO DO RELACIONAMENTO
========================================================================== */

function atualizarContador() {
    const dataPassada = new Date(CONFIG.dataInicio).getTime();
    const agora = new Date().getTime();
    const diferenca = agora - dataPassada;

    if (isNaN(dataPassada)) {
        document.getElementById("years").innerText = "ERR";
        return;
    }

    const msmAno = 1000 * 60 * 60 * 24 * 365.25;
    const msmDia = 1000 * 60 * 60 * 24;
    const msmHora = 1000 * 60 * 60;
    const msmMinuto = 1000 * 60;

    const anos = Math.floor(diferenca / msmAno);
    const dias = Math.floor((diferenca % msmAno) / msmDia);
    const horas = Math.floor((diferenca % msmDia) / msmHora);
    const minutes = Math.floor((diferenca % msmHora) / msmMinuto);
    const segundos = Math.floor((diferenca % msmMinuto) / 1000);
    const milisegundos = Math.floor(diferenca % 1000);

    const elYears = document.getElementById("years");
    const elDays = document.getElementById("days");
    const elHours = document.getElementById("hours");
    const elMinutes = document.getElementById("minutes");
    const elSeconds = document.getElementById("seconds");
    const elMillis = document.getElementById("milliseconds");

    if (elYears) elYears.innerText = String(anos).padStart(2, "0");
    if (elDays) elDays.innerText = String(dias).padStart(2, "0");
    if (elHours) elHours.innerText = String(horas).padStart(2, "0");
    if (elMinutes) elMinutes.innerText = String(minutes).padStart(2, "0");
    if (elSeconds) elSeconds.innerText = String(segundos).padStart(2, "0");
    if (elMillis) elMillis.innerText = String(milisegundos).padStart(3, "0");
}

/* ==========================================================================
   CORAÇÃO INTERATIVO
========================================================================== */

function popHeart(event) {
    const heart = document.getElementById("clickable-heart");
    const phraseBox = document.getElementById("heart-phrase-box");
    const phraseText = document.getElementById("heart-phrase-text");

    const currentMs = new Date().getMilliseconds();
    const randomIndex = currentMs % FRASES_CORACAO.length;

    if (phraseText) {
        phraseText.innerText = FRASES_CORACAO[randomIndex];
    }

    if (typeof Coracao === "function") {
        for (let i = 0; i < 35; i++) {
            let p = new Coracao();
            p.x = event.clientX || window.innerWidth / 2;
            p.y = event.clientY || window.innerHeight / 2;
            p.velocidadeY = (Math.random() * 4 - 2) * 2;
            p.oscilacaoDistancia = Math.random() * 3 + 1;
            p.tamanho = Math.random() * 15 + 10;
            p.opacidade = Math.random() * 0.7 + 0.3;
            partculas.push(p);
        }
    }

    if (heart) heart.style.transform = "scale(0)";

    setTimeout(() => {
        if (heart) heart.classList.add("hidden");
        if (phraseBox) phraseBox.classList.remove("hidden");
    }, 200);
}

function resetHeart() {
    const heart = document.getElementById("clickable-heart");
    const phraseBox = document.getElementById("heart-phrase-box");

    if (phraseBox) phraseBox.classList.add("hidden");
    if (heart) heart.classList.remove("hidden");

    setTimeout(() => {
        if (heart) heart.style.transform = "scale(1)";
    }, 50);
}

/* ==========================================================================
   ABERTURA DA CARTA
========================================================================== */

function openEnvelope() {
    const wrapper = document.querySelector(".envelope-wrapper");
    if (wrapper) wrapper.classList.add("open");

    setTimeout(() => {
        const welcomeScreen = document.getElementById("welcome-screen");
        const mainContent = document.getElementById("main-content");

        if (welcomeScreen) welcomeScreen.classList.add("fade-out");
        if (mainContent) mainContent.classList.remove("hidden");

        resetSliderTimer();
        setInterval(atualizarContador, 40);
        initScrollReveal();
    }, 1200);
}

/* ==========================================================================
   SCROLL REVEAL
========================================================================== */

function initScrollReveal() {
    const targets = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(target => observer.observe(target));

    setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
    }, 200);
}

/* ==========================================================================
   GALERIA ARRASTÁVEL
========================================================================== */

const sliderGaleria = document.getElementById("horizontal-gallery");
let isDown = false;
let startX;
let scrollLeft;

if (sliderGaleria) {
    sliderGaleria.addEventListener("mousedown", (e) => {
        isDown = true;
        sliderGaleria.classList.add("active");
        startX = e.pageX - sliderGaleria.offsetLeft;
        scrollLeft = sliderGaleria.scrollLeft;
    });

    sliderGaleria.addEventListener("mouseleave", () => { isDown = false; });
    sliderGaleria.addEventListener("mouseup", () => { isDown = false; });

    sliderGaleria.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderGaleria.offsetLeft;
        const walk = (x - startX) * 2;
        sliderGaleria.scrollLeft = scrollLeft - walk;
    });
}

/* ==========================================================================
   SISTEMA DE CONTROLE DA MÚSICA LOCAL (PLAY / PAUSE MP3)
========================================================================== */

let musicaTocando = false;

function toggleMúsica() {
    const localAudio = document.getElementById("local-audio-player");
    if (!localAudio) return;

    const btn = document.getElementById("play-pause-btn");
    const icon = document.querySelector(".music-icon");
    const tip = document.getElementById("music-tip");

    if (!musicaTocando) {
        localAudio.play()
            .then(() => {
                if (btn) {
                    btn.innerText = "⏸";
                    btn.classList.add("playing");
                }
                if (icon) icon.classList.add("playing");
                if (tip) tip.style.display = "none";
                musicaTocando = true;
            })
            .catch(err => console.log("Aguardando interação inicial para tocar: ", err));
    } else {
        localAudio.pause();
        if (btn) {
            btn.innerText = "▶";
            btn.classList.remove("playing");
        }
        if (icon) icon.classList.remove("playing");
        musicaTocando = false;
    }
}

/* ==========================================================================
   PARTÍCULAS DE CORAÇÃO (CANVAS)
========================================================================== */

const canvas = document.getElementById("heartCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let particulas = [];
const maxParticulas = 40;

if (canvas && ctx) {
    function redimensionarCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", redimensionarCanvas);
    redimensionarCanvas();

    class Coracao {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 20;
            this.tamanho = Math.random() * 12 + 6;
            this.velocidadeY = -(Math.random() * 0.8 + 0.4);
            this.oscilacaoVelocidade = Math.random() * 0.02 + 0.01;
            this.oscilacaoDistancia = Math.random() * 1.5;
            this.angulo = Math.random() * Math.PI;
            this.opacidade = Math.random() * 0.4 + 0.15;
        }

        atualizar() {
            this.y += this.velocidadeY;
            this.angulo += this.oscilacaoVelocidade;
            this.x += Math.sin(this.angulo) * this.oscilacaoDistancia;

            if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
                this.reset();
            }
        }

        desenhar() {
            ctx.save();
            ctx.globalAlpha = this.opacidade;
            ctx.translate(this.x, this.y);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-this.tamanho / 2, -this.tamanho / 2, -this.tamanho, this.tamanho / 3, 0, this.tamanho);
            ctx.bezierCurveTo(this.tamanho, this.tamanho / 3, this.tamanho / 2, -this.tamanho / 2, 0, 0);
            ctx.fillStyle = "#ff2a4b";
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < maxParticulas; i++) {
        partculas.push(new Coracao());
    }

    function loopAnimacaoCorta() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particulas.length; i++) {
            partculas[i].atualizar();
            partculas[i].desenhar();
        }
        requestAnimationFrame(loopAnimacaoCorta);
    }

    loopAnimacaoCorta();
}
