import './App.css';
import { useState } from 'react';
import verifiedLogo from './assets/verified-symbol-icon.svg'
import postContImg from './assets/Witcher_IV_Wallpaper_01_13840x2160_EN.jpg'

function App() {
  return (
    <div>
      <ProfileComponent />
      <PostComponent
        accountLogo={"https://pbs.twimg.com/profile_images/1867379966989492224/MO7PyOjk_400x400.jpg"}
        accountName={"The Witcher"}
        discipt={"We're thrilled to reveal the first look at #TheWitcherIV — our upcoming single-player open-world RPG. It marks the beginning of a new saga with Ciri as a protagonist, embarking on her own journey to become a professional monster slayer."}
        img={postContImg}
      />
      <PostComponent
        accountLogo={"https://pbs.twimg.com/profile_images/1736703870800162816/GmgJrMmd_400x400.png"}
        accountName={"Cyberpunk 2077"}
        discipt={"Reaching out behind the Blackwall to wish So Mi a Happy Birthday. 🥳 Past or present, there's no netrunner who deserves a bigger hug than her! ❤️"}
        img={"https://pbs.twimg.com/media/Gf-vceBX0AAaa-y?format=jpg&name=large"}
      />
    </div>
  );
}

function ProfileComponent() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="component">
      <div className="icon">
        <img
          src="https://pbs.twimg.com/profile_banners/18759851/1734053054/1500x500"
          className="icon-bg"
          alt="Background"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1867379966989492224/MO7PyOjk_400x400.jpg"
          className="img-icon"
          alt="Icon"
        />
        <button
          className={isFollowing ? "following" : ""}
          onClick={handleFollowClick}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
      <div className="title">
        <h4>The Witcher</h4>
        <img
          src={verifiedLogo}
          className="title-verified-png"
          alt="Verified Badge"
        />
      </div>
      <div className="description">
        <p>
          Welcome to the official X account for The Witcher franchise and The
          Witcher IV, the upcoming open-world RPG developed by CD PROJEKT RED.
        </p>
      </div>
    </div>
  );
}

function PostComponent({accountLogo, accountName, discipt, img}) {
  return (
    <div className="post-component">
      <div className="header">
        <img
          src={accountLogo}
          className="PostComponent-img-icon"
          alt="Icon"
        />
        <div className="post-title">
          <h4>{accountName}</h4>
          <img
            src={verifiedLogo}
            className="post-verified-png"
            alt="Verified Badge"
          />
        </div>
      </div>
      <div className="discript">
        <p>
          {discipt}
        </p>
        <img 
          // src={postContImg} 
          src={img}
          className='postImg'
          alt="post-img" 
        />
      </div>
    </div>
  );
}

export default App;
