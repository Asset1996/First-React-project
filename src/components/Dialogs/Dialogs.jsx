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
    return (
        <div className={d.dial_content}>
            <div className={d.dialogs}>
                <Dialog_item name="Fadid" id="1"/>
                <Dialog_item name="Lara" id="2"/>
                <Dialog_item name="Rachel" id="3"/>
                <Dialog_item name="Michael" id="4"/>
                <Dialog_item name="John" id="5"/>
            </div>
            <div className={d.messages}>
                <Message_item message="Hi"/>
                <Message_item message="I am a hero"/>
                <Message_item message="Whassap"/>
            </div>
        </div>
    );
};

export default Dialogs;