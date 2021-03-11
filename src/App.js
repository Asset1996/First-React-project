import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path='/profile' render={()=><Profile state={props.state}/>} />
        <Route path='/dialogs' render={()=><Dialogs state={props.state} state={props.state}/>} />
      </div>
    </BrowserRouter>
  );
};

export default App;