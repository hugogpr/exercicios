// Declaração das variaveis
const question        = document.querySelector("#question");
const answersBox      = document.querySelector("#answers-box");
const quizzContainer  = document.querySelector("#quizz-container");
const scoreContainer  = document.querySelector("#score-container");

const letter = ["a","b","c","d"];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "PHP foi desenvolvido para qual fim?",
    "answers": [
      {
        "answer": "back-end",
        "correct": true
      },
      {
        "answer": "front-end",
        "correct": false
      },
      {
        "answer": "Sistema operacional",
        "correct": false
      },
      {
        "answer": "Banco de dados",
        "correct": false
      },
    ]
  },
  {
    "question": "Uma forma de declarar variável em JavaScript:",
    "answers": [
      {
        "answer": "$var",
        "correct": false
      },
      {
        "answer": "var",
        "correct": true
      },
      {
        "answer": "@var",
        "correct": false
      },
      {
        "answer": "#let",
        "correct": false
      },
    ]
  },
  {
    "question": "Qual o seletor de id no CSS?",
    "answers": [
      {
        "answer": "#",
        "correct": true
      },
      {
        "answer": ".",
        "correct": false
      },
      {
        "answer": "@",
        "correct": false
      },
      {
        "answer": "/",
        "correct": false
      },
    ]
  },
]

// Substituição do Quizz para primeira pergunta
function init(){

  //criar a primeira pergunta
  createQuestion(0);
  
};

// Cria uma pergunta
function createQuestion(i){

  // Limpar a questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn){
    
    btn.remove();
  });

  // Alterar o texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i+1;

  // Insere as alternativas
  questions[i].answers.forEach(function(answer, i){

    // Cria o template do botao do quizz
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    let letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letter[i];
    answerText.textContent = answer["answer"];

    answerTemplate.setAttribute("correct-answer", answer['correct']);

    // Remove as Classes hide e answer-template

    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Inserir as altenativas na tela
    answersBox.appendChild(answerTemplate);

    // Insere um evento de click no botão
    answerTemplate.addEventListener('click', function(){
      checkAnswer(this);
    });

  });

  // Incrementar o numero da questão
  actualQuestion++;
};

// Verificando a resposta do usuario
function checkAnswer(btn) {
  
  // Seleciona todos os botões
  const buttons = answersBox.querySelectorAll("button");

  // Verifica se a resposta esta correta e adiciona classe nos botões
  buttons.forEach(function(button) {
    
    if(button.getAttribute("correct-answer") === "true"){

      button.classList.add("correct-answer");

      // Checa se acertou
      if(btn === button){
        
        //adiciona ponto
        points++;
      }

    }else{
      button.classList.add("wrong-answer");
    }

  });

  // Ir para proxima pergunta
  nextQuestion();
};

// Exibir proxima pergunta do quizz
function nextQuestion() {
  
  // Timer para o usuario ver a respostas
  setTimeout(function() {
    
    //verifica se ainda há perguntas
    if(actualQuestion >= questions.length){

      // Apresentar mensagem de sucesso
      showSuccesseMsg();
      return;

    }

    createQuestion(actualQuestion);
  },700);
};

// Exibe a tela final
function showSuccesseMsg(){

  hideOrShowQuizz();

  // Trocar dados da tela de Sucesso

  // Calcular o score
  const score = ((points / questions.length)*100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");
  displayScore.textContent = score.toString();

  // Alterar o numero de perguntas corretas;
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // Alterar o total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;
};

// Mostra ou esconde o score
function hideOrShowQuizz() {

  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
};

// Reiniciar o quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {
  
  // Zerar o jogo
  points = 0;
  actualQuestion = 0;
  hideOrShowQuizz();
  init();

});


// Iniciação do Quizz
init();