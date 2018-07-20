import React, {Component} from "react";
import "./styles.css";

class Preview extends Component {
    render() {
        return (
            <li className="imagePreview">
                <img src={this.props.src} alt="preview"/>
                <div
                    className="remove-btn"
                    onClick={() => this.props.removeFile(this.props.index)}>
                    <i className="fas fa-times-circle"></i>
                </div>
            </li>
        );
    }
}

export default Preview;