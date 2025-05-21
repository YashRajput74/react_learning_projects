export default function SummaryDisplay({infoValue}){
    return (
        <div className="summaryDisplay">
            <p>Full Name: {infoValue.name}</p>
            <p>Email: {infoValue.email}</p>
            <p>Comments: {infoValue.comments}</p>
            <p>Rating: {infoValue.rating} Stars</p>
        </div>
    )
}