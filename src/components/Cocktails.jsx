import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import firebase from '../firebase';
import NotFound from './NotFound'
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Cocktails extends Component {


    constructor(props) {
        super(props);
        var alcohol = props.message[0];
        var description = props.message[1];
        var found = 'true';
        var size = 1;


        if (description === "All") {
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol);
        } else {
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol).where("description", "==", description);

            //     this.ref = firebase.firestore().collection('cocktails').where("name", "==", "Not Found");
            // }
            // if (this.ref.empty) {
            //     alert("not found")
            // }

            // const snapshot = this.ref
            // //firebase.firestore.collection('cocktails').where("alcohol", "==", alcohol).where("description", "==", description);
            // if (snapshot.empty) {
            //     alert("not found")
            // }

            // if (this.ref.empty){
            //     alert("not found")
            // }
        }

        this.unsubscribe = null;
        this.state = {
            cocktails: []
        };
    }

    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/target' />
        }
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

            <Card style={{ width: '100%', margin: '1.5%' }} className="cards bg-dark text-white" key={index}>
                <Card.Img className="images" src={card.glass} alt="Glass" />
                <Card.ImgOverlay className="overlay">
                    <Card.Title style={{ fontSize: '1.5vw', marginBottom: '0.12rem' , fontWeight: 'bold'}}>{card.name}</Card.Title>
                    <Card.Text style={{ fontSize: '1.1vw', marginBottom: '0.12rem' }}>{card.alcohol} ✧ {card.description}</Card.Text>
                    <Card.Text style={{ fontSize: '1vw' }}>{card.ingredients}</Card.Text>
                </Card.ImgOverlay>
            </Card>

        );
    }

    render() {
        // if (this.size==0) {
        //     
        //     return <Redirect to='/not-found' />
        // }
        // if (!this.found) {
        //     
        //     return <Redirect to='/not-found' />
        // }

        return (
            <div>
                <div style={{ display: 'flex' }}>
                    {this.state.cocktails.map(this.renderCards)}
                </div>
                <button className="button"><Link to={'/'}>GO AGAIN</Link></button>
            </div>

        );
    }
}
export default Cocktails;


