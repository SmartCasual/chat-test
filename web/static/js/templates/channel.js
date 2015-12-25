import React from "react";

class Channel extends React.Component {
  render() {
    return (
      <li className="channel" id={"channel-" + this.props.id}>
        {this.props.name}
      </li>
    );
  }
};

export default Channel;
