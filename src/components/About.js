import { useActionData } from "react-router-dom";

import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <User name="Saranam Sujitha (function)"/>
            <UserClass name={"Saranam Sujitha (class)"} location={"VSKP"} />
            <h2>Dummy branch changes</h2>
        </div>
    )
}

export default About