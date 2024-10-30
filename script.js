// Firecracker Animation on Page Load
function playFirecrackerAnimation() {
    const canvas = document.getElementById('firecracker-canvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#FF0000', '#FFFF00', '#00FF00', '#0000FF', '#FF00FF'];

    // Draw random firecracker explosion
    for (let i = 0; i < 30; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const radius = Math.random() * 5 + 3;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

// Rangoli Challenge Game
const rangoliCanvas = document.getElementById('rangoli-canvas');
const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#900C3F', '#581845'];
for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
    rangoliCanvas.appendChild(cell);
}

// Diwali Trivia Quiz
function startTriviaQuiz() {
    const questions = [
        { question: "What does Diwali celebrate?", answers: ["Light over Darkness", "Winter Solstice", "Harvest Festival"], correct: 0 },
        { question: "Which sweet is popular during Diwali?", answers: ["Chocolate Cake", "Gulab Jamun", "Ice Cream"], correct: 1 },
        { question: "What do people light during Diwali?", answers: ["Candles", "Fireworks", "Both"], correct: 2 },
        { question: "Who is Manav Nagpal?", answers: ["Yes", "Yup", "FC"], correct: 0 }  // Updated name here
    ];
    let score = 0;
    questions.forEach((q, index) => {
        const userAnswer = prompt(`${index + 1}. ${q.question}\n${q.answers.join('\n')}`);
        if (userAnswer && userAnswer.toLowerCase() === q.answers[q.correct].toLowerCase()) {
            score++;
        }
    });
    document.getElementById('quiz-result').innerText = `You scored ${score} out of ${questions.length}! 🎉`;
}

// Virtual Fireworks Show
const fireworksCanvas = document.getElementById('fireworks-canvas');
const fwCtx = fireworksCanvas.getContext('2d');

function startFireworks() {
    fwCtx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);
    for (let i = 0; i < 5; i++) {
        setTimeout(() => launchFirework(), i * 800);
    }
}

function launchFirework() {
    const x = Math.random() * fireworksCanvas.width;
    const y = Math.random() * fireworksCanvas.height;
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    fwCtx.beginPath();
    fwCtx.arc(x, y, Math.random() * 20 + 5, 0, Math.PI * 2);
    fwCtx.fillStyle = color;
    fwCtx.fill();
    setTimeout(() => fwCtx.clearRect(x - 20, y - 20, 40, 40), 300);
}

// Cracker Burst Game
function startCrackerGame() {
    const crackerResult = document.getElementById('cracker-result');
    const bursts = Math.floor(Math.random() * 5) + 1; // Random number of crackers burst
    crackerResult.innerText = `You burst ${bursts} crackers! 🎇🎇🎇`;
}
