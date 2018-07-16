import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Liste des annonces</h2>
        <ul>
          <li>
            <Link to="/offer/1">Annonce 1</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
