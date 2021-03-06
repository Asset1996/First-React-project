import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {add_post, text_change} from './redux/state';


export let rerenderDom = (state) => {
    ReactDOM.render(     //DOM рисуется ЕДИНОЖДЫ (render - рисовать)
        <React.StrictMode>
            <App 
                state={state} 
                add_post={add_post} 
                text_change={text_change} 
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}