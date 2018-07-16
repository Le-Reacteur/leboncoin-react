import React from "react";

class Profile extends React.Component {
  render() {
    return <h2>profile id: {this.props.match.params.id}</h2>;
  }
}

export default Profile;
