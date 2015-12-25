import React from "react";

class Message extends React.Component {
  render() {
    return (
      <li className="message" id={"message-" + this.props.id}>
        {this.props.text}
      </li>
    );
  }
};

export default Message;
