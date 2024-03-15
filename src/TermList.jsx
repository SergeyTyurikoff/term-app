import "./TermList.css"
import {TermCard} from "./TermCard.jsx";
export const TermList = ({ terms, onDelete }) => {
    return (
        <ul className="term-list">
            {terms.map(({id, title, description}) => {
                return (
                    <li className="term-list__item" key={id}>
                        <TermCard
                            id={id}
                            title={title}
                            description={description}
                            onDelete={onDelete}
                        />
                    </li>
                )
            })}
        </ul>
    )
}