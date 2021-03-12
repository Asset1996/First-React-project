import {rerenderDom} from '../render';

let state = {
    Post_data: [
        {text: "This is my first post", id:"Post id: 1"},
        {text: "This is my second post", id:"Post id: 2"},
        {text: "This is my third post", id:"Post id: 3"},
        {text: "This is my fourth post", id:"Post id: 4"},
        {text: "This is my fifth post", id:"Post id: 5"}
    ],
    new_post_text: 'Text here...',
    dialogs_data: [
        {id: 1, name: "Batman"},
        {id: 2, name: "Robin"},
        {id: 3, name: "Joker"},
        {id: 4, name: "Iron man"}
    ],
    message_data: [
        {id: 1, message: "Heelloo"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Long time no see!"},
        {id: 4, message: "What plan u got 4 weeknd?"}
    ],
}

export let add_post =(post_message)=> {
    let new_post = {
        text: post_message,
        id: "Post id: 6",
    };
    state.Post_data.push(new_post);
    rerenderDom(state);
}

export let text_change =(text)=> {
    state.new_post_text = text;
    console.log(state.new_post_text);
    rerenderDom(state);
}

export default state;