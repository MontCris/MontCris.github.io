function correo() {
    const lista_palabras = ["cristian", ".", "montielC", "@", "outlook", ".", "cl"];
    let palabra_completa = "mailto:";
    for (let i = 0; i < lista_palabras.length; i++) {
        palabra_completa += lista_palabras[i]
    }
    window.location.href = palabra_completa
}

function aplicarTemaSegunPreferencia() {
    // Detecta si el usuario tiene preferencia por el modo oscuro
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark_mode_page');  // Aplica modo oscuro
    } else {
        document.body.classList.add('light_mode_page'); // Aplica modo claro
    }
}

// Llama a la función al cargar la página
window.onload = aplicarTemaSegunPreferencia;

// Detecta cuando cambia la preferencia del usuario (por si lo cambian mientras navegan)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const nuevoTemaOscuro = e.matches;
    if (nuevoTemaOscuro) {
        document.body.classList.remove('light_mode_page');
        document.body.classList.add('dark_mode_page');
    } else {
        document.body.classList.remove('dark_mode_page');
        document.body.classList.add('light_mode_page');
    }
});


document.querySelectorAll('.fila').forEach(fila => {
    fila.addEventListener('click', () => {
        fila.classList.toggle('expanded');  // Alterna la clase "expanded" al hacer clic
    });
});

const dark_mode = document.getElementById("toggle_dark_mode");

const ligth_mode = document.getElementById("toggle_light_mode");


function toggle(modo) {
    var page = document.body;
    var button_toggle = document.getElementById("toggle");
    switch (modo) {
        case "light":
            page.setAttribute("class", "dark_mode_page");
            dark_mode.setAttribute("fill", "#7a7a93") //on

            ligth_mode.setAttribute("fill", "#000000") //off

            button_toggle.setAttribute("onclick", "toggle('dark')");
            break;

        case "dark":
            page.setAttribute("class", "light_mode_page");
            dark_mode.setAttribute("fill", "#000000") //off

            ligth_mode.setAttribute("fill", "#ff9700") //on

            button_toggle.setAttribute("onclick", "toggle('light')");
            break;
    }

}
function mostrar_sidebar() {
    const side_bar = document.querySelector('.sidebar');
    side_bar.style.display = 'flex'
}
function esconder_sidebar() {
    const side_bar = document.querySelector('.sidebar');
    side_bar.style.display = 'none'
}