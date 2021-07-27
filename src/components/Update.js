import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

class Update extends Component {

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

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ cocktails: state });
    }

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
                        <h4><Link to={`/show-cocktail/${this.state.key}`} class="btn btn-primary">Cocktails List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                {/* <label for="name">Name:</label> */}
                                <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div class="form-group">
                                {/* <label for="alcohol">Alcohol:</label> */}
                                <input type="text" class="form-control" name="alcohol" value={this.state.alcohol} onChange={this.onChange} placeholder="Alcohol" />
                            </div>
                            <div class="form-group">
                                {/* <label for="description">Description:</label> */}
                                <input class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" cols="80" rows="3" />
                            </div>
                            <div class="form-group">
                                {/* <label for="ingredients">Ingredients:</label> */}
                                <textArea class="form-control" name="ingredients" value={this.state.ingredients} onChange={this.onChange} placeholder="Ingredients" cols="80" rows="3">{this.state.ingredients}</textArea>
                            </div>
                            <div class="form-group">
                                {/* <label for="glass">Glass:</label> */}
                                <input type="text" class="form-control" name="glass" value={this.state.glass} onChange={this.onChange} placeholder="Glass" />
                            </div>
                            <button type="submit" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Update);