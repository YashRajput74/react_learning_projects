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

import FeedbackForm from "./FeedbackForm";
import Header from "./Header";
import SummaryDisplay from "./SummaryDisplay";

export default function App(){
    
    return (
        <>
            <Header/>
            <FeedbackForm />
            <SummaryDisplay />
        </>
    )
}