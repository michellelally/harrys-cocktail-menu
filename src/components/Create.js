import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('cocktails');
        this.state = {
            name: '',
            alcohol: '',
            description: '',
            ingredients: '',
            glass: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

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
            this.props.history.push("/list")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    render() {
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
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <input type="text"  name="name" value={name} onChange={this.onChange} placeholder="Name" required/>
                            </div>
                            <div class="form-group">
                                <input type="text" name="alcohol" value={alcohol} onChange={this.onChange} placeholder="Alcohol" required/>
                            </div>
                            <div class="form-group">
                                <input type="text" name="description" value={description} onChange={this.onChange} placeholder="Description" cols="80" rows="3" required/>
                            </div>
                            <div class="form-group">
                                <textarea name="ingredients" value={ingredients} onChange={this.onChange} placeholder="Ingredients" cols="80" rows="3" required>{ingredients}</textarea>
                            </div>
                            <div class="form-group">
                                <input type="text"  name="glass" value={glass} onChange={this.onChange} placeholder="Glass" required/>
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