import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile =(props)=> {
    return(
        <div className={c.app_content}>
            <div className={c.content_image}>
                <img src="https://cdn.hipwallpaper.com/i/87/74/l3wfih.jpg"></img>
            </div>
            <MyPosts state={props.state}/>
        </div>
    )
}

export default Profile;