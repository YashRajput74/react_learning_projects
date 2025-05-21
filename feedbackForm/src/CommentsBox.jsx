export default function CommentsBox({commentValue,commentFunction}){
    return (
        <textarea value={commentValue} onChange={commentFunction} placeholder="Enter Comments Here..."></textarea>
    )
}