import CommentsBox from "./CommentsBox";
import RatingSection from "./RatingSection";
import UserInfo from "./UserInfo";

export default function FeedbackForm(){
    return (
        <div className="feedbackForm">
            <UserInfo />
            <RatingSection />
            <CommentsBox />
        </div>
    )
}