const questions = [
    {
      question: "Qual é minha comida preferida?",
      options: ["Pizza", "Cachorro-quente", "Strogonoff", "X-tudo"],
      correct: 0,
    },

    {
        question: "Qual é minha cor preferida?",
        options: ["Azul", "Preto", "Royal", "Vermelho"],
        correct: 0,
      },
      {
          question: "Qual é meu maior medo?",
          options: ["Cobra", "Escuro", "Você se machucar", "Morrer engasgado"],
          correct: 2,
        },
        {
          question: "Qual é meu mês do ano favorito?",
          options: ["Dezembro", "Agosto", "Fevereiro", "Março"],
          correct: 0,
        },
        {
          question: "Onde eu pretendo morar?",
          options: ["Todos eles kkk", "Los Angeles", "Nova York", "Estados Unidos"],
          correct: 3,
        },
        {
          question: "O que mais amo fazer com você?",
          options: ["Assistir filmes", "Conversar", "Fazer carinho", "Dormir juntinhos"],
          correct: 2,
        },
        {
          question: "Se você tivesse o poder de fazer tudo, o que faria comigo?",
          options: ["Me guardar na gaveta", "Me colocar em um potinho", "Me tornar igual a você", "Me matar kkk"],
          correct: 1,
        },
        {
          question: "Qual é meu maior sonho?",
          options: ["Ser muito rico", "Alcançar o ápice", "Dominar o mundo", "Te ver feliz"],
          correct: 3,
        },
        {
          question: "Qual é meu jogo favorito",
          options: ["Free fire", "Braws star", "Doors", "Roblox"],
          correct: 1,
        },
        {
          question: "Qual é tamanho do meu pé",
          options: ["39", "32", "35", "38"],
          correct: 3,
        },
        {
          question: "Qual é minha fruta favorita?",
          options: ["Maça", "Melancia", "Banana", "uva"],
          correct: 1,
        },
        {
          question: "Qual é minha data de nascimento",
          options: ["2016", "2004", "2006", "2005"],
          correct: 2,
        },
        {
          question: "Eu sou mais",
          options: ["Puto", "inteligente", "Ansioso", "Tranquilo"],
          correct: 0,
        },
        {
          question: "Qual carro vamos ter ?",
          options: ["Avião kkkkk", "Civic-g10", "siena", "Civic-g11"],
          correct: 1,
        },
        {
          question: "Qual é meu tempo recorde do chuveiro",
          options: ["mais de 60min", "20min", "15min", "10min"],
          correct: 0,
        },
        {
          question: "Qual é meu local de nascimento",
          options: ["Belo horizonte", "Bahia", "osasco", "barueri"],
          correct: 2,
        },
        {
          question: "Qual é meu estilo de musica favorito ?",
          options: ["Phonck", "Jazz", "Eletronica", "Rock"],
          correct: 1,
        },
    
        {
          question: "Qual é o raio qualculado maximo de meu amor por vc ?",
          options: ["Maior que a terra", "Maior que o univeros", "Maior a tempo relativo", "Nao  tem definoção de grandeza"],
          correct: 3,
        },
    // ... (demais perguntas) ...
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let wrongAnswers = []; // Armazena perguntas erradas
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  
  questionElement.style.color = "#fff";
  questionElement.style.fontSize = "20px";
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = ""; // Limpa opções anteriores
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => checkAnswer(index, li);
      optionsElement.appendChild(li);
    });
  }
  
  function checkAnswer(selectedIndex, element) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
      element.classList.add("correct");
      score++;
    } else {
      element.classList.add("wrong");
      optionsElement.children[currentQuestion.correct].classList.add("correct");
  
      // Adiciona a pergunta e resposta correta no array de erros
      wrongAnswers.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.options[currentQuestion.correct],
      });
    }
    setTimeout(nextQuestion, 1000);
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = score;
  
    // Limpa o conteúdo anterior (se houver)
    resultElement.innerHTML = `<h2>Sua pontuação: <span id="score">${score}</span></h2>`;
  
    const errorContainer = document.createElement("div");
    errorContainer.innerHTML = "<h3>Perguntas erradas:</h3>";
    if (wrongAnswers.length > 0) {
      wrongAnswers.forEach((error) => {
        const errorItem = document.createElement("p");
        errorItem.innerHTML = `<strong>${error.question}</strong><br>Resposta correta: ${error.correctAnswer}`;
        errorContainer.appendChild(errorItem);
      });
    } else {
      errorContainer.innerHTML += "<p>Parabéns! Você não errou nenhuma pergunta.</p>";
    }
    resultElement.appendChild(errorContainer);
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    wrongAnswers = []; // Reseta os erros
    resultElement.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
  
  loadQuestion();
  
  

  