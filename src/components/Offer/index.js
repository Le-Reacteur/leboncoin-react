import React, {Component, Fragment} from "react";
import "./styles.css";

class Offer extends Component {
    urlImageSource() {
        const {pictures} = this.props;
        let src = "./assets/img/placeholder.png";
        if (pictures && pictures.length) {
            src = pictures[0].url;
        }
        return src;
    }
    render() {
        const {title, description, price, pictures} = this.props;
        return (
            <li className="offerItem">
                <div className="picture">
                    <img src={this.urlImageSource()} alt={title}/>
                </div>
                <div className="infos">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
            </li>
        );
    }
}

export default Offer;