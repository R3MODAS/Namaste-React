import User from "../components/User"
import {Component} from "react"

class About extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <User name = "Child 1" />
    </div>
  )
}
}

export default About