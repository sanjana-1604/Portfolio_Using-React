import React, {Component} from 'react';
import Projects from './Projects.js';
import SocialProfile from './socialProfile.js';
import profile from './Image/Profile.png';


class App extends Component{
   /* constructor()
    {
        super();
        this.state = {displayBio : false};
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }*/
    state = {displayBio:false};
    toggleDisplayBio=()=>
    {
        this.setState({displayBio:!this.state.displayBio});
    }
    
    render(){
        
        return (
               
            <div>
            <img src={profile} alt='Profile' className ="profile" /> 
            <h1> Hello!</h1>
            <p>My name is Sanjana Porwal</p>
            <p>I am a highly competent IT professional with a proven track record in Mobile software development, testing and document management. </p>
             
            {
            this.state.displayBio?(            
           
            <div>            
            <p>I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.</p>
            <p> Recently, I achieved some certificates on Web development</p>
            <button onClick = {this.toggleDisplayBio}>
               Show less
               </button>
            </div>
            ):(<div>
               <button onClick = {this.toggleDisplayBio}>
               Read More
               </button>
               </div>)
    }
               <hr />
               <Projects />
               <hr />
               <SocialProfile />
               
    </div>
        )
    }
}

export default App;







