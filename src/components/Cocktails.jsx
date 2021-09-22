import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

// This component is responsible for querying the database and returning the items that match the request
class Cocktails extends Component {

    constructor(props) {
        super(props);

        // assiging the value of each index passed as a message from the picker component
        // index 0 is the alcohol type
        var alcohol = props.message[0];
        // index 1 is the description
        var description = props.message[1];

        // storing the size of collection returned from query
        var size = 1;

        // query the firestore cocktails database
        // if the user picked 'All' when choosing the description
        if (description === "All") {

            // this returns all objects in the database with the type of alcohol the use chose
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol);
        } else {
            // this returns all objects in the database with the type of alcohol the user chose and the description type too
            this.ref = firebase.firestore().collection('cocktails').where("alcohol", "==", alcohol).where("description", "==", description);

            // this function is to get the size of the collection returned
            // it was to implement a feature that would display a not found component if the query didn't return any cocktails of that type
            // but i couldn't get it working after hours of trying :( 
            this.ref.get().then(snapshot => {
                // gets the size
                size = snapshot.size;

                // if it was found output to the console
                if (size > 0) {
                    console.log("found");
                } else {
                    // if not found display the not found entry in database
                    this.ref = firebase.firestore().collection('cocktails').where("name", "==", "Not Found");
                }
            })
        }

        this.unsubscribe = null;

        // initializing an array to store the objects from database 
        this.state = {
            cocktails: []
        };
    }

    // I got this function from a tutorial online:
    // https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application
    // it gets populates the array with objects from the firestore collection 
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

    // I got this function from a tutorial online:
    // https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    // This method createa a React-Bootstrap Card that I got from here
    // https://react-bootstrap.github.io/components/cards/
    renderCards = (card, index) => {
        return (
            <div style={{ width: '90%', margin: '1%' }}>
                {/* creating the card and assigning it with the bootstrap class */}
                <Card style={{ width: '100%', margin: '1.5%' }} className="cards bg-dark text-white" key={index}>
                    {/* im using a card that provides an image overlay  */}
                    <Card.Img className="images" src={card.glass} alt="Glass" />
                    <Card.ImgOverlay className="overlay">
                        {/* displaying the cocktail name  */}
                        <Card.Title style={{ fontSize: '1.5vw', marginBottom: '0.12rem', fontWeight: 'bold' }}>{card.name}</Card.Title>
                        {/* displaying the cocktail alcohol and description  */}
                        <Card.Text style={{ fontSize: '1.1vw', marginBottom: '0.12rem' }}>{card.alcohol} ✧ {card.description}</Card.Text>
                        {/* displaying the cocktail ingredients */}
                        <Card.Text style={{ fontSize: '1vw' }}>{card.ingredients}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        );
    }

    render() {
        // this was some code i was using to try get the not found component to show, but i was unsuccessful
        // if (this.size==0) {
        //     
        //     return <Redirect to='/not-found' />
        // }
        // if (!this.found) {
        //     
        //     return <Redirect to='/not-found' />
        // }

        return (
            // for jest testing
            <div data-testid="cocktail">
                {/* mapping the cocktails array to call the renderCards function for each element in the array*/}
                <div style={{ display: 'flex' }}>
                    {this.state.cocktails.map(this.renderCards)}
                </div>
                {/* a button that redirects you back to the homepage  */}
                <button className="button" style={{ padding: '1.3%', margin: '1% auto' }}><Link to={'/'}>GO AGAIN</Link></button>
            </div>
        );
    }
}
export default Cocktails;