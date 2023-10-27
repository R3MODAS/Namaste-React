import React from "react";

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
            <div className="min-h-screen flex flex-col items-center justify-center font-ProximaNovaMed">
                <img className="h-72 rounded-full" src={userimg} alt={id} />
                <h2 className="text-3xl font-ProximaNovaBold">{name}</h2>
                <h3 className="text-lg">Location: {location} 🔥</h3>
                <h3><a className="text-lg" href={url} target="blank">Visit my Github 🚀</a></h3>
            </div>
        )
    }
}

export default User;
