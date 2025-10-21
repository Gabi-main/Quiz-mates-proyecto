// --- DATOS DEL QUIZ: Preguntas de Límites de Cálculo ---
const preguntas = [
    {
        pregunta: "Teórico: ¿Qué tipo de indeterminación resulta de evaluar $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ directamente?",
        opciones: ["$\\frac{\\infty}{\\infty}$", "$\\infty - \\infty$", "$\\frac{0}{0}$", "$1^{\\infty}$"],
        respuestaCorrecta: "$\\frac{0}{0}$",
        tipo: "Teórico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite de $\\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{x^2 - 2}$?",
        opciones: ["$\infty$", "3", "0", "$\\frac{3}{2}$"],
        respuestaCorrecta: "3",
        tipo: "Práctico"
    },
    {
        pregunta: "Teórico: ¿Qué método se suele aplicar para resolver una indeterminación $\\frac{0}{0}$ con funciones polinómicas?",
        opciones: ["Racionalización", "Regla de L'Hôpital", "Factorización", "Teorema de Sandwích"],
        respuestaCorrecta: "Factorización",
        tipo: "Teórico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite de $\\lim_{x \\to 0} \\frac{\\sin(x)}{x}$?",
        opciones: ["0", "1", "$\\infty$", "No existe"],
        respuestaCorrecta: "1",
        tipo: "Práctico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite de $\\lim_{x \\to 0^+} \\frac{1}{x}$?",
        opciones: ["$-\\infty$", "0", "$+\\infty$", "1"],
        respuestaCorrecta: "$+\\infty$",
        tipo: "Práctico"
    }
];

// --- VARIABLES DE ESTADO DEL QUIZ ---
let nombreUsuario = '';
let puntuacion = 0;
let indicePreguntaActual = 0;
let preguntasMezcladas = [];

// --- ELEMENTOS DEL DOM ---
const $nameSection = document.getElementById('name-input-section');
const $quizContainer = document.getElementById('quiz-container');
const $questionText = document.getElementById('question-text');
const $optionsContainer = document.getElementById('options-container');
const $currentScore = document.getElementById('current-score');
const $questionNumber = document.getElementById('question-number');
const $restartButton = document.getElementById('restart-button');

// --- LÓGICA DE JUEGO ---

/**
 * Inicia el quiz: guarda el nombre y muestra el contenedor del quiz.
 */
function iniciarQuiz() {
    const playerNameInput = document.getElementById('playerName');
    nombreUsuario = playerNameInput.value.trim();

    if (nombreUsuario.length < 2) {
        alert('Por favor, ingresa un nombre válido para comenzar.');
        return;
    }

    // Ocultar sección de nombre y mostrar el quiz
    $nameSection.classList.add('hidden');
    $quizContainer.classList.remove('hidden');
    $restartButton.classList.add('hidden');
    
    // Mezclar preguntas para que el orden cambie en cada juego
    preguntasMezcladas = [...preguntas].sort(() => Math.random() - 0.5);
    
    indicePreguntaActual = 0;
    puntuacion = 0;
    $currentScore.textContent = puntuacion;

    mostrarPregunta();
    cargarPuntuaciones(); // Carga las puntuaciones al inicio para mostrarlas.
}

/**
 * Muestra la pregunta actual y sus opciones.
 */
function mostrarPregunta() {
    if (indicePreguntaActual >= preguntasMezcladas.length) {
        finalizarQuiz();
        return;
    }

    const pregunta = preguntasMezcladas[indicePreguntaActual];
    
    $questionNumber.textContent = `Pregunta ${indicePreguntaActual + 1}/${preguntasMezcladas.length} (${pregunta.tipo})`;
    $questionText.innerHTML = pregunta.pregunta; // Usar innerHTML para interpretar LaTeX/HTML

    $optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    // Crear y añadir botones de opción
    pregunta.opciones.forEach(opcion => {
        const button = document.createElement('button');
        button.innerHTML = opcion; // Usar innerHTML para opciones con LaTeX
        button.onclick = () => verificarRespuesta(opcion);
        $optionsContainer.appendChild(button);
    });
}

/**
 * Verifica la respuesta del usuario, actualiza la puntuación y avanza.
 * @param {string} opcionSeleccionada - La opción que el usuario eligió.
 */
function verificarRespuesta(opcionSeleccionada) {
    const pregunta = preguntasMezcladas[indicePreguntaActual];
    
    // Desactivar todos los botones para evitar doble clic
    Array.from($optionsContainer.children).forEach(btn => btn.disabled = true);
    
    if (opcionSeleccionada === pregunta.respuestaCorrecta) {
        puntuacion++;
        $currentScore.textContent = puntuacion;
        // Opcional: Feedback visual de respuesta correcta (puedes añadir una clase CSS)
    } else {
        // Opcional: Feedback visual de respuesta incorrecta
    }

    // Avanzar a la siguiente pregunta después de un breve retraso
    setTimeout(() => {
        indicePreguntaActual++;
        mostrarPregunta();
    }, 500); // 0.5 segundos de pausa
}

/**
 * Finaliza el quiz, registra la puntuación y muestra el resultado.
 */
function finalizarQuiz() {
    $quizContainer.classList.add('hidden');
    $restartButton.classList.remove('hidden');

    alert(`¡Quiz Finalizado, ${nombreUsuario}! Tu puntuación final es: ${puntuacion} de ${preguntasMezcladas.length}.`);

    guardarPuntuacion(nombreUsuario, puntuacion);
    cargarPuntuaciones();
}

// --- LÓGICA DE PUNTUACIONES LOCALES (LocalStorage) ---

const LS_KEY = 'mathQuizHighScores';

/**
 * Carga las puntuaciones guardadas del LocalStorage.
 * @returns {Array} Array de objetos {nombre: string, score: number}.
 */
function obtenerPuntuaciones() {
    const scoresJSON = localStorage.getItem(LS_KEY);
    return scoresJSON ? JSON.parse(scoresJSON) : [];
}

/**
 * Guarda la nueva puntuación en el LocalStorage.
 * @param {string} nombre - Nombre del jugador.
 * @param {number} score - Puntuación obtenida.
 */
function guardarPuntuacion(nombre, score) {
    const scores = obtenerPuntuaciones();
    
    scores.push({ nombre: nombre, score: score });
    
    // Ordenar de mayor a menor puntuación
    scores.sort((a, b) => b.score - a.score);

    // Limitar el registro a, por ejemplo, los 10 mejores
    const topScores = scores.slice(0, 10); 
    
    localStorage.setItem(LS_KEY, JSON.stringify(topScores));
}

/**
 * Renderiza la tabla de puntuaciones en el HTML.
 */
function cargarPuntuaciones() {
    const scores = obtenerPuntuaciones();
    const $tbody = document.querySelector('#high-scores-table tbody');
    
    $tbody.innerHTML = ''; // Limpiar tabla

    if (scores.length === 0) {
        $tbody.innerHTML = '<tr><td colspan="2">Aún no hay puntuaciones registradas. ¡Sé el primero!</td></tr>';
        return;
    }

    scores.forEach((item, index) => {
        const row = $tbody.insertRow();
        
        const cellName = row.insertCell();
        cellName.textContent = item.nombre;
        
        const cellScore = row.insertCell();
        cellScore.textContent = item.score;
        
        // Opcional: Destacar el primer lugar
        if (index === 0) {
            row.style.backgroundColor = '#fffacd'; // color oro
            cellName.textContent += ' 👑';
        }
    });
}

// Cargar puntuaciones al cargar la página por primera vez
window.onload = cargarPuntuaciones;
