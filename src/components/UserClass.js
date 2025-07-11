import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count2: 1,
        };
    }
    render()
    {
        const {name, location} = this.props;
            return (<div className="user-card">
        {/* <h1>Name: {this.props.name}</h1>/ */}
        <h1>Name: {name}</h1>
        <h2>Location: {location} </h2>
        <h3>Email: sujithas@gmail.com</h3>
        <h4>Count: {this.state.count}</h4>
        <h4>Count: {this.state.count2}</h4>
    </div>);
    }
}

export default UserClass;