import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';

import './HomeMainbar.css';
import QuestionList from './QuestionList';
import { useSelector } from 'react-redux';

const HomeMainbar = () => {


  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

   const questionList = useSelector((state) => (state.questionsReducer))

  // console.log(questionList);  

  // var questionList = [{
  //   id: 1,
  //   upVote: 3,
  //   downVote: 2,
  //   noOfAnswers: 2,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //    answerBody: "Answer",
  //    userAnswered: 'kumar',
  //    answeredOn: 'jan 2',
  //    userId: 2,

  //   }]

  // },{
  //   id: 2,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswer: 0,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //    answerBody: "Answer",
  //    userAnswered: 'kumar',
  //    answeredOn: 'jan 2',
  //    userId: 1,

  //   }]
  // },{
  //   id: 3,
  //   upVotes: 3,
  //   downVotes: 2,
  //   noOfAnswer: 0,
  //   questionTitle: "What is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongodb"],
  //   userPosted: "mano",
  //   userId: 1,
  //   askedOn: "jan 1",
  //   answer: [{
  //    answerBody: "Answer",
  //    userAnswered: 'kumar',
  //    answeredOn: 'jan 2',
  //    userId: 2,

  //   }]  
  // }]


 

   const checkAuth = () => {

       if(user === null){
        alert("login or signup to ask a question");
        navigate('/Auth');    
       }
       else{
         navigate('./AskQuestion');
       }

   }
 

  return (
    <div className= 'main-bar'>
        <div className="main-bar-header">
               {
                location.pathname === '/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
               }
               <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
        </div>
        <div>
        {questionList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionList.data.length} questions</p>
            <QuestionList questionsList={questionList.data} />
          </>
        )}
        </div>
    </div>
  );
};

export default HomeMainbar;