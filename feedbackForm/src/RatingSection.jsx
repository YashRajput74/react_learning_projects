import StarSelector from "./StarSelector";

export default function RatingSection({rating,onRatingChange}){
    return (
        <div className="ratingSection">
            <StarSelector rating={rating} onRatingChange={onRatingChange}/>
        </div>
    )
}