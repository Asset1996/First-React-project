import d from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialog_item =(props)=> {
    return(
        <div className={d.dialog_item}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
    );
};

const Message_item =(props)=> {
    return(
        <div className={d.message_item}>{props.message}</div>
    );
};

let dialogs_data = [
    {id: 1, name: "Batman"},
    {id: 2, name: "Robin"},
    {id: 3, name: "Joker"},
    {id: 4, name: "Iron man"}
];

let message_data =[
    {id: 1, message: "Heelloo"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Long time no see!"},
    {id: 4, message: "What plan u got 4 weeknd?"}
];

let dialog_elem = dialogs_data.map(
    el => <Dialog_item id={el.id} name={el.name} />
)

let message_elem = message_data.map(
    attr => <Message_item message={attr.message}/>
)

const Dialogs = (props) => {
    return (
        <div className={d.dial_content}>
            <div className={d.dialogs}>
                {dialog_elem}
            </div>
            <div className={d.messages}>
                {message_elem}
            </div>
        </div>
    );
};

export default Dialogs;