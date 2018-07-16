import React from "react";

class Offer extends React.Component {
  render() {
    return <h2>offer id: {this.props.match.params.id}</h2>;
  }
}

export default Offer;
