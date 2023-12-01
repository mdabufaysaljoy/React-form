import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Signup from "./Components/Signup";

class App extends React.Component {
  state = {
    users: [],
  };
  createUser = user => {
    user.id = new Date().getTime().toString()
    this.setState({
      users:[...this.state.users,user]
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <>
        <Signup createUser={this.createUser} />
        <div className="my-5">
          <h3>All registrared users</h3>
          <hr />
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                key={user.id}
                className="list-group-item list-group-item-action"
              >
                <b>{user.name}</b> - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
