import React from 'react';
import axios from 'axios';

class FormMovies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      poster:'',
      comment:''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    axios.post(url, this.state)
      .then(res => res.data)
      .then(res => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      })
  }


  render() {
    return(
      <div className="FormMovie">
        <h1>Saisie d'un Film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Film</legend>
            <div className="form-data">
              <label htmlFor="lastname">Titre</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="firstname">Affiche</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="email">Commentaire</label>
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default FormMovies;