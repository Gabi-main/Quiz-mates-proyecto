// --- DATOS DEL QUIZ: Preguntas de Límites de Cálculo ---
const preguntas = [
    {
        pregunta: "Teórico: ¿Qué tipo de indeterminación resulta de evaluar $ \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} $ directamente?",
        opciones: ["$ \\frac{\\infty}{\\infty} $", "$ \\infty - \\infty $", "$ \\frac{0}{0} $", "$ 1^{\\infty} $"],
        respuestaCorrecta: "$ \\frac{0}{0} $",
        tipo: "Teórico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to \\infty} \\frac{3x^2 + 5x}{x^2 - 2} $?",
        opciones: ["$ \\infty $", "$ 3 $", "$ 0 $", "$ \\frac{3}{2} $"],
        respuestaCorrecta: "$ 3 $",
        tipo: "Práctico"
    },
    {
        pregunta: "Teórico: ¿Qué método se suele aplicar para resolver una indeterminación $ \\frac{0}{0} $ con funciones polinómicas?",
        opciones: ["Racionalización", "Regla de L'Hôpital", "Factorización", "Teorema de Sandwích"],
        respuestaCorrecta: "Factorización",
        tipo: "Teórico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite fundamental de $ \\lim_{x \\to 0} \\frac{\\sin(x)}{x} $?",
        opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "No existe"],
        respuestaCorrecta: "$ 1 $",
        tipo: "Práctico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite lateral de $ \\lim_{x \\to 0^+} \\frac{1}{x} $?",
        opciones: ["$ -\\infty $", "$ 0 $", "$ +\\infty $", "$ 1 $"],
        respuestaCorrecta: "$ +\\infty $",
        tipo: "Práctico"
    },
    {
        pregunta: "Teórico: ¿Cuál es la condición para que un límite $ \\lim_{x \\to a} f(x) $ exista?",
        opciones: ["La función es continua en 'a'", "Los límites laterales son iguales", "La función está definida en 'a'", "Es un límite al infinito"],
        respuestaCorrecta: "Los límites laterales son iguales",
        tipo: "Teórico"
    },
    {
        pregunta: "Práctico: Calcular $ \\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1} $",
        opciones: ["$ 0 $", "$ 1 $", "$ 3 $", "$ \\infty $"],
        respuestaCorrecta: "$ 3 $",
        tipo: "Práctico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to \\infty} \\frac{\\ln(x)}{x} $?",
        opciones: ["$ \\infty $", "$ 1 $", "$ 0 $", "$ e $"],
        respuestaCorrecta: "$ 0 $",
        tipo: "Práctico"
    },
    {
        pregunta: "Teórico: ¿Qué indeterminación NO puede resolverse directamente con la Regla de L'Hôpital?",
        opciones: ["$ \\frac{0}{0} $", "$ \\frac{\\infty}{\\infty} $", "$ \\infty - \\infty $", "Todas pueden transformarse para usar L'Hôpital"],
        respuestaCorrecta: "$ \\infty - \\infty $",
        tipo: "Teórico"
    },
    {
        pregunta: "Práctico: Calcular $ \\lim_{x \\to 0} x \\ln(x) $",
        opciones: ["$ 0 $", "$ 1 $", "$ -\\infty $", "$ \\infty $"],
        respuestaCorrecta: "$ 0 $",
        tipo: "Práctico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x $?",
        opciones: ["$ 1 $", "$ \\infty $", "$ e $", "$ 0 $"],
        respuestaCorrecta: "$ e $",
        tipo: "Práctico"
    },
    {
        pregunta: "Teórico: Cuando el grado del numerador es menor que el grado del denominador en un límite al infinito de una función racional, ¿cuál es el resultado?",
        opciones: ["$ \\infty $", "El coeficiente principal", "$ 0 $", "Depende de los signos"],
        respuestaCorrecta: "$ 0 $",
        tipo: "Teórico"
    },
    {
        pregunta: "Práctico: Calcular $ \\lim_{x \\to 4} \\frac{\\sqrt{x} - 2}{x - 4} $",
        opciones: ["$ \\frac{1}{4} $", "$ 0 $", "$ \\infty $", "$ \\frac{1}{2} $"],
        respuestaCorrecta: "$ \\frac{1}{4} $",
        tipo: "Práctico"
    },
    {
        pregunta: "Práctico: ¿Cuál es el límite de $ \\lim_{x \\to -1} \\frac{x^2 + 3x + 2}{x + 1} $?",
        opciones: ["$ 0 $", "$ 1 $", "$ -1 $", "$ -2 $"],
        respuestaCorrecta: "$ 1 $",
        tipo: "Práctico"
    },
    {
        pregunta: "Práctico: Calcular $ \\lim_{x \\to \\infty} \\frac{x^3 + 1}{x^2 + 5} $",
        opciones: ["$ 1 $", "$ 0 $", "$ \\infty $", "$ -\\infty $"],
        respuestaCorrecta: "$ \\infty $",
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
    $questionText.innerHTML = pregunta.pregunta; // Usar innerHTML para interpretar LaTeX/HTML

    $optionsContainer.innerHTML = ''; // Limpiar opciones anteriores

    // Crear y añadir botones de opción
    pregunta.opciones.forEach(opcion => {
        const button = document.createElement('button');
        button.innerHTML = opcion; // Usar innerHTML para opciones con LaTeX
        button.onclick = () => verificarRespuesta(opcion);
        $optionsContainer.appendChild(button);
    });

    // ¡Importante para MathJax! Forzar a MathJax a renderizar las nuevas ecuaciones
    if (window.MathJax) {
        // Usa MathJax.typesetPromise() para asegurar que la renderización se complete
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
