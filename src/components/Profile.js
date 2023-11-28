import React from "react";

class Profile extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
  
    render(){
        return(
            <div className="profile">
                <h2>This is Profile class </h2>
                <h3>count :{this.state.count}  </h3>
                <button onClick={()=>{
                    
                   this.setState((prevState)=>({
                    count:prevState.count+1,
                   })); 
                }}>Plus</button>
           </div>     
        );
    }
}

export default Profile;