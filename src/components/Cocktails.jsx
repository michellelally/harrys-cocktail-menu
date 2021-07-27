// import Header from '../components/Header';

// function Cocktails(props) {
//   return (
//     <div className='wrapper'>
//       <h3>Cocktails page</h3>
//       <h4> {props.message}</h4>
//     </div>
//   );
// }

// export default Cocktails;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

class Cocktails extends Component {
    constructor(props) {
        super(props);
        console.log(props.message[0])
        console.log(props.message[1])
        var alcohol = props.message[0];
        var description = props.message[1];

        this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol).where("description", "==", description);
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
                            Cocktails
            </h3>
                    </div>
                    <div class="panel-body">
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Ingredients</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cocktails.map(cocktail =>
                                    <tr>
                                        <td>{cocktail.name}</td>
                                        <td>{cocktail.ingredients}</td>
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

export default Cocktails;