import StarButton from "./StarButton";

export default function StarSelector({rating,onRatingChange}){
    return (
        <div className="starSelector">
            {[1,2,3,4,5].map((value)=>(
                <StarButton key={value} value={value} isSelected={value<=rating} onClick={()=>onRatingChange(value)}/>
            ))}
        </div>
    )
}