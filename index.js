const quizDB =[
    {
       question:"q1:what is the full form of HTML",
       a:"hello to my land",
       b:"hey text markup language",
       c:"hypertext makeup language",
       d:"hypertext markup lenguage",
       ans:"ans4"
    },
    {
        question:"q2:What is the capital city of Gujarat?",
        a:"Ahmedabad",
        b:"Gandhinagar",
        c:" Surat",
        d:" Rajkot",
        ans:"ans2"
     },
     {
        question:"q3:What is the official language of Gujarat?",
        a:"Hindi",
        b:"Gujarati",
        c:"English",
        d:"Marathi",
        ans:"ans2"
     },
     {
        question:"q4:Which river flows through the city of Ahmedabad?",
        a:"Sabarmati",
        b:" Narmada",
        c:" Tapti",
        d:" Mahi",
        ans:"ans1"
     },
     {
        question:"q5:What is the famous kite festival celebrated in Gujarat?",
        a:"Holi",
        b:" Navratri",
        c:" Diwali",
        d:" Uttarayan",
        ans:"ans2"
     },
     {
        question:"q6:Which of the following cities is not located in Gujarat?",
        a:"Vadodara",
        b:" Jamnagar",
        c:" Udaipur",
        d:" Bhavnagar",
        ans:"ans3"
     },
     {
        question:"q7:Who is the current Chief Minister of Gujarat?",
        a:"Narendra Modi",
        b:" Amit Shah",
        c:" Vijay Rupani",
        d:" Anandiben Patel",
        ans:"ans3"
     },
     {
        question:"q8:What is the name of the famous hill station located in Gujarat?",
        a:"Mount Abu",
        b:" Kodaikanal",
        c:" Darjeeling",
        d:" Lonavala",
        ans:"ans1"
     },
     {
        question:"q9:Which is the largest city in Gujarat by population?",
        a:"Marine Drive",
        b:" Juhu Beach",
        c:" Dumas Beach",
        d:" Baga Beach",
        ans:"ans3"
     },
     {
        question:"q10:What is the name of the famous beach located in Gujarat?",
        a:"Rani ki Vav",
        b:"Champaner-Pavagadh Archaeological Park",
        c:" Dwarka",
        d:" Somnath Temple",
        ans:"ans3"
     },
];
const question = document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelector('answer')

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
   const questionList =quizDB[questionCount]
   question.innerText = questionList.question;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
}

loadQuestion();
 const getCheckAnswer = () => {
       let answer;
       answers.forEach((curAnsElem) => {
         if(curAnsElem.checked){
            answer = curAnsElem.id;
         }
       });
        return answer;     
 };
submit.addEventListener('click',() => {
   const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if(checkedAnswer === quizDB[questionCount].ans){
     score++;
   };

     questionCount++;
      
     if (questionCount < quizDB.length ) {
          loadQuestion();
     }
      
     
});