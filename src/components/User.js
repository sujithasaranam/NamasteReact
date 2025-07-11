import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);
    return (<div className="user-card">
        <h1>Name: {props.name}</h1>
        <h2>Location: Visakhapatnam</h2>
        <h3>Email: sujithas@gmail.com</h3>
        <h4>Count: {count}</h4>
        <h4>Count2: {count2}</h4>
    </div>);
}

export default User;