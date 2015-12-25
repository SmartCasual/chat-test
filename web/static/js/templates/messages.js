import React from "react";
import Message from "./message";

class Messages extends React.Component {
  render() {
    return (
      <ul className="messages">
        {this.props.messages.map((message) =>
          <Message
            text = {message.text}
            id = {message.id}
            key = {message.id}
          />
        )}
      </ul>
    );
  }
};

export default Messages;
