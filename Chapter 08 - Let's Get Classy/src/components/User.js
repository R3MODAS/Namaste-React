import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar: "",
        link: "",
      },
    };

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");

    this.timer = setInterval(() => {
      console.log("SetInterval after 1s");
    }, 1000);

    // Api Call
    const data = await fetch("https://api.github.com/users/r3modas");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component Updated");
  }

  componentWillUnmount() {
    // console.log("Component Unmounted");
    clearInterval(this.timer);
  }

  render() {
    // const { name, location } = this.props;
    // console.log(this.props.name + "Child Render");
    const {
      name,
      location,
      html_url: link,
      avatar_url: avatar,
    } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="user-img" src={avatar} alt="avatar" />
        <div className="user-name">Name : {name}</div>
        <div className="user-loc">Location : {location}</div>
        <a className="user-link" href={link} target="_blank">
          Visit my Github Profile 🚀
        </a>
      </div>
    );
  }
}

export default User;
