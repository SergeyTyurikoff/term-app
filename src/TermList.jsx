import "./TermList.css"
import {TermCard} from "./TermCard.jsx";

const terms = [
    {
      title: "React",
      description: "Библиотека для создания пользовательских компонентов",
    },
    {
        title: "React-компонент",
        description: "Функция, возвращающая React-элемент",
    },
    {
        title: "Render",
    },
]
export const TermList = () => {
    return (
        <ul className="term-list">
            {terms.map(({title, description}, index) => {
                return (
                    <li key={index}>
                        <TermCard
                            title={title}
                            description={description}
                        />
                    </li>
                )
            })}
        </ul>
    )
}