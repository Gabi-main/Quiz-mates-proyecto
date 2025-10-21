// --- DATOS DEL QUIZ: 50 Preguntas de Límites (Variedad y Dificultad) ---
const preguntas_base = [
    // Indeterminación 0/0 (Factorización)
    { pregunta: "Calcular $ \\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} $", opciones: ["$ 0 $", "$ 4 $", "$ 2 $", "$ 1 $"], respuestaCorrecta: "$ 4 $" },
    // Indeterminación 0/0 (Factorización, negativo)
    { pregunta: "Calcular $ \\lim_{x \\to -3} \\frac{x^2 + 5x + 6}{x + 3} $", opciones: ["$ 0 $", "$ -1 $", "$ 1 $", "$ 2 $"], respuestaCorrecta: "$ -1 $" },
    // Indeterminación 0/0 (Racionalización)
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{\\sqrt{x + 1} - 1}{x} $", opciones: ["$ 1 $", "$ 0 $", "$ \\frac{1}{2} $", "$ 2 $"], respuestaCorrecta: "$ \\frac{1}{2} $" },
    // Indeterminación 0/0 (Trigonométrico fundamental)
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{\\tan(x)}{x} $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ 2 $"], respuestaCorrecta: "$ 1 $" },
    // Indeterminación inf/inf (Grados Iguales)
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{4x^3 - 2x}{x^3 + 5} $", opciones: ["$ \\infty $", "$ 0 $", "$ 4 $", "$ 2 $"], respuestaCorrecta: "$ 4 $" },
    // Indeterminación inf/inf (Grado Num < Grado Den)
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{x^2 + 1}{x^3 + x} $", opciones: ["$ 1 $", "$ 0 $", "$ \\infty $", "$ -1 $"], respuestaCorrecta: "$ 0 $" },
    // Indeterminación inf/inf (Grado Num > Grado Den)
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{2x^5 + x}{x^4 - 3} $", opciones: ["$ 2 $", "$ 0 $", "$ \\infty $", "$ 1 $"], respuestaCorrecta: "$ \\infty $" },
    // Sustitución Directa (Polinómica)
    { pregunta: "Calcular $ \\lim_{x \\to 1} (3x^2 + 5x - 8) $", opciones: ["$ 0 $", "$ 1 $", "$ 3 $", "$ -4 $"], respuestaCorrecta: "$ 0 $" },
    // Sustitución Directa (Racional)
    { pregunta: "Calcular $ \\lim_{x \\to 5} \\frac{x + 5}{x - 2} $", opciones: ["$ 1 $", "$ 0 $", "$ \\frac{10}{3} $", "$ \\infty $"], respuestaCorrecta: "$ \\frac{10}{3} $" },
    // Límite a un número (asíntota vertical, lateral)
    { pregunta: "Calcular $ \\lim_{x \\to 3^+} \\frac{1}{x - 3} $", opciones: ["$ 0 $", "$ -\\infty $", "$ +\\infty $", "$ 1 $"], respuestaCorrecta: "$ +\\infty $" },
    // Límite a un número (asíntota vertical, bilateral)
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{1}{x^2} $", opciones: ["$ 0 $", "$ -\\infty $", "$ +\\infty $", "No existe"], respuestaCorrecta: "$ +\\infty $" },
    // Límite Exponencial Fundamental
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (1 + \\frac{1}{x})^x $", opciones: ["$ 1 $", "$ e $", "$ \\infty $", "$ 0 $"], respuestaCorrecta: "$ e $" },
    // Límite de Constante
    { pregunta: "Calcular $ \\lim_{x \\to 50} 12 $", opciones: ["$ 50 $", "$ 12 $", "$ 0 $", "$ \\infty $"], respuestaCorrecta: "$ 12 $" },
    // Sustitución Trigonométrica
    { pregunta: "Calcular $ \\lim_{x \\to \\pi} \\cos(x) $", opciones: ["$ 1 $", "$ 0 $", "$ -1 $", "$ \\frac{1}{2} $"], respuestaCorrecta: "$ -1 $" },
    // Límite al Infinito (Raíz de grado igual)
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{\\sqrt{x^2 + 1}}{x} $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ -1 $"], respuestaCorrecta: "$ 1 $" },
    
    // -- Preguntas 16 a 50 (Variaciones y Complejidad Media) --
    { pregunta: "Calcular $ \\lim_{x \\to 3} (x^3 - 27) $", opciones: ["$ 0 $", "$ 9 $", "$ 3 $", "$ 54 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{3x^2}{x} $", opciones: ["$ 3 $", "$ 0 $", "$ \\infty $", "$ 1 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{5}{x^2} $", opciones: ["$ 5 $", "$ 0 $", "$ \\infty $", "$ 1 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{x^3 - 1}{x - 1} $", opciones: ["$ 1 $", "$ 3 $", "$ 0 $", "$ \\infty $"], respuestaCorrecta: "$ 3 $" },
    { pregunta: "Calcular $ \\lim_{x \\to -1} (x^2 - 1) $", opciones: ["$ 2 $", "$ 0 $", "$ -2 $", "$ 1 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{\\sin(x)}{x} $", opciones: ["$ 1 $", "$ \\infty $", "$ 0 $", "No existe"], respuestaCorrecta: "$ 0 $" }, // Teorema del Sándwich al infinito
    { pregunta: "Calcular $ \\lim_{x \\to 0^-} \\frac{1}{x} $", opciones: ["$ +\\infty $", "$ 0 $", "$ -\\infty $", "$ 1 $"], respuestaCorrecta: "$ -\\infty $" },
    { pregunta: "Calcular $ \\lim_{x \\to 9} \\frac{x - 9}{\\sqrt{x} - 3} $", opciones: ["$ 3 $", "$ 6 $", "$ 0 $", "$ \\frac{1}{6} $"], respuestaCorrecta: "$ 6 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{e^{2x} - 1}{x} $", opciones: ["$ 1 $", "$ e $", "$ 2 $", "$ 0 $"], respuestaCorrecta: "$ 2 $" }, // L'Hôpital
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{\\ln(x)}{x - 1} $", opciones: ["$ 0 $", "$ 1 $", "$ -1 $", "$ \\infty $"], respuestaCorrecta: "$ 1 $" }, // L'Hôpital
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (\\frac{2x}{x+1}) $", opciones: ["$ 1 $", "$ 2 $", "$ 0 $", "$ \\infty $"], respuestaCorrecta: "$ 2 $" },
    { pregunta: "Calcular $ \\lim_{x \\to -2} \\frac{x^2 - 4}{x + 2} $", opciones: ["$ 4 $", "$ 0 $", "$ -4 $", "$ -2 $"], respuestaCorrecta: "$ -4 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\sqrt{\\frac{9x^2}{x^2 + 1}} $", opciones: ["$ 3 $", "$ 9 $", "$ 1 $", "$ 0 $"], respuestaCorrecta: "$ 3 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\cos(x) $", opciones: ["$ 0 $", "$ 1 $", "$ -1 $", "$ \\infty $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{5x}{\\sin(x)} $", opciones: ["$ 1 $", "$ 5 $", "$ 0 $", "$ \\frac{1}{5} $"], respuestaCorrecta: "$ 5 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (x^2 - x) $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ -\\infty $"], respuestaCorrecta: "$ \\infty $" },
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{x^2 - 2x + 1}{x - 1} $", opciones: ["$ 0 $", "$ 1 $", "$ 2 $", "$ -1 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 2} (x^2 + 3x) $", opciones: ["$ 6 $", "$ 10 $", "$ 4 $", "$ 8 $"], respuestaCorrecta: "$ 10 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{7x}{x^2 + 1} $", opciones: ["$ 7 $", "$ 0 $", "$ \\infty $", "$ 1 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{\\sin(5x)}{2x} $", opciones: ["$ 5 $", "$ 2 $", "$ \\frac{5}{2} $", "$ 0 $"], respuestaCorrecta: "$ \\frac{5}{2} $" },
    { pregunta: "Calcular $ \\lim_{x \\to 4} (\\frac{1}{x}) $", opciones: ["$ 4 $", "$ 0 $", "$ \\frac{1}{4} $", "$ 1 $"], respuestaCorrecta: "$ \\frac{1}{4} $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{1 - x^4}{x^4 + 1} $", opciones: ["$ 1 $", "$ 0 $", "$ -1 $", "$ \\infty $"], respuestaCorrecta: "$ -1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to -2} \\frac{x + 2}{x^2 - 4} $", opciones: ["$ -4 $", "$ -\\frac{1}{4} $", "$ 0 $", "$ 1 $"], respuestaCorrecta: "$ -\\frac{1}{4} $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (\\frac{x+1}{x})^x $", opciones: ["$ 1 $", "$ 0 $", "$ e $", "$ \\infty $"], respuestaCorrecta: "$ e $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{x}{\\tan(x)} $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ 2 $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 3} \\frac{x^2 - 9}{x^2 - 2x - 3} $", opciones: ["$ \\frac{6}{4} $", "$ 0 $", "$ \\frac{3}{2} $", "$ 3 $"], respuestaCorrecta: "$ \\frac{3}{2} $" }, // 6/4 = 3/2
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1} $", opciones: ["$ 1 $", "$ \\frac{1}{2} $", "$ 0 $", "$ -1 $"], respuestaCorrecta: "$ \\frac{1}{2} $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} (1 + x)^{\\frac{1}{x}} $", opciones: ["$ 1 $", "$ e $", "$ 0 $", "$ \\infty $"], respuestaCorrecta: "$ e $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (\\frac{x}{2x + 1}) $", opciones: ["$ 1 $", "$ 2 $", "$ \\frac{1}{2} $", "$ 0 $"], respuestaCorrecta: "$ \\frac{1}{2} $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{\\cos(x) - 1}{x} $", opciones: ["$ 1 $", "$ 0 $", "$ -1 $", "$ \\infty $"], respuestaCorrecta: "$ 0 $" }, // L'Hôpital
    { pregunta: "Calcular $ \\lim_{x \\to 2} \\frac{x - 2}{x^3 - 8} $", opciones: ["$ 0 $", "$ 1 $", "$ \\frac{1}{12} $", "$ 4 $"], respuestaCorrecta: "$ \\frac{1}{12} $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{e^x - e^{-x}}{x} $", opciones: ["$ 0 $", "$ 2 $", "$ 1 $", "$ \\infty $"], respuestaCorrecta: "$ 2 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} $", opciones: ["$ 0 $", "$ 1 $", "$ e $", "$ \\infty $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (\\frac{3x^2}{x^2 + 2x}) $", opciones: ["$ 0 $", "$ 3 $", "$ 1 $", "$ 2 $"], respuestaCorrecta: "$ 3 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} (x \\cot(x)) $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ -1 $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 5} (x^2 - 25) $", opciones: ["$ 0 $", "$ 10 $", "$ 25 $", "$ 5 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{x^2 - 1}{\\sqrt{x} - 1} $", opciones: ["$ 2 $", "$ 4 $", "$ 0 $", "$ 1 $"], respuestaCorrecta: "$ 4 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{\\sin^2(x)}{x} $", opciones: ["$ 0 $", "$ 1 $", "$ 2 $", "$ \\infty $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{x^2 + x - 2}{x^2 - 1} $", opciones: ["$ 1 $", "$ 0 $", "$ \\frac{3}{2} $", "$ 2 $"], respuestaCorrecta: "$ \\frac{3}{2} $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (\\sqrt{x^2 + 4} - x) $", opciones: ["$ \\infty $", "$ 2 $", "$ 0 $", "$ 4 $"], respuestaCorrecta: "$ 0 $" }, // Racionalización
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{\\sin(x)}{x \\cos(x)} $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ -1 $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{\\ln(x)}{x} $", opciones: ["$ 1 $", "$ 0 $", "$ \\infty $", "$ e $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{x - 1}{\\ln(x)} $", opciones: ["$ 0 $", "$ 1 $", "$ e $", "$ \\infty $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} (\\frac{1}{x} - \\frac{1}{\\sin(x)}) $", opciones: ["$ 1 $", "$ 0 $", "$ \\infty $", "$ 2 $"], respuestaCorrecta: "$ 0 $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} \\frac{e^x}{x^2} $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ e $"], respuestaCorrecta: "$ \\infty $" }, // Jerarquía de Infinitos
    { pregunta: "Calcular $ \\lim_{x \\to 3} \\frac{x - 3}{x^2 - 9} $", opciones: ["$ 6 $", "$ 0 $", "$ \\frac{1}{6} $", "$ -6 $"], respuestaCorrecta: "$ \\frac{1}{6} $" },
    { pregunta: "Calcular $ \\lim_{x \\to \\infty} (\\frac{x+5}{x-1}) $", opciones: ["$ 1 $", "$ 5 $", "$ 0 $", "$ -1 $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 0} \\frac{x^2}{\\sin^2(x)} $", opciones: ["$ 0 $", "$ 1 $", "$ \\infty $", "$ 2 $"], respuestaCorrecta: "$ 1 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 1} \\frac{\\ln(x^2)}{x - 1} $", opciones: ["$ 1 $", "$ 0 $", "$ 2 $", "$ -1 $"], respuestaCorrecta: "$ 2 $" },
    { pregunta: "Calcular $ \\lim_{x \\to 4} (x + 3) $", opciones: ["$ 7 $", "$ 4 $", "$ 3 $", "$ 12 $"], respuestaCorrecta: "$ 7 $" }
];

// --- CONSTANTES Y VARIABLES GLOBALES ---
const NUM_PREGUNTAS_QUIZ = 10; 
let nombreUsuario = '';
let puntuacion = 0;
let indicePreguntaActual = 0;
let preguntasMezcladas = [];
let respuestasUsuario = []; // Array para guardar las respuestas para la revisión

// --- ELEMENTOS DEL DOM ---
const $nameSection = document.getElementById('name-input-section');
const $quizContainer = document.getElementById('quiz-container');
const $questionText = document.getElementById('question-text');
const $optionsContainer = document.getElementById('options-container');
const $currentScore = document.getElementById('current-score');
const $questionNumber = document.getElementById('question-number');
const $scoresSection = document.getElementById('scores-section');
const $reviewSection = document.getElementById('review-section');
const $reviewDetails = document.getElementById('review-details');
const $finalSummary = document.getElementById('final-summary');

// --- LÓGICA DE UTILIDAD ---

/**
 * Función para mezclar un array (Algoritmo de Fisher-Yates)
 */
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

/**
 * Muestra una sección y oculta las demás.
 */
function mostrarSeccion(id) {
    const sections = [$nameSection, $quizContainer, $scoresSection, $reviewSection];
    sections.forEach(sec => sec.classList.add('hidden'));

    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('hidden');
    }
}

// --- LÓGICA PRINCIPAL DEL QUIZ ---

/**
 * Inicia el quiz: guarda el nombre, selecciona preguntas y comienza el flujo.
 */
function iniciarQuiz() {
    const playerNameInput = document.getElementById('playerName');
    nombreUsuario = playerNameInput.value.trim();

    if (nombreUsuario.length < 2) {
        alert('Por favor, ingresa un nombre válido para comenzar.');
        return;
    }

    // Preparar el quiz
    let todasMezcladas = shuffle([...preguntas_base]);
    preguntasMezcladas = todasMezcladas.slice(0, NUM_PREGUNTAS_QUIZ);
    
    indicePreguntaActual = 0;
    puntuacion = 0;
    respuestasUsuario = []; // Limpiar respuestas anteriores
    $currentScore.textContent = puntuacion;

    mostrarSeccion('quiz-container');
    mostrarPregunta();
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
    
    // El usuario NO ve el tipo de pregunta
    $questionNumber.textContent = `Pregunta ${indicePreguntaActual + 1}/${preguntasMezcladas.length}`;
    $questionText.innerHTML = pregunta.pregunta; 

    $optionsContainer.innerHTML = ''; 

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
 * Verifica la respuesta, guarda la selección y avanza.
 */
function verificarRespuesta(opcionSeleccionada) {
    const pregunta = preguntasMezcladas[indicePreguntaActual];
    
    // Desactivar botones
    Array.from($optionsContainer.children).forEach(btn => btn.disabled = true);
    
    const esCorrecta = (opcionSeleccionada === pregunta.respuestaCorrecta);

    // 1. Guardar la respuesta para la revisión
    respuestasUsuario.push({
        pregunta: pregunta.pregunta,
        seleccion: opcionSeleccionada,
        correcta: pregunta.respuestaCorrecta,
        esCorrecta: esCorrecta
    });

    // 2. Actualizar la puntuación
    if (esCorrecta) {
        puntuacion++;
        $currentScore.textContent = puntuacion;
    }

    // 3. Avanzar
    setTimeout(() => {
        indicePreguntaActual++;
        mostrarPregunta();
    }, 500); 
}

/**
 * Finaliza el quiz, guarda la puntuación y muestra la sección de revisión.
 */
function finalizarQuiz() {
    guardarPuntuacion(nombreUsuario, puntuacion);
    cargarPuntuaciones();
    
    mostrarSeccion('review-section');
    generarRevision();
}


// --- LÓGICA DE REVISIÓN DE RESPUESTAS ---

function generarRevision() {
    $reviewDetails.innerHTML = ''; // Limpiar revisión anterior
    
    $finalSummary.innerHTML = `¡Felicidades, **${nombreUsuario}**! Tu puntuación final es: **${puntuacion}** de **${preguntasMezcladas.length}** correctas.`;
    
    respuestasUsuario.forEach((item, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        
        // Número de pregunta y texto
        reviewItem.innerHTML = `<p class="review-question">Q${index + 1}: ${item.pregunta}</p>`;
        
        // Respuesta del usuario
        const userAnswer = document.createElement('p');
        userAnswer.classList.add('review-user-answer');
        
        if (item.esCorrecta) {
            userAnswer.classList.add('correct');
            userAnswer.innerHTML = `Tu respuesta: ${item.seleccion} (¡Correcta!)`;
        } else {
            userAnswer.classList.add('incorrect');
            userAnswer.innerHTML = `Tu respuesta: ${item.seleccion} (Incorrecta)`;
            
            // Respuesta correcta
            reviewItem.innerHTML += `<p class="review-correct-answer">La correcta era: ${item.correcta}</p>`;
        }
        
        reviewItem.appendChild(userAnswer);
        $reviewDetails.appendChild(reviewItem);
    });

    // Forzar a MathJax a renderizar las ecuaciones en la revisión
    if (window.MathJax) {
        MathJax.typesetPromise([$reviewDetails, $finalSummary]);
    }
}

// --- LÓGICA DE PUNTUACIONES LOCALES (LocalStorage) ---

const LS_KEY = 'mathQuizHighScores';

function obtenerPuntuaciones() {
    const scoresJSON = localStorage.getItem(LS_KEY);
    return scoresJSON ? JSON.parse(scoresJSON) : [];
}

function guardarPuntuacion(nombre, score) {
    const scores = obtenerPuntuaciones();
    
    scores.push({ nombre: nombre, score: score });
    scores.sort((a, b) => b.score - a.score);
    
    const topScores = scores.slice(0, 10); 
    localStorage.setItem(LS_KEY, JSON.stringify(topScores));
}

function cargarPuntuaciones() {
    const scores = obtenerPuntuaciones();
    const $tbody = document.querySelector('#high-scores-table tbody');
    
    $tbody.innerHTML = ''; 

    if (scores.length === 0) {
        $tbody.innerHTML = '<tr><td colspan="2">Aún no hay puntuaciones. ¡Sé el primero!</td></tr>';
        return;
    }

    scores.forEach((item, index) => {
        const row = $tbody.insertRow();
        const cellName = row.insertCell();
        const cellScore = row.insertCell();
        
        cellName.innerHTML = item.nombre;
        cellScore.textContent = item.score;
        
        if (index === 0) {
            row.style.backgroundColor = '#fffacd'; 
            cellName.innerHTML = item.nombre + ' 👑';
        }
    });
}

window.onload = () => {
    cargarPuntuaciones();
    // Asegurar que solo la sección de inicio es visible al cargar
    mostrarSeccion('name-input-section'); 
};
