// --- DATOS DEL QUIZ: Preguntas de Límites de Cálculo MÁS FÁCILES ---
const preguntas = [
    // 1. Sustitución Directa (fácil)
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to 3} (2x + 1) $?",
        opciones: ["$ 5 $", "$ 7 $", "$ 6 $", "$ 9 $"],
        respuestaCorrecta: "$ 7 $", // 2(3) + 1 = 7
        tipo: "Sustitución"
    },
    // 2. Sustitución Directa (polinómico)
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to 1} (x^2 + 4x - 5) $?",
        opciones: ["$ 0 $", "$ 1 $", "$ 4 $", "$ 2 $"],
        respuestaCorrecta: "$ 0 $", // 1 + 4 - 5 = 0
        tipo: "Sustitución"
    },
    // 3. Límite al Infinito (Grados Iguales - Coeficientes 1/1)
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to \\infty} \\frac{x^2 - 1}{x^2 + 5} $?",
        opciones: ["$ \\infty $", "$ 0 $", "$ 1 $", "$ -1 $"],
        respuestaCorrecta: "$ 1 $", // 1/1 = 1
        tipo: "Infinito"
    },
    // 4. Límite al Infinito (Grados Iguales - Coeficientes fijos)
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to \\infty} \\frac{5x^3 - x}{2x^3 + 7} $?",
        opciones: ["$ 5 $", "$ 0 $", "$ \\frac{5}{2} $", "$ \\infty $"],
        respuestaCorrecta: "$ \\frac{5}{2} $", // 5/2
        tipo: "Infinito"
    },
    // 5. Límite al Infinito (Grado Menor - El más fácil es 0)
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to \\infty} \\frac{x + 10}{x^2} $?",
        opciones: ["$ 1 $", "$ 0 $", "$ 10 $", "$ \\infty $"],
        respuestaCorrecta: "$ 0 $", // Grado num < Grado den
        tipo: "Infinito"
    },
    // 6. Límite con Raíz (Sustitución directa)
    {
        pregunta: "Práctico: Calcular $ \\lim_{x \\to 4} \\sqrt{x + 5} $",
        opciones: ["$ 3 $", "$ 9 $", "$ 4 $", "$ 5 $"],
        respuestaCorrecta: "$ 3 $", // sqrt(4+5) = sqrt(9) = 3
        tipo: "Sustitución"
    },
    // 7. Límite Trigonométrico Fundamental
    {
        pregunta: "Práctico: ¿Cuál es el valor del límite fundamental $ \\lim_{x \\to 0} \\frac{\\sin(x)}{x} $?",
        opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ -1 $"],
        respuestaCorrecta: "$ 1 $", 
        tipo: "Fundamental"
    },
    // 8. Límite de Constante (Teórico-Práctico)
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to 10} 7 $?",
        opciones: ["$ 10 $", "$ 7 $", "$ 0 $", "$ \\infty $"],
        respuestaCorrecta: "$ 7 $", // Límite de una constante es la constante
        tipo: "Teórico"
    },
    // 9. Sustitución Directa (racional simple)
    {
        pregunta: "Práctico: Calcular $ \\lim_{x \\to -1} \\frac{3x}{x - 2} $",
        opciones: ["$ -1 $", "$ 1 $", "$ \\frac{3}{2} $", "$ 0 $"],
        respuestaCorrecta: "$ 1 $", // 3(-1)/(-1-2) = -3/-3 = 1
        tipo: "Sustitución"
    },
    // 10. Sustitución Directa (Potencia)
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to 2} (x^3 - 8) $?",
        opciones: ["$ 0 $", "$ 8 $", "$ 4 $", "$ 16 $"],
        respuestaCorrecta: "$ 0 $", // 2^3 - 8 = 8 - 8 = 0
        tipo: "Sustitución"
    },
    // 11. Teórico Sencillo
    {
        pregunta: "Teórico: Si $ \\lim_{x \\to a^+} f(x) = L $ y $ \\lim_{x \\to a^-} f(x) = L $, ¿qué podemos afirmar?",
        opciones: ["$ L = 0 $", "El límite no existe", "$ \\lim_{x \\to a} f(x) = L $", "La función es par"],
        respuestaCorrecta: "$ \\lim_{x \\to a} f(x) = L $",
        tipo: "Teórico"
    }
];

// --- VARIABLES DE ESTADO DEL QUIZ ---
const NUM_PREGUNTAS_POR_QUIZ = 10; // Puedes ajustar el número de preguntas por sesión
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
 * Función para mezclar un array (Algoritmo de Fisher-Yates)
 * @param {Array} array - El array a mezclar.
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // Mientras queden elementos a mezclar.
    while (currentIndex != 0) {
        // Seleccionar un elemento restante.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Intercambiarlo con el elemento actual.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

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
    
    // 1. Mezclar todas las preguntas disponibles.
    let todasMezcladas = shuffle([...preguntas]);
    
    // 2. Seleccionar solo las primeras N para el quiz actual.
    preguntasMezcladas = todasMezcladas.slice(0, NUM_PREGUNTAS_POR_QUIZ);
    
    indicePreguntaActual = 0;
    puntuacion = 0;
    $currentScore.textContent = puntuacion;

    mostrarPregunta();
    cargarPuntuaciones(); 
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
    $questionText.innerHTML = pregunta.pregunta; 

    $optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    // Mezclar opciones
    let opcionesMezcladas = shuffle([...pregunta.opciones]);

    // Crear y añadir botones de opción
    opcionesMezcladas.forEach(opcion => {
        const button = document.createElement('button');
        button.innerHTML = opcion; 
        button.onclick = () => verificarRespuesta(opcion);
        $optionsContainer.appendChild(button);
    });

    // Forzar a MathJax a renderizar las nuevas ecuaciones
    if (window.MathJax) {
        MathJax.typesetPromise([$questionText, $optionsContainer]);
    }
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
    }

    // Avanzar a la siguiente pregunta después de un breve retraso
    setTimeout(() => {
        indicePreguntaActual++;
        mostrarPregunta();
    }, 500); 
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
 */
function obtenerPuntuaciones() {
    const scoresJSON = localStorage.getItem(LS_KEY);
    return scoresJSON ? JSON.parse(scoresJSON) : [];
}

/**
 * Guarda la nueva puntuación en el LocalStorage.
 */
function guardarPuntuacion(nombre, score) {
    const scores = obtenerPuntuaciones();
    
    scores.push({ nombre: nombre, score: score });
    
    // Ordenar de mayor a menor puntuación
    scores.sort((a, b) => b.score - a.score);

    // Limitar el registro a los 10 mejores
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
        
        // Destacar el primer lugar
        if (index === 0) {
            row.style.backgroundColor = '#fffacd'; 
            cellName.textContent += ' 👑';
        }
    });
}

// Cargar puntuaciones al cargar la página por primera vez
window.onload = cargarPuntuaciones;
