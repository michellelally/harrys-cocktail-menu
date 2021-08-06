import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

// this displays each object in the database to the user 
// i got most of this code from this tutorial:
// https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application
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
            // i just had to change the variable names to match my database
            const { name, alcohol, description, ingredients, glass } = doc.data();
            cocktails.push({
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
            // bootstrap container
            <div class="container" style={{marginTop: '10%'}}>
                <div class="panel panel-default">
                    {/* for displaying the heading */}
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Cocktails List
            </h3>
                    </div>
                    {/* // bootstrap panel */}
                    <div class="panel-body">
                        <h4><Link to="/create">Add Cocktails</Link></h4>
                        {/* // bootstrap table */}
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    {/* table headings */}
                                    <th>Name</th>
                                    <th>Alcohol</th>
                                    <th>Description</th>
                                    <th>Ingredients</th>
                                    <th>Glass</th>
                                </tr>
                            </thead>
                            <tbody data-testid="cocktail">
                                {/* creating a table row for each element in the cocktail array using the map method */}
                                {this.state.cocktails.map(cocktail =>
                                    <tr key={cocktail.key}>
                                        {/* displaying the data  */}
                                        <td><Link to={`/show-cocktail/${cocktail.key}`} >{cocktail.name}</Link></td>
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