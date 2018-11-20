import React, { Component } from "react";

class Profile extends Component {
  render() {
    return <h2>profile id: {this.props.match.params.id}</h2>;
  }
}

export default Profile;
