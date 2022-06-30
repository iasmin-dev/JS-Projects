const questions = [
  {
    question: 'Quantos anos o Itadori tem?',
    a: 17,
    b: 16,
    c: 15,
    d: 14,
    correct: 'c'
  },
  {
    question: 'Quantos anos Megumi Fushiguro tem?',
    a: 17,
    b: 16,
    c: 15,
    d: 14,
    correct: 'c'
  },
  {
    question: 'Quantos anos Nobara Kugisaki tem?',
    a: 17,
    b: 16,
    c: 15,
    d: 14,
    correct: 'b'
  },
  {
    question: 'Quantos anos Satoru Gojo tem?',
    a: 30,
    b: 32,
    c: 28,
    d: 25,
    correct: 'c'
  }
]

const questionEl = document.getElementById('question');

const a_text = document.querySelector('.a');
const b_text = document.querySelector('.b');
const c_text = document.querySelector('.c');
const d_text = document.querySelector('.d');

const subBtn = document.getElementById('submit')

let currentQuestion = 0;

function loudQuiz() {
  const currentQuizData = questions[currentQuestion];  
  questionEl.innerHTML = currentQuizData.question;
  
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;  
}

loudQuiz();

subBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loudQuiz();
  } else {
    alert('quiz finished! <3')
  }
  
});