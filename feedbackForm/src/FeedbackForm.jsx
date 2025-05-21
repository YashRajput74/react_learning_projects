import CommentsBox from "./CommentsBox";
import RatingSection from "./RatingSection";
import UserInfo from "./UserInfo";

export default function FeedbackForm({nameValue,emailValue,commentValue,nameFunction,emailFunction,commentFunction,rating,onRatingChange}){
    return (
        <div className="feedbackForm">
            <UserInfo nameValue={nameValue} emailValue={emailValue} nameFunction={nameFunction} emailFunction={emailFunction}/>
            <RatingSection rating={rating} onRatingChange={onRatingChange}/>
            <CommentsBox commentValue={commentValue} commentFunction={commentFunction}/>
        </div>
    )
}