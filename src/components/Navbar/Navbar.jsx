import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar =()=> {
    return(
        <div className={n.app_nav}>
           <div> <NavLink to="/profile" activeClassName={n.active}>Profile</NavLink> </div>
           <div> <NavLink to="/dialogs" activeClassName={n.active}>Dialogs</NavLink> </div>
           <div> <a>Contacts</a> </div>
           <div> <a>Feedback</a> </div>
           <div> <a>Settings</a> </div>
        </div>
    )
}

export default Navbar;