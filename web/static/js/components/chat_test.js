import React from "react";
import Channels from "../views/channels";
import Messages from "../views/messages";

class ChatTest extends React.Component {
  render() {
    return (
      <div className="chat-test">
        <Channels />
        <Messages />
      </div>
    );
  }
};

export default ChatTest;
