import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    this.state = {
      userInfo: {
        name:"Dummy",
        location:"Default",
        
      },
    };
  }
  async componentDidMount() {
    // console.log("Component Did Mount");
    const data = await fetch("https://api.github.com/users/rohan197770");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }
  componentDidUpdate()
  {
    console.log("Component Did Update"); 
  }
  render() {
    const {name,location,avatar_url}=this.state.userInfo;
    return (
       
      <div className="user-card">
        
        <img src={avatar_url}/>
        <h1>Name:{name}</h1>
        
        <h2>Location:{location}</h2>
        <h3>Contact: @rohan197770</h3>
      </div>
    );
  }
}
export default UserClass;
