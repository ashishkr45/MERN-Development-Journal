import './App.css';
import verifiedLogo from './assets/verified-symbol-icon.svg'

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

export default PostComponent;