import Group from "./Group";
export default function List(){
    return(
        <ul className="list-group-mt5">
            <Group name="Facebook" id="ch1"/>
            <Group name="twitter" id="ch2"/>
            <Group name="Instagram" id="ch3"/>
        </ul>
      
    );
}