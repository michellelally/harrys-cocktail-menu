import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

class List extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('cocktails');
        this.unsubscribe = null;
        this.state = {
            cocktails: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const cocktails = [];
        querySnapshot.forEach((doc) => {
            const { name, alcohol, description, ingredients, glass } = doc.data();
            cocktails   .push({
                key: doc.id,
                doc, // DocumentSnapshot
                name,
                alcohol,
                description,
                ingredients,
                glass
            });
        });
        this.setState({
            cocktails
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Cocktails List
            </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/create">Add Cocktails</Link></h4>
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Alcohol</th>
                                    <th>Description</th>
                                    <th>Ingredients</th>
                                    <th>Glass</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cocktails.map(cocktail =>
                                    <tr>
                                        <td><Link to={`/show-cocktail/${cocktail.key}`}>{cocktail.name}</Link></td>
                                        <td>{cocktail.alcohol}</td>
                                        <td>{cocktail.description}</td>
                                        <td>{cocktail.ingredients}</td>
                                        <td>{cocktail.glass}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;