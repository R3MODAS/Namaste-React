import User from "../../components/User/User"
import Styles from "./About.module.css"
import {Component} from "react"

class About extends Component {
  constructor(props){
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("Parent Component Did Mount");
  }

  render(){
    // console.log("Parent Render");
    return (
      <div className={`${Styles.AboutContainer}`}>
      <User name = "Child 1" />
    </div>
  )
}
}

export default About