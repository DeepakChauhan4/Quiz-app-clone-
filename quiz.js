const quizData = [
    {
        question: 'What is the capital of India?',
        answers: {
          a: 'London',
          b: 'Paris',
          c: 'New delhi',
        },
        correctAnswer: 'c'
      },
      {
        question: 'What is 2 + 2?',
        answers: {
          a: '3',
          b: '4',
          c: '5',
        },
        correctAnswer: 'b'
      },
      {
          question: 'What is java?',
          answers: {
            a: 'language',
            b: 'programming language',
            c: 'compiler',
          },
          correctAnswer: 'b'
        },
        {
          question: 'What is value of 3! in factorial?',
          answers: {
            a: '6',
            b: '2',
            c: '3',
          },
          correctAnswer: 'a'
        },
    // Add more questions here
  ];
  
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submitBtn');
  const resultContainer = document.getElementById('result');
  
  function buildQuiz() {
    const output = [];
  
    quizData.forEach((questionData, index) => {
      const answers = [];
  
      for (const letter in questionData.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${index}" value="${letter}">
            ${letter}: ${questionData.answers[letter]}
          </label>`
        );
      }
  
      output.push(
        `<div class="question"> ${questionData.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        <br>` // Add space between questions
      );
    });
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;
  
    quizData.forEach((questionData, index) => {
      const answerContainer = answerContainers[index];
      const selector = `input[name=question${index}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      if (userAnswer === questionData.correctAnswer) {
        score++;
      }
    });
  
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
  
    if (score >= 2) {
      resultContainer.innerHTML += "<img src='https://media.giphy.com/media/1MTLxzwvOnvmE/giphy.gif'>";
    } else {
      resultContainer.innerHTML += "<img src='https://media.giphy.com/media/fWfWrZMFTCn2c/giphy.gif'>";
    }
  }
  
  buildQuiz();
  
  submitButton.addEventListener('click', showResults);
  