import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Offer from "../components/Offer";

class Home extends Component {
  state = {
    offers: []
  }
  getOffers = () => {
    console.log(process.env.LOCAL_PATH);
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer")
      .then(response => {
        this.setState({offers: response.data})
      })
      .catch(err => console.log(err))
  }
  renderOffers() {
    const offers = []
    this
      .state
      .offers
      .forEach(data => {
        offers.push(<Offer key={data._id} {...data}/>)
      });
    return offers;
  }
  render() {
    return (
      <div className="container">
        <h2>Liste des annonces</h2>
        <ul className="offers">
          {this.renderOffers()}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.getOffers();
  }
}

export default Home;
