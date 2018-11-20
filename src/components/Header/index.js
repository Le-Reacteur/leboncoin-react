import React, { Component, Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./styles.css";

class Header extends Component {
  onLogOut = event => {
    this.props.logOut();
    this.props.history.push("/");
    event.preventDefault();
  };
  renderNav() {
    if (this.props.user._id) {
      return (
        <Fragment>
          <li
            onClick={() =>
              this.props.history.push("/profile/" + this.props.user._id)
            }
          >
            {this.props.user.username}
          </li>
          <li onClick={this.onLogOut}>Déconnexion</li>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <li onClick={() => this.props.history.push("sign_up")}>
          Créer un compte
        </li>
        <li onClick={() => this.props.history.push("log_in")}>Se connecter</li>
      </Fragment>
    );
  }
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="menu">
            <div className="menu-left">
              <ul>
                <li>
                  <NavLink to="/publish">DÉPOSER UNE ANNONCE</NavLink>
                </li>
                <li>
                  <NavLink to="/">OFFRES</NavLink>
                </li>
              </ul>
            </div>
            <div className="menu-right">
              <ul>{this.renderNav()}</ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
