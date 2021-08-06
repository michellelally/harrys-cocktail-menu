import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

// this component allows you to update an object in the firestore database
class Update extends Component {

    // I got the code for this component from a tutorial
    // https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application
    constructor(props) {
        super(props);
        this.state = {
            key: '',
            name: '',
            alcohol: '',
            description: '',
            ingredients: '',
            glass: ''
        };
    }

    // this method finds the document from the database using its unique identifier and updates the cocktails object with the data retrieved
    // i got this function from the tutorial mentioned above
    componentDidMount() {
        const ref = firebase.firestore().collection('cocktails').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const cocktails = doc.data();
                this.setState({
                    key: doc.id,
                    name: cocktails.name,
                    alcohol: cocktails.alcohol,
                    description: cocktails.description,
                    ingredients: cocktails.ingredients,
                    glass: cocktails.glass
                });
            } else {
                console.log("No such document!");
            }
        });
    }

    // i got this function from the tutorial, it deals with changes the user makes and updates the correlating variable 
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ cocktails: state });
    }

    // i got this function from the tutorial, it updates the document in the database by passing the new values to the existing document 
    onSubmit = (e) => {
        e.preventDefault();

        const { name, alcohol, description, ingredients, glass } = this.state;

        const updateRef = firebase.firestore().collection('cocktails').doc(this.state.key);
        updateRef.set({
            name,
            alcohol,
            description,
            ingredients,
            glass
        }).then((docRef) => {
            this.setState({
                key: '',
                name: '',
                alcohol: '',
                description: '',
                ingredients: '',
                glass: ''
            });
            //this.props.history.push("/show-cocktail/" + this.props.match.params.id)
            this.props.history.push("/list")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    // from the tutorial mentioned but changed the variable names to match my database
    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Edit Cocktail
            </h3>
                    </div>
                    <div class="panel-body">
                        <button className="button"><Link to={`/show-cocktail/${this.state.key}`}>Cocktails List</Link></button>
                        {/* form for inputting the data */}
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="alcohol" value={this.state.alcohol} onChange={this.onChange} placeholder="Alcohol" required />
                            </div>
                            <div class="form-group">
                                <input name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" cols="80" rows="3" required />
                            </div>
                            <div class="form-group">
                                <textarea name="ingredients" value={this.state.ingredients} onChange={this.onChange} placeholder="Ingredients" cols="80" rows="3" required>{this.state.ingredients}</textarea>
                            </div>
                            <div class="form-group">
                                <input type="text" name="glass" value={this.state.glass} onChange={this.onChange} placeholder="Glass" required />
                            </div>
                            <button type="submit" className="button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Update);