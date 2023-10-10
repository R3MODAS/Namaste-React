import { Component } from "react";
import User from "../components/User";
import UserFunc from "../components/UserFunc";


class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about">
        {/* <User name="Remo" location="Kanchrapara" /> */}
        <UserFunc />
      </div>
    );
  }
}

export default About;
