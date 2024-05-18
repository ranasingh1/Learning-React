import React from "react";
import UserContext from "../../utils/UserContext";

class Profile extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            count:0,
            user: {},
        }

        
    }

    async componentDidMount(){
      
        const data = await fetch("https://api.github.com/users/ransingh1");
        const jsonData = await data.json();
        this.setState({
            user: jsonData
        })
        console.log("Component mounted")
       //setting interval here
    //    this.timer = setInterval(()=>console.log("Interveal"), 1000) 
    }

/// use of unmount     
   componentDidUpdate(){
    console.log('updated');

   } 

   //clearing interval
    componentWillUnmount(){
        console.log('component will unmount');
//     clearInterval(this.timer);
    }

  
    render(){
          const {user} = this.state;
        console.log("render");
        return(
            <div className="profile">
                <h1>This is Profile class </h1>
                <UserContext.Consumer>
        {
          ({user})=>(<h4>
            {user.name}
            -{ user.email}
          </h4>)
        }
      </UserContext.Consumer>

                 <h2>Hello! {this.props.names}</h2>
                 <img src={user.avatar_url} alt="" />
                {/* <h3>count :{this.state.count}  </h3>
                <button onClick={()=>{
                    
                   this.setState((prevState)=>({
                    count:prevState.count+1,
                   })); 
                }}>Plus</button> */}
           </div>     
        );
    }
}

export default Profile;