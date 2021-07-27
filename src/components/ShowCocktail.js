import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";


class ShowCocktail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cocktails: {},
      key: ''
    };
  }

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
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4><Link to="/">Cocktails List</Link></h4>
            <h3 class="panel-title">
              {this.state.cocktails.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Alcohol</dt>
              <dd>{this.state.cocktails.alcohol}</dd>
              <dt>Description</dt>
              <dd>{this.state.cocktails.description}</dd>
              <dt>ingredients</dt>
              <dd>{this.state.cocktails.ingredients}</dd>
              <dt>Glass</dt>
              <dd>{this.state.cocktails.glass}</dd>
            </dl>
            <Link to={`/update/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowCocktail);