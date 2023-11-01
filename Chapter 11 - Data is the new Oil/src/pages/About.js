import User from "../components/User"
import { Component } from "react"
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <UserContext.Consumer> */}
          {/* {(value) => <h1>{value.loggedInUser}</h1>} */}
          {/* {({loggedInUser}) => <h1>{loggedInUser}</h1>} */}
        {/* </UserContext.Consumer> */}
        <User name="Child 1" />
      </div>
    )
  }
}

export default About