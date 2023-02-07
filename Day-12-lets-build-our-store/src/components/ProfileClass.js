import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     count: 0,
        //     count2: 0, 
        // };
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy locatoin",
            }
        };
        console.log('child- constructor');
    }
    
    async componentDidMount(){
        const data =  await fetch('https://api.github.com/users/santoshit8800');
        const json =  await data.json;
        this.setState({
            userInfo: json,
        })

        console.log('child- componentDidMount');
    }
    
    render() {
        
        const {count} = this.state;
        console.log('child- render');
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name {this.state.userInfo.name}</h2>  
                <h2>Location {this.state.userInfo.location}</h2>  

                {/* <h1>Profile Class Component</h1>
                <h2>Name {this.props.name}</h2>                                 */}
                {/* <button onClick={()=> {
                    this.setState({
                        count: 1,
                    });
                }}>Setcount</button> */}
            </div>
        )
    }
}

export default Profile;