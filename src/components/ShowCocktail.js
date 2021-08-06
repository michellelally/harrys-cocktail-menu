import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

// This component displays the information about an individual record/document from the database
// it also provides navigation to the update and delete functionality
// I used this tutorial to create this component:
// https://www.djamware.com/post/5bc50ea680aca7466989441d/reactjs-firebase-tutorial-building-firestore-crud-web-application
class ShowCocktail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: {},
      key: ''
    };
  }

  // this method finds the document from the database using its unique identifier and updates the cocktails object with the data retrieved
  // i got this function from the tutorial mentioned above
  componentDidMount() {
    const ref = firebase.firestore().collection('cocktails').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          cocktails: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  // this function deletes the record from the database by passing the id to a method provided by the firebase library
  delete(id) {
    firebase.firestore().collection('cocktails').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/list")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {

    return (
      // bootstrap container
      <div class="container">
        {/* // panel and headings */}
        <div class="panel panel-default">
          <div class="panel-heading">
            {/* a link to the list of cocktails */}
            <h4><Link to="/list">Cocktails List</Link></h4>
            {/* a panel title displaying the cocktail name */}
            <h3 class="panel-title">
              {this.state.cocktails.name}
            </h3>
          </div>
          <div class="panel-body">
            {/* displaying the data  */}
            <dl>
              <dt>Alcohol</dt>
              <dd>{this.state.cocktails.alcohol}</dd>
              <dt>Description</dt>
              <dd>{this.state.cocktails.description}</dd>
              <dt>Ingredients</dt>
              <dd>{this.state.cocktails.ingredients}</dd>
              <dt>Glass</dt>
              <dd>{this.state.cocktails.glass}</dd>
            </dl>
            {/* link to update the document */}
            <Link to={`/update/${this.state.key}`} className="button">Edit</Link>
            {/* calls the delete function to remove the document from the database */}
            <button className="button" onClick={this.delete.bind(this, this.state.key)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowCocktail);