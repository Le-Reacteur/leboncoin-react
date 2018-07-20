import React, {Component, Fragment} from "react";
import axios from "axios";
/* IMPORTS */
import ReactFileReader from 'react-file-reader';
import Preview from "../components/Preview";

/* NOMBRE MAXIMUM DE FICHIERS A UPLOADER */
const MAX_UPLOADED_FILES = process.env.MAX_UPLOADED_FILES;

class Publish extends Component {
    state = {
        title: "",
        description: "",
        price: "",
        files: []
    }
    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox"
            ? target.checked
            : target.value;
        this.setState({[name]: value});
    };
    onSubmit = event => {
        event.preventDefault();
        axios.post("https://leboncoin-api.herokuapp.com/api/offer/publish", {
            ...this.state
        }, {
            headers: {
                'Authorization': "Bearer " + this.props.user.token
            }
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }
    handleFiles = files => {
        console.log(files);
        let newFiles = [...this.state.files];
        let newFilesLength = newFiles.length;
        /* Nombre de fichiers restants pour l'upload */
        let slotLeft = MAX_UPLOADED_FILES - newFilesLength;
        if (slotLeft === 0) {
            // PAS FINI
        }
        newFiles = newFiles.concat(files.base64);
        this.setState({
            files: newFiles
        }, () => (console.log("state", this.state)));
    }
    renderPictures() {
        if (this.state.files.length) {
            const pictures = [];
            this
                .state
                .files
                .forEach((image, index) => {
                    /* CREER LE COMPOSANT <Preview/> DANS COMPONENTS */
                    pictures.push(<Preview key={index} index={index} src={image} removeFile={this.removeFile}/>);
                });
            return pictures;
        }
        return null;
    }
    removeFile = index => {
        let newFiles = [...this.state.files];
        newFiles.splice(index, 1);
        this.setState({
            files: newFiles
        }, () => (console.log("state", this.state)));
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form">
                        <div className="header">Votre annonce</div>
                        <div className="body">
                            <div>
                                <aside>
                                    <div className="inputGroup">
                                        <label htmlFor="title">Titre de l'annonce</label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            onChange={this.handleChange}
                                            value={this.state.title}/>
                                    </div>
                                    <div className="inputGroup">
                                        <label htmlFor="description">Texte de l'annonce</label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            onChange={this.handleChange}
                                            value={this.state.description}/>
                                    </div>
                                    <div className="inputGroup">
                                        <label htmlFor="price">Prix</label>
                                        <input
                                            type="text"
                                            id="price"
                                            name="price"
                                            onChange={this.handleChange}
                                            value={this.state.price}/>
                                    </div>
                                    <button type="submit" className="submit-btn">Valider</button>
                                </aside>
                                <aside>
                                    <div className="inputGroup">
                                        <ul>
                                            {this.renderPictures()}
                                            <li>
                                                <ReactFileReader
                                                    fileTypes={[".png", ".jpg", ".jpeg"]}
                                                    base64={true}
                                                    multipleFiles={true}
                                                    handleFiles={this.handleFiles}>
                                                    <div className="addImage">
                                                        <i className="fas fa-plus fa-4x"></i>
                                                    </div>
                                                </ReactFileReader>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Publish;