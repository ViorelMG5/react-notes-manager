import { Trash, Window } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";



export function TextCard({title, content, date, onClickTrash, onClick}) {

    const deleteNote = (e) => {
        onClickTrash();
        e.stopPropagation()
    }
    return (
        <div  onClick={onClick} className="card p-3">
            <div className="d-flex justify-content-between">
                <h4>{title}</h4>
                <Trash onClick={deleteNote} className="delete"/>
            </div>
            <div className="mb-2 border-bottom pb-2">
                <span>{date}</span>
            </div>
            <p>{content}</p>
        </div>
    ) 
}