import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

// this component allows you to create an object in the firestore database
class Create extends Component {

    // I got the code for this component from a tutorial
    // https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application
    constructor() {
        super();
        this.ref = firebase.firestore().collection('cocktails');
        // i changed these variable names to match my database
        this.state = {
            name: '',
            alcohol: '',
            description: '',
            ingredients: '',
            glass: ''
        };
    }

    // i got this function from the tutorial, it deals with changes the user makes and updates the correlating variable 
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    // i got this function from the tutorial, it adds a new document to the database and passes the values to the database  
    onSubmit = (e) => {
        e.preventDefault();

        // i just changed these variable names to match my database
        const { name, alcohol, description, ingredients, glass } = this.state;

        this.ref.add({
            name,
            alcohol,
            description,
            ingredients,
            glass
        }).then((docRef) => {
            this.setState({
                name: '',
                alcohol: '',
                description: '',
                ingredients: '',
                glass: ''
            });
            // redirect to the list page
            this.props.history.push("/list")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    // from the tutorial mentioned but changed the variable names to match my database
    render() {
        // creating a cocktail object
        const { name, alcohol, description, ingredients, glass } = this.state;

        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Add New Cocktail
            </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/list" className="button">Cocktail List</Link></h4>
                        {/* form for inputting the data */}
                        <form data-testid="create-form" onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <input type="text" name="name" value={name} onChange={this.onChange} placeholder="Name" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="alcohol" value={alcohol} onChange={this.onChange} placeholder="Alcohol" required />
                            </div>
                            <div class="form-group">
                                <input type="text" name="description" value={description} onChange={this.onChange} placeholder="Description" cols="80" rows="3" required />
                            </div>
                            <div class="form-group">
                                <textarea name="ingredients" value={ingredients} onChange={this.onChange} placeholder="Ingredients" cols="80" rows="3" required>{ingredients}</textarea>
                            </div>
                            <div class="form-group">
                                <input type="text" name="glass" value={glass} onChange={this.onChange} placeholder="Glass" required />
                            </div>
                            <button type="submit" className="button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;