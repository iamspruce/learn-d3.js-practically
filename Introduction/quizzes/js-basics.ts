export const quizData = {
    title: "JavaScript Basics Check",
    questions: [
        {
            question: "Which of the following is the INCORRECT way to declare a variable in modern JavaScript?",
            type: "multiple-choice",
            options: [
                "let count = 10;",
                "const name = 'D3';",
                "variable x = 5;",
                "var y = 20;"
            ],
            correctAnswer: 2,
            explanation: "In JavaScript, you use 'let', 'const', or 'var' to declare variables. 'variable' is not a valid keyword."
        },
        {
            question: "Which of these is a correctly formatted 'for' loop in JavaScript?",
            type: "multiple-choice",
            options: [
                "for (i = 0 to 10) { }",
                "for (let i = 0; i < 10; i++) { }",
                "loop (let i; 10) { }",
                "foreach (i in 0..10) { }"
            ],
            correctAnswer: 1,
            explanation: "The standard 'for' loop syntax in JavaScript is: for (initialization; condition; increment) { }."
        },
        {
            question: "In JavaScript, 'const' is used for variables that should not be reassigned.",
            type: "true-false",
            correctAnswer: "true",
            explanation: "Variables declared with 'const' are read-only and cannot be reassigned after their initial declaration."
        }
    ]
};

export default quizData;
