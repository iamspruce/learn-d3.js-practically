export const quizData = {
    title: "Getting Started Quiz",
    questions: [
        {
            question: "What is the recommended way to include D3 in a modern project?",
            type: "multiple-choice",
            options: ["NPM / ES Modules", "Copy-pasting the whole library", "Using a <script> tag only", "Downloading a Java Jar"],
            correctAnswer: 0,
            explanation: "While <script> tags work, NPM and ES Modules are standard for modern web development."
        },
        {
            question: "Which D3 version are we using in this course?",
            type: "multiple-choice",
            options: ["v3", "v5", "v7", "v1"],
            correctAnswer: 2,
            explanation: "This course is built using D3 v7, the latest major version."
        }
    ]
};
export default quizData;
