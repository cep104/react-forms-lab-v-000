import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (event) => {
    this.setState(
      {
        //event.target.name would be username or password.
        //name is from the form.
        //event.target.value is what is being filled in.
        //if you want to check this use console.log
        [event.target.name]: event.target.value,
      },
      () => console.log(this.state)
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state);
      // could also use:
      // username: this.state.username,
      //password: this.state.password,
    }
  };

  render() {
    return (
      //could also just do onSubmit={this.handleSubmit}
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              //onChange={this.handleChange}
              onChange={(event) => this.handleChange(event)}
              //make sure value is added
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              //onChange={this.handleChange}
              onChange={(event) => this.handleChange(event)}
              //make sure value is added
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
