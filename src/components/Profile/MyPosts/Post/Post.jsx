import p from './Post.module.css';

const Post = (props) => {
    return(
        <div>
            <div>{props.post_name}, {props.author}</div>
            <div className={p.avatar}>
                <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"></img>
                </div>
        </div>
    );
};

export default Post;