import React from 'react';
import './FormMovie.css';



class FormMovie  extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
     title: '',
     poter: '',
      comment: '',
    }
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      };
      
      const url = 'https://post-a-form.herokuapp.com/api/movies/'
      
      fetch(url, config)
      .then(res => res.json())
        .then(res => {
          if (res.error) {
            alert(res.error);
          } else {
            alert(`commentaire ajouté!`);
          }
        }).catch(e => {
          console.error(e);
          alert('Erreur lors d\'un commentaire');
        });
      
  }

  


  render(){
    return(
    <div>
  <h1>Your favorite movie..</h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <div>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div>
        <label>url</label>
        <input
          type="text"
          id="poster"
          name="poster"
          onChange={this.onChange}
          value={this.state.poster}
        />
      </div>

      <div>
        <label>comment</label>
        <textarea
          type="text"
          id="comment"
          name="comment"
          onChange={this.onChange}
          value={this.state.comment}
        />
      </div>
      <hr />
      <div>
        <input type="submit" value="Send" />
      </div>
    </fieldset>
  </form>
</div>
    )
}

}


export default FormMovie ;