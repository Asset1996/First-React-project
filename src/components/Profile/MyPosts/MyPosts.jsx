import Post from './Post/Post';
import c from './MyPosts.module.css';

const MyPosts = (props) => {

    let Post_elem = 
        props.state.Post_data.map( (el) => <Post text={el.text} id={el.id}/>
    );
    return (
        <div className={c.myposts_main}>
            <div className={c.avatar}>
                <textarea cols="30" rows="2"></textarea>
                <button>Add Post</button>
            </div>
            <div className={c.avatar_image}>
                <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"></img>
                {Post_elem}
            </div>
        </div>
    );
};

export default MyPosts;