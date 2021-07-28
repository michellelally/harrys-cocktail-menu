import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import firebase from '../firebase';
import glass from '../shared/assets/images/collins.jpeg';



class Cocktails extends Component {
    constructor(props) {
        super(props);
        var alcohol = props.message[0];
        var description = props.message[1];

        if (description === "All") {
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol);
        } else {
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol).where("description", "==", description);
        }

        this.unsubscribe = null;
        this.state = {
            cocktails: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const cocktails = [];
        querySnapshot.forEach((doc) => {
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

    renderCards = (card, index) => {
        return (
            <Card style={{width: '80%', margin: '1rem'}} className="bg-dark text-white" key={index}>
                <Card.Img src={glass} alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title style={{fontSize:'1.5vh', marginBottom: 'none'}}>{card.name}</Card.Title>
                    <Card.Text style={{fontSize:'1vh', marginBottom: 'none'}}>{card.alcohol} | {card.description}</Card.Text>
                    <Card.Text style={{fontSize:'1vh'}}>{card.ingredients}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        );
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                {this.state.cocktails.map(this.renderCards)}
            </div>

        );
    }
}
export default Cocktails;

// render() {
//     return (
//         <div class="container">
//             <div class="panel panel-default">
//                 <div class="panel-heading">
//                     <h3 class="panel-title">Cocktails</h3>
//                 </div>
//                 <div class="panel-body">
//                     <table class="table table-stripe">
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Ingredients</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.cocktails.map(cocktail =>
//                                 <tr>
//                                     <td>{cocktail.name}</td>
//                                     <td>{cocktail.ingredients}</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }


// render() {
//     return (
//         <div class="container">
//             {this.state.cocktails.map(cocktail =>
//                 <>
//                     <div class="card">

//                         <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
//                             <img
//                                 src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
//                                 class="img-fluid"
//                             />
//                         </div>
//                         <div class="card-body">
//                             <h5 class="card-title">{cocktail.name}</h5>
//                             <p class="card-text">{cocktail.ingredients}</p>

//                         </div>

//                     </div>
//                 </>
//             )}
//         </div>
//     );
