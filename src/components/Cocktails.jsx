import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import firebase from '../firebase';
import NotFound from './NotFound';


class Cocktails extends Component {

    constructor(props) {
        super(props);
        var alcohol = props.message[0];
        var description = props.message[1];
        var found = 'true';

        if (description === "All") {
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol);
            this.ref.get().then((doc) => {
                if (!doc.exists) {
                    this.found = 'false'
                } else {
                    this.found = 'true'
                }
            })
        } else {
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol).where("description", "==", description);
            this.ref.get().then((doc) => {
                if (!doc.exists) {
                    this.found = 'false'
                } else {
                    this.found = 'true'
                }
            })
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
     
            <Card style={{ width: '100%', margin: '1rem' }} className="cards bg-dark text-white" key={index}>
                <Card.Img className="images" src={card.glass} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title style={{ fontSize: '2vh', marginBottom: 'none' }}>{card.name}</Card.Title>
                    <Card.Text style={{ fontSize: '1.5vh', marginBottom: 'none' }}>{card.alcohol} | {card.description}</Card.Text>
                    <Card.Text style={{ fontSize: '1.5vh' }}>{card.ingredients}</Card.Text>
                </Card.ImgOverlay>
            </Card>
       
        );
    }

    render() {
        return (
            // <div>
            //     {this.found ? (
            //         <div style={{ display: 'flex' }}>
            //             {this.state.cocktails.map(this.renderCards)}
            //         </div>
            //     ) : (
            //             <NotFound />
            //         )}
            // </div>
            <div style={{ display: 'flex' }}>
                {this.state.cocktails.map(this.renderCards)}
            </div>

        );
    }
}
export default Cocktails;


