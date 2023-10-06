import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    console.log("Child Render");
    return (
      <div className="user-card">
        <h3>Count : {count}</h3>
        <div>Name : {name}</div>
        <div>Location : {location}</div>
        <div>Contact: Sharadindu Das</div>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default User;
