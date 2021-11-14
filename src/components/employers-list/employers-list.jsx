import './employers-list.css'
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data,onDelete,onToggleRise,onToggleIncrease}) => {
    const elements = data.map( i => {
        const {id,...itemProps} = i
        return (
            <EmployersListItem key={id} {...itemProps}
            onDelete= {() => onDelete(id)}
            onToggleRise={() => onToggleRise(id)}
            onToggleIncrease={() => onToggleIncrease(id)}/>

        )
    })
    return (
        <ul className="app-list list-group">
            {elements}

        </ul>
    )
}

export default EmployersList;