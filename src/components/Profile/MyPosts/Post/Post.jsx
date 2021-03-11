import p from './Post.module.css';

const Post =(props)=> {
    return(
        <div>{props.text} {props.id}</div>
    );
}

export default Post;    