export const quizData = {
    title: "Prerequisite Quiz",
    questions: [
        {
            question: "Which language is D3.js written in?",
            type: "multiple-choice",
            options: ["JavaScript", "Python", "Java", "C++"],
            correctAnswer: 0,
            explanation: "D3 stands for Data-Driven Documents and is a JavaScript library."
        },
        {
            question: "You need to be a master of SVG to start learning D3.",
            type: "true-false",
            correctAnswer: "false",
            explanation: "While D3 uses SVG extensively, you can learn SVG concepts as you go through the course."
        },
        {
            question: "Which of these is NOT a core web standard used by D3?",
            type: "multiple-choice",
            options: ["HTML", "CSS", "SVG", "Flash"],
            correctAnswer: 3,
            explanation: "Flash is a deprecated technology. D3 relies on modern, open web standards like HTML, CSS, and SVG."
        }
    ]
};
export default quizData;
