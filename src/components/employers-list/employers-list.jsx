import './employers-list.css'
import EmployersListItem from '../employers-list-item/employers-list-item';

const EmployersList = ({data,onDelete}) => {
    const elements = data.map( i => {
        const {id,...itemProps} = i
        return (
            <EmployersListItem key={id} {...itemProps}
            onDelete= {() => onDelete(id)}/>

        )
    })
    return (
        <ul className="app-list list-group">
            {elements}

        </ul>
    )
}

export default EmployersList;