import { Component } from "react";
import User from "../components/User";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
        <User name="Remo" location="Kanchrapara" />
    );
  }
}

export default About;
