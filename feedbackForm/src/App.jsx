/* Question 1:
App
├── Header
├── FeedbackForm
│   ├── UserInfo
│   │   ├── NameInput
│   │   └── EmailInput
│   ├── RatingSection
│   │   ├── StarSelector
│   │   │   └── StarButton (×5)
│   └── CommentsBox
└── SummaryDisplay
Features:
User enters name and email
Selects rating via stars
Adds comments
Parent (App) holds final state and passes props to all nested children
SummaryDisplay shows collected feedback in real time
*/

import { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import Header from "./Header";
import SummaryDisplay from "./SummaryDisplay";
import "./App.css"
export default function App(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [comments,setComments]=useState('');
    const [rating,setRating]=useState('');
    function nameChange(e){
        setName(e.target.value);
    }
    function emailChange(e){
        setEmail(e.target.value);
    }
    function commentChange(e){
        setComments(e.target.value);
    }
    function ratingChange(newRating){
        setRating(newRating);
    }
    const wholeInfo={
        name:name,
        email:email,
        comments:comments,
        rating: rating
    }
    return (
        <>
            <Header/>
            <FeedbackForm nameValue={name} emailValue={email} commentValue={comments} nameFunction={nameChange} emailFunction={emailChange} commentFunction={commentChange} rating={rating} onRatingChange={ratingChange}/>
            <SummaryDisplay infoValue={wholeInfo} />
        </>
    )
}