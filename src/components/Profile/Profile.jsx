import c from './Profile.module.css';
import Post from './MyPosts/Post/Post.jsx';

console.log(c);

const Profile =()=> {
    return(
        <div className={c.app_content}>
            <div className={c.content_image}>
                <img src="https://cdn.hipwallpaper.com/i/87/74/l3wfih.jpg"></img>
            </div>
            <div className={`${c.item} ${c.active}`}>ME</div>
            <div className={c.item}>My friends</div>
            <div className={c.item}>My videos</div>
            <div className={c.item}>My images</div>
            <div className={c.item}>Profile</div>
            <div className={c.item}>My Posts</div>
            <Post post_name="Hi, whassap?" author="Artem"/>
            <Post post_name="This is my first post?" author="Lebanon"/>
            <Post />
        </div>
    )
}

export default Profile;