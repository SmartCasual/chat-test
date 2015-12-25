import React from "react";
import ChannelsTemplate from "../templates/channels";

class Channels extends React.Component {
  render() {
    return (
      <ChannelsTemplate channels={this.channels()} />
    );
  }

  channels() {
    return [
      {
        name: "Channel 1",
        id: "adf791a2-708b-4f05-8c94-50f092600c7d"
      },
      {
        name: "Channel 2",
        id: "7ec4125a-10d2-43f9-9f72-1d86dd06fc88"
      }
    ];
  }
};

export default Channels;
