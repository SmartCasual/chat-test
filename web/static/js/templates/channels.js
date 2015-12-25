import React from "react";
import Channel from "./channel"

class Channels extends React.Component {
  render() {
    return (
      <ul className="channels">
        {this.props.channels.map((channel) =>
          <Channel
            name = {channel.name}
            id = {channel.id}
            key = {channel.id}
          />
        )}
      </ul>
    );
  }
};

export default Channels;
