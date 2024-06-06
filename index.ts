#! /usr/bin/env node
import inquirer from "inquirer"

interface Question {
    Question :string;
    choices:string[]
    answer:string
}
const questions :Question[]=[{
    Question: "what is the Capital of france?",
    choices: ["paris","London","Rome","berlin"],
    answer: 'paris'
},{
     Question:"Which country is the largest by Land area?",
     choices:["Russia","China","Canada","United States"],
     answer:"Russia",
},
  {
      Question:"Which planet is known as the red planet?" ,
      choices: ["Earth","Mars","venus","Jupiter"],
      answer: 'Mars'
  },
  {
      Question:"What is the capital of pakistan ?",
      choices: ["Islamabad","Lahore","Karachi","peshawar"],
      answer: 'Islamabad'
  }
];

let score = 0;
async function startQuiz() {
    console.log('Wellcome to the Quiz game!\n');
let {name}= await inquirer.prompt([{
    type:'input',
    name:'name',
    message:'please enter your name:'
}
]); const playerName= name;
console.log(`hello,${playerName}! let start the quiz.\n`);


    for (const question of questions){
        const {userAnswer} = await inquirer.prompt([{
            type:"list",
            name:"userAnswer",
            message:question.Question,
            choices:question.choices
        }
    ]);
    if (userAnswer === question.answer){
        console.log('correct!');
        score++
        } else {
            console.log('Incorrect');  
        }
    }
             console.log(`\n your final score is: ${score} out of ${questions.length}`);
             
    }startQuiz();
