import React from 'react';
import SOCIAL_ICON from './data/socialProfile';


/*class socialProfile extends Component{
    
    render()
    {
        const {link, image} = this.props.socialProfile;
        return(
            <div>
            <a href={link}><img src = {image} alt = "social profile"/></a>
            </div>
        
        
        );
    }
}






class socialIcons extends Component{
    render()
    {
        return(
        <div>
            <h2>Connect with me! </h2>
            <div>
            SOCIAL_ICON.map(ICON => {            return <socialProfile key = {ICON.id} socialProfile{ICON} />
            });
            </div>
            
            </div>
        
        
        );
    }
}*/
const SocialProfile = props => {
  const { link, image } = props.socialProfile;

  return (
    <span>
      <a href={link}>
        <img src={image} alt='social-profile' style={{ width: 35, height: 35, margin: 10 }} />
      </a>
    </span>
  )
}

const SocialProfiles = () => (
  <div>
    <h2>Connect with me!</h2>
    <div>
      {
        SOCIAL_ICON.map(SOCIAL_PROFILE => {
          return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
        })
      }
    </div>
  </div>
)


export default SocialProfiles;