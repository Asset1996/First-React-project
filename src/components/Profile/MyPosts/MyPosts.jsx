import Post from './Post/Post';
import react from 'react';
import c from './MyPosts.module.css';

const MyPosts = (props) => {

    let Post_elem =
        props.state.Post_data.map((el) => <Post text={el.text} id={el.id} />
        );

    //let add_Post = () => {   //function add_Post() {    - THE SAME
    //alert('dawe222')        //alert('dawe222')
    //}                        //}

    let add_new_Post = () => {
        let text = new_post_element.current.value;    //3. Получаем текущее значение textarea по референсу new_post_element
        if (text !== '') {
            props.add_post(text);
        } else {
            alert('Please, text something')
        }
        props.text_change('');
    }

    let post_text_change = () => {
        let text = new_post_element.current.value;
        props.text_change(text);
    }

    let text_clear = () => {
        new_post_element.current.value = '';
    }

    let new_post_element = react.createRef();         //1. Создаем пустой reference

    return (
        <div className={c.myposts_main}>
            <div className={c.avatar}>
                <textarea ref={new_post_element} onFocus={text_clear} onChange={post_text_change} value={props.state.new_post_text} cols="30" rows="2"></textarea>   {/*2. передаем reference 'new_post_element' в textarea */}
                <button onClick={add_new_Post}>Add Post</button>
            </div>
            <div className={c.avatar_image}>
                <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"></img>
                {Post_elem}
            </div>
        </div>
    );
};

export default MyPosts;