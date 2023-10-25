import React from "react";
import Styles from "./User.module.css";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        }
    }

    async componentDidMount() {
        const res = await fetch("https://api.github.com/users/R3MODAS");
        const json = await res.json();
        this.setState({ userData: json })
    }

    render() {

        const { avatar_url: userimg, name, location, html_url: url, id } = this.state.userData;

        return (
            <div className={`Container ${Styles.UserContainer}`}>
                <img className={Styles.UserImg} src={userimg} alt={id} />
                <h2 className={Styles.UserName}>{name}</h2>
                <h3 className={Styles.UserLoc}>Location: {location} 🔥</h3>
                <h3 className={Styles.UserLink}><a href={url} target="blank">Visit my Github 🚀</a></h3>
            </div>
        )
    }
}

export default User;
