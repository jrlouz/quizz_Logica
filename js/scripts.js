// Declaração de variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ['a', 'b', 'c', 'd'];
let points = 0;
let actualQuestion = 0;

// Perguntas
const questions = [
  {
    "question": "Qual é a negação da proposição 'P: Maria é alta'?",
    "answers": [
      {
        "answer": "¬P: Maria não é alta",
        "correct": true
      },
      {
        "answer": "P: Maria é baixa",
        "correct": false
      },
      {
        "answer": "P: Maria é alta",
        "correct": false
      },
      {
        "answer": "¬P: Maria é baixa",
        "correct": false
      }
    ]
  },
  {
    "question": "Se 'P: Hoje é segunda-feira' e 'Q: Está chovendo', qual é a proposição 'P → Q'?",
    "answers": [
      {
        "answer": "Se hoje é segunda-feira, então está chovendo",
        "correct": false
      },
      {
        "answer": "Se está chovendo, então hoje é segunda-feira",
        "correct": true
      },
      {
        "answer": "Hoje é segunda-feira e está chovendo",
        "correct": false
      },
      {
        "answer": "Está chovendo e hoje é segunda-feira",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a proposição equivalente a 'P v Q'?",
    "answers": [
      {
        "answer": "P e Q",
        "correct": false
      },
      {
        "answer": "P ou Q",
        "correct": true
      },
      {
        "answer": "P e não Q",
        "correct": false
      },
      {
        "answer": "Não P ou não Q",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a negação da proposição 'P: O sol está brilhando'?",
    "answers": [
      {
        "answer": "¬P: O sol não está brilhando",
        "correct": true
      },
      {
        "answer": "P: O sol está nublado",
        "correct": false
      },
      {
        "answer": "P: O sol está brilhando",
        "correct": false
      },
      {
        "answer": "¬P: O sol está nublado",
        "correct": false
      }
    ]
  },
  {
    "question": "Se 'P: João estuda matemática' e 'Q: João passa na prova', qual é a proposição 'P → Q'?",
    "answers": [
      {
        "answer": "Se João passa na prova, então ele estuda matemática",
        "correct": false
      },
      {
        "answer": "Se João estuda matemática, então ele passa na prova",
        "correct": true
      },
      {
        "answer": "João estuda matemática e passa na prova",
        "correct": false
      },
      {
        "answer": "Ele passa na prova e estuda matemática",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a proposição equivalente a 'P ∧ Q'?",
    "answers": [
      {
        "answer": "P ou Q",
        "correct": false
      },
      {
        "answer": "P e Q",
        "correct": true
      },
      {
        "answer": "P ou não Q",
        "correct": false
      },
      {
        "answer": "Não P e não Q",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a negação da proposição 'P: O gato é preto'?",
    "answers": [
      {
        "answer": "¬P: O gato não é preto",
        "correct": true
      },
      {
        "answer": "P: O gato é branco",
        "correct": false
      },
      {
        "answer": "P: O gato é preto",
        "correct": false
      },
      {
        "answer": "¬P: O gato é branco",
        "correct": false
      }
    ]
  },
  {
    "question": "Se 'P: Ana é inteligente' e 'Q: Ana passa no teste', qual é a proposição 'P → Q'?",
    "answers": [
      {
        "answer": "Se Ana passa no teste, então ela é inteligente",
        "correct": false
      },
      {
        "answer": "Se Ana é inteligente, então ela passa no teste",
        "correct": true
      },
      {
        "answer": "Ana é inteligente e passa no teste",
        "correct": false
      },
      {
        "answer": "Ela passa no teste e é inteligente",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a proposição equivalente a 'P v ¬Q'?",
    "answers": [
      {
        "answer": "P e Q",
        "correct": false
      },
      {
        "answer": "P ou Q",
        "correct": true
      },
      {
        "answer": "P e não Q",
        "correct": false
      },
      {
        "answer": "Não P ou não Q",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é a negação da proposição 'P: O carro é vermelho'?",
    "answers": [
      {
        "answer": "¬P: O carro não é vermelho",
        "correct": true
      },
      {
        "answer": "P: O carro é azul",
        "correct": false
      },
      {
        "answer": "P: O carro é vermelho",
        "correct": false
      },
      {
        "answer": "¬P: O carro é azul",
        "correct": false
      }
    ]
  },
  {
    "question": "Se 'P: O jogo começou' e 'Q: A torcida está animada', qual é a proposição 'P → Q'?",
    "answers": [
      {
        "answer": "Se a torcida está animada, então o jogo começou",
        "correct": false
      },
      {
        "answer": "Se o jogo começou, então a torcida está animada",
        "correct": true
      },
      {
        "answer": "O jogo começou e a torcida está animada",
        "correct": false
      },
      {
        "answer": "A torcida está animada e o jogo começou",
        "correct": false
      }
    ]
  }
]


// Substituição do layout pela primeira questão
function init() {
  createQuestion(0)
}

// Create a question 
function createQuestion(i) {

  // Limpa questão anterior
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Altera texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insere alternativas
  questions[i].answers.forEach(function(answer, i) {
    
    // Altera texto do template
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // remove classe de hide e template do template
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Insere template na tela
    answersBox.appendChild(answerTemplate);

  });

  // Cria evento em todos os botões
  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      checkAnswer(this, buttons);
    });
  });

  // Incrementa o número atual de questões
  actualQuestion++;

}

// Verificando se resposta está correta
function checkAnswer(btn, buttons) {
  
  // Exibir respostas erradas e a certa
  buttons.forEach(function(button) {

    if(button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");
      // checa se o usuário acertou
      if(btn === button) {
        // incrementa os pontos
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }

  });

  nextQuestion();

}

// Exibe a próxima pergunta
function nextQuestion() {

  // Timer para ver se acertou ou errou
  setTimeout(function() {

    // checa se ainda há mais perguntas
    if(actualQuestion >= questions.length) {
      // apresenta msg de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion)

  }, 1000);

}

// Tela final
function showSuccessMessage() {

  hideOrShowQuizz();

  // calc score
  const score = ((points / questions.length) * 100).toFixed(2);
  const scoreDisplay = document.querySelector("#display-score span");

  scoreDisplay.textContent = score.toString();

  // alterar número de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // alterar total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;

}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// Mostra ou exibe o quizz
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Inicialização
init();