import React, {Component, Fragment} from "react";

class Offer extends Component {
  render() {
    return <h2>offer id: {this.props.match.params.id}</h2>;
  }
}

export default Offer;
