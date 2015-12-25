import React from "react";
import MessagesTemplate from "../templates/messages";

class Messages extends React.Component {
  render() {
    return (
      <MessagesTemplate messages={this.messages()} />
    );
  }

  messages() {
    return [
      {
        text: "Message 1",
        id: "8fe264d7-6719-494e-8227-108748766be3"
      },
      {
        text: "Message 2",
        id: "a5042302-1dd4-486f-9056-83434a87e504"
      }
    ];
  }
};

export default Messages;
