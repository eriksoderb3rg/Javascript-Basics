const questions = [
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: "console.log(typeof null);",
    answer: "object",
    explanation: "I JavaScript identifieras `null` som en 'object'-typ, vilket är en känd bugg sedan språket skapades."
  },
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: "console.log([1, 2, 3] instanceof Array);",
    answer: "true",
    explanation: "`instanceof`-operatorn kontrollerar om ett objekt tillhör en viss klass eller inte. Eftersom `[1, 2, 3]` är en array returnerar `instanceof Array` värdet `true`."
  },
  {
    question: "Vad är ett objekt i JavaScript?",
    codeSnippet: "",
    answer: "En samling nyckel-värde par",
    explanation: "Ett objekt i JavaScript är en samling av nyckel-värde-par där varje nyckel kan representera en egenskap eller metod för objektet."
  },
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: "console.log(5 + 3 + '2');",
    answer: "82",
    explanation: "JavaScript utför addition från vänster till höger. Först adderas `5 + 3` till `8`, sedan konkateneras `'8' + '2'`, vilket ger `'82'` som en sträng."
  },
  {
    question: "Vad returnerar följande kod?",
    codeSnippet: "console.log(Boolean(0));",
    answer: "false",
    explanation: "`Boolean(0)` returnerar `false` eftersom `0` anses vara en falsy-värde i JavaScript."
  },
  {
    question: "Vad skriver följande kod ut?",
    codeSnippet: "console.log([1, 2, 3].length);",
    answer: "3",
    explanation: "Metoden `length` på en array returnerar antalet element i arrayen. I det här fallet innehåller arrayen tre element, så `3` skrivs ut."
  },
  {
    question: "Vad är skillnaden mellan `==` och `===` i JavaScript?",
    codeSnippet: "",
    answer: "`==` jämför värde, `===` jämför värde och typ",
    explanation: "`==` är en lös jämförelse som konverterar värdena innan jämförelse, medan `===` är en strikt jämförelse som kontrollerar både värde och typ."
  },
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: "console.log(typeof NaN);",
    answer: "number",
    explanation: "`NaN` (Not-a-Number) är en speciell typ av `number` i JavaScript, vilket gör att `typeof NaN` returnerar `number`."
  },
  {
    question: "Vad blir resultatet av denna operation?",
    codeSnippet: "console.log('10' - 2);",
    answer: "8",
    explanation: "JavaScript konverterar strängen `'10'` till ett tal vid subtraktion, så operationen blir `10 - 2`, vilket ger resultatet `8`."
  },
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: "console.log(false == '');",
    answer: "true",
    explanation: "Vid lös jämförelse (`==`) omvandlas både `false` och tom sträng (`''`) till `0`, vilket gör att jämförelsen returnerar `true`."
  },
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: `
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    answer: "0, 1, 2, 3, 4",
    explanation: "Eftersom `let` har blockscope kommer varje iteration av `i` behålla sitt aktuella värde inuti `setTimeout`, vilket ger `0, 1, 2, 3, 4`."
  },
  {
    question: "Vad är resultatet av följande kod?",
    codeSnippet: `
function greet() {
  console.log("Hello, " + name);
}
let name = "Alice";
greet();`,
    answer: "Hello, Alice",
    explanation: "Variabeln `name` är definierad i det globala scopet innan funktionen `greet()` anropas, vilket gör att `greet` kan använda variabeln och skriva ut `Hello, Alice`."
  },
  {
    question: "Vad returnerar följande kod?",
    codeSnippet: "console.log(null == undefined);",
    answer: "true",
    explanation: "`null` och `undefined` anses vara lika (`==`) vid lös jämförelse, så resultatet är `true`."
  },
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: `
let a = 10;
function test() {
  let a = 20;
  console.log(a);
}
test();`,
    answer: "20",
    explanation: "Variabeln `a` i funktionen `test` skapar ett nytt blockscope, vilket innebär att `a = 20` inom funktionen används och `20` skrivs ut."
  },
  {
    question: "Vad blir resultatet av följande kod?",
    codeSnippet: "console.log(1 + true);",
    answer: "2",
    explanation: "`true` omvandlas till `1` när det adderas med ett tal, så resultatet blir `1 + 1 = 2`."
  },
  {
    question: "Vad returnerar följande kod?",
    codeSnippet: `
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter());
console.log(counter());`,
    answer: "1, 2",
    explanation: "`outer` returnerar en `inner` funktion som bibehåller `count`-variabeln genom closures. Varje anrop av `counter()` ökar `count` och returnerar det nya värdet."
  },
  {
    question: "Vad kommer följande kod att skriva ut?",
    codeSnippet: "console.log(typeof typeof 1);",
    answer: "string",
    explanation: "`typeof 1` returnerar `'number'`, och `typeof 'number'` returnerar `string`, så det slutliga resultatet är `string`."
  },
  {
    question: "Vad blir resultatet av följande kod?",
    codeSnippet: "console.log(+'');",
    answer: "0",
    explanation: "`+`-operatorn konverterar en tom sträng (`''`) till ett tal, vilket blir `0`."
  },
  {
    question: "Vad returnerar följande kod?",
    codeSnippet: `
const arr = [10, 20, 30];
console.log(arr.map(x => x + 1));`,
    answer: "[11, 21, 31]",
    explanation: "`map` applicerar funktionen `x + 1` på varje element i arrayen `arr`, så varje element ökar med `1`."
  }
];

let currentQuestion;

function loadQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[randomIndex];
  document.getElementById("question-text").innerText = currentQuestion.question;
  document.getElementById("code-snippet").innerText = currentQuestion.codeSnippet;
  document.getElementById("user-answer").value = '';
  document.getElementById("feedback").innerText = '';
  document.getElementById("explanation").innerText = '';
  document.getElementById("next-question").style.display = 'none'; // Hide Next Question button
}

function checkAnswer() {
  const userAnswer = document.getElementById("user-answer").value.trim();
  if (userAnswer === currentQuestion.answer) {
    document.getElementById("feedback").innerText = "Correct!";
    document.getElementById("explanation").innerText = '';
    document.getElementById("next-question").style.display = 'block'; // Show Next Question button
  } else {
    document.getElementById("feedback").innerText = `Incorrect. The answer is ${currentQuestion.answer}.`;
    document.getElementById("explanation").innerText = currentQuestion.explanation;
    document.getElementById("next-question").style.display = 'none'; // Hide Next Question button
  }
}

window.onload = loadQuestion;
