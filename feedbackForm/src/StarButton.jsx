export default function StarButton({value,isSelected,onClick}){
    return (
        <button className={`star ${isSelected ? "selected" : ""}`}
      onClick={onClick}> ★ </button>
    )
}