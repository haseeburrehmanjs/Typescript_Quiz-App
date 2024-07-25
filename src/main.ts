interface Quiz {
    title: string;
    questions: QuizQuestion[];
}

interface QuizQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
}

const typeScriptQuiz: Quiz = {
    title: "TypeScript Basics",
    questions: [
        {
            question: "What is TypeScript?",
            options: [
                "A programming language",
                "A superset of JavaScript",
                "A database management system",
                "A CSS framework"
            ],
            correctAnswer: "A superset of JavaScript"
        },
        {
            question: "Which keyword is used to define a variable in TypeScript?",
            options: ["let", "var", "const", "All of the above"],
            correctAnswer: "All of the above"
        },
        {
            question: "How do you define an interface in TypeScript?",
            options: [
                "interface MyInterface {}",
                "class MyInterface {}",
                "type MyInterface {}",
                "module MyInterface {}"
            ],
            correctAnswer: "interface MyInterface {}"
        },
        {
            question: "What is the file extension for TypeScript files?",
            options: [".ts", ".js", ".tsx", ".json"],
            correctAnswer: ".ts"
        },
        {
            question: "How do you compile a TypeScript file?",
            options: [
                "tsc filename.ts",
                "node filename.ts",
                "npm start filename.ts",
                "tsc run filename.ts"
            ],
            correctAnswer: "tsc filename.ts"
        },
        {
            question: "What command initializes a TypeScript project?",
            options: [
                "tsc --init",
                "tsc init",
                "tsc -initialize",
                "tsc create"
            ],
            correctAnswer: "tsc --init"
        },
        {
            question: "What is the use of the 'any' type in TypeScript?",
            options: [
                "To specify that a variable can hold any type of value",
                "To specify a string type",
                "To specify a number type",
                "To specify an object type"
            ],
            correctAnswer: "To specify that a variable can hold any type of value"
        },
        {
            question: "What is the TypeScript syntax to define a function that returns a number?",
            options: [
                "function myFunction(): number {}",
                "function myFunction() {}: number",
                "number function myFunction() {}",
                "function: number myFunction() {}"
            ],
            correctAnswer: "function myFunction(): number {}"
        },
        {
            question: "What is the purpose of 'tsconfig.json' in a TypeScript project?",
            options: [
                "To configure the TypeScript compiler options",
                "To list the dependencies of the project",
                "To define the entry point of the project",
                "To configure the linting rules"
            ],
            correctAnswer: "To configure the TypeScript compiler options"
        },
        {
            question: "How do you specify an optional property in a TypeScript interface?",
            options: [
                "property?: type",
                "property: type?",
                "optional property: type",
                "property: type = optional"
            ],
            correctAnswer: "property?: type"
        }
    ]
};

// console.log(typeScriptQuiz.questions);

// HTML ELEMENT USE IN TYPESRIPT
let question = document.querySelector('#question') as HTMLHeadingElement
let radioInputContainer = document.querySelector('#radio-inputs-container') as HTMLDivElement
let nextBtn = document.querySelector('#nextBtn') as HTMLButtonElement
let quiz_container = document.querySelector('#quiz-container') as HTMLDivElement
let result_container = document.querySelector('#result-container') as HTMLDivElement

let currentIndex: number = 0
let rightAnswer: number = 0
let wrongAnswer: number = 0

// RENDER HTML FUNCTION
let renderHtml = () => {
    radioInputContainer.innerHTML = ''
    if (currentIndex === typeScriptQuiz.questions.length) {
        quiz_container.style.display = 'none'
        result_container.style.display = 'block'
        quiz_container.innerHTML += `
        <h1>${rightAnswer > wrongAnswer ? 'You Win' : 'You Lose'}</h1>
        <div>Right Answer ${rightAnswer}</div>
        <div>Wronge Answer ${wrongAnswer}</div>
        `
    }
    if (currentIndex === typeScriptQuiz.questions.length - 1) {
        nextBtn.innerText = 'Submit'
    } else {
        let que = typeScriptQuiz.questions[currentIndex]
        question.innerText = `${currentIndex + 1}) ${que.question}`

        let allOption = que.options.map((item, index) => radioInputContainer.innerHTML +=
            `<label class="py-2">
                <input type="radio" name="${currentIndex}" value="${item}">
                <span class="px-2">${item}</span>
            </label class="py-2">`)
        // console.log(allOption);
    }

    if (currentIndex === typeScriptQuiz.questions.length - 1) {
        nextBtn.innerHTML = 'submit'
    }
}

renderHtml()

// NEXT BUTTON FUNCTION
nextBtn.addEventListener('click', () => {
    let selected = document.querySelector(`input[name='${currentIndex}']:checked`) as HTMLInputElement
    if (selected) {
        if (selected.value === typeScriptQuiz.questions[currentIndex].correctAnswer) {
            rightAnswer++
            console.log(`right ${rightAnswer}`);

        } else {
            wrongAnswer++
            console.log(`Wrong ${wrongAnswer}`);

        }
        currentIndex++
        renderHtml()
    }
})
