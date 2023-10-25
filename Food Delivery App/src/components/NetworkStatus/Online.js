import Styles from './Online.module.css'
import {RiWifiOffLine} from "react-icons/ri"

const Online = () => {
  return (
    <div className={`Container ${Styles.OnlineContainer}`}>
        <h1 className={Styles.OnlineMainHeading}>Looks like you are Offline <RiWifiOffLine /></h1>
        <h2>Please Check your Internet Connection properly</h2>
    </div>
  )
}

export default Online