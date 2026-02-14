const boton = document.getElementById("botonCherry");
const fondo = document.getElementById("fondo");
const musica = document.getElementById("musica");

boton.addEventListener("click", () => {

    fondo.style.background = "radial-gradient(circle at center,  #4b006e, #120018)";
    fondo.style.transition = "background 4s cubic-bezier(.4,0,.2,1)";

    fondo.classList.add("noche");

    boton.style.transform = "translate(-50%, -300px)";
    boton.style.opacity = "0";

    setTimeout(() => {
        boton.style.display = "none";
        crearEstrellas();
        iniciarEscena();
        musica.play();
    }, 2000);
});

function iniciarEscena() {
    document.getElementById("suelo").style.bottom ="0";
    caerSemilla();
}

function caerSemilla() {
    const semilla = document.getElementById("semilla");
    semilla.style.display = "block";
    semilla.style.top = "-50px";

    setTimeout(() => {
        semilla.style.transition = "top 2s ease";
        semilla.style.top = "80%";
    }, 100);
    setTimeout(crearTulipanes, 2200);
}

function crecerPlantas () {
    const plantas = document.getElementById("plantas");
    const semilla = document.getElementById("semilla");

    for(let i = 0; i < 5; i++) {
        let brote = document.createElement("div");
        brote.className = "brote";
        brote.style.left = (40 + i * 5) + "%";
        plantas.appendChild(brote);
    }
    setTimeout(moverCamara, 2000);
}

function moverCamara() {
    const escena = document.getElementById("escena")
    escena.style.transition = "transform 3s cubic-bezier(.4,0,.2,1)";
    escena.style.transform = "scale(0.85)";

    setTimeout(() => {
        escena.style.transform = "scale(0.9)";
        mostrarMonitos();
    }, 3000);
}

function mostrarMonitos() {
    console.log("esto no deberia de aparecer dos veces");

    crearMonos();
    mostrarTextos();
}

function mostrarTextos () {
    const textos = document.getElementById("textos");

    textos.innerHTML = `
    <h2 style="position:absolute; bottom: 280px; width:100%; text-align:center; color: white;">
        Pues eramos
    </h2>
    
    <div style="position:absolute; bottom:240px; left:47%; color:white;">Tu 💜</div>
    <div style="position:absolute; bottom:240px; left:52%; color:white;">Yo ❤️</div>
    `;
}

function crearEstrellas () {
    const fondo = document.getElementById("fondo");

    for (let i = 0; i < 120; i++) {
        let estrella = document.createElement("div");

        estrella.className = "estrella";

        estrella.style.top = Math.random() * 100 + "%";
        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.animationDelay = Math.random() * 5 + "s";

        fondo.appendChild(estrella);
    }
}

function crearTulipanes() {
    const cont = document.getElementById("plantas");
    cont.innerHTML = "";


    for (let i = 0; i < 20; i++) {
        const tulipan = document.createElement("div");
        tulipan.className = "tulipan";
        tulipan.style.left = (35 + i * 1.5) + "%";

        const tallo = document.createElement("div");
        tallo.className = "tallo";

        const flor = document.createElement("div");
        flor.className = "flor";

        tulipan.appendChild(flor);
        tulipan.appendChild(tallo);
        cont.appendChild(tulipan);
    }
        setTimeout(moverCamara, 2000);
}

const contenedor = document.getElementById("monitos");

function crearMonos() {
    const contenedor = document.getElementById("monitos");

    contenedor.innerHTML = ""; // limpia por si se llama más de una vez

    for (let i = 0; i < 2; i++) {
        const mono = document.createElement("div");
        mono.className = "mono";

        mono.innerHTML = `
            <div class="cabeza"></div>
            <div class="cuerpo"></div>
            <div class="brazo izquierdo"></div>
            <div class="brazo derecho"></div>
            <div class="pierna izquierda"></div>
            <div class="pierna derecha"></div>
        `;

        contenedor.appendChild(mono);
    }
}
