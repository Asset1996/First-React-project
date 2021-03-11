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

const Dialogs = (props) => {

    let dialog_elem = 
        props.state.dialogs_data.map( (el) => <Dialog_item id={el.id} name={el.name} />
    )

    let message_elem = 
        props.state.message_data.map( (attr) => <Message_item message={attr.message}/>
    )

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

export {
    Dialogs
}