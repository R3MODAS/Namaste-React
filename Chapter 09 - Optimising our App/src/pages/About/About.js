import User from "../../components/User/User"
import Styles from "./About.module.css"
import {Component} from "react"

class About extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={`${Styles.AboutContainer}`}>
      <User name = "Child 1" />
    </div>
  )
}
}

export default About