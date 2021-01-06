import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      //set the message.
    };
  }
  onChange = (event) => {
    //look at previous lesson for this
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => console.log(this.state)
      //use console.log so you can see what is happening while it is happening.
    );
  };

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    //take the maxChars which is passed down and minus it from the message length.
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={(event) => this.onChange(event)}
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          //make sure to add the value once updated.
        />
        {charNumber}
        {/* //show the charNumbers */}
      </div>
    );
  }
}

export default TwitterMessage;
