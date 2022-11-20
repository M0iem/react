
export default function Group(props){
    return(
        <li className="list-group-item">
            <input type="checkbox" id={props.id}/>
            <label htmlFor={props.id}>{props.name}</label>
        </li>
    );
}