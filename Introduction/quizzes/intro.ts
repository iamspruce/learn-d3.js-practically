export const quizData = {
    title: "Introduction to D3.js",
    questions: [
        {
            question: "What does D3 stand for?",
            type: "multiple-choice",
            options: [
                "Data-Driven Documents",
                "Dynamic Design Display",
                "Digital Data Drawing",
                "Document Data Distribution"
            ],
            correctAnswer: 0,
            explanation: "D3 stands for Data-Driven Documents, emphasizing its focus on binding data to the Document Object Model (DOM)."
        },
        {
            question: "D3.js is a charting library like Chart.js or Highcharts.",
            type: "true-false",
            correctAnswer: "false",
            explanation: "While you can build charts with D3, it is actually a low-level library for manipulating documents based on data. It doesn't provide ready-made charts out of the box."
        },
        {
            question: "Which of the following technologies is D3 primarily used with?",
            type: "multiple-choice",
            options: [
                "HTML, CSS, and SVG",
                "Flash and ActionScript",
                "Canvas only",
                "Python and R"
            ],
            correctAnswer: 0,
            explanation: "D3 works by using standard web technologies: HTML for structure, CSS for styling, and SVG for vector graphics."
        },
        {
            question: "Instead of 'drawing a chart', what is the core philosophy of D3?",
            type: "multiple-choice",
            options: [
                "Using artificial intelligence to predict data",
                "Dragging and dropping icons into a canvas",
                "Binding data to elements and transforming the document",
                "Converting JavaScript into Excel spreadsheets"
            ],
            correctAnswer: 2,
            explanation: "D3's core philosophy is about 'Data-Driven' transformations—binding data to DOM elements and modifying them accordingly."
        }
    ]
};

export default quizData;
