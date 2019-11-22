import React from 'react';
import './FormMovie.css';


class FormMovie extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    title: '',
    poster: '',
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
        alert(`Submit!`);
      }
    }).catch(e => {
      console.error(e);
      alert('Error, something missing');
    });
  e.preventDefault();
}
  
    render(){
      return(
<div>
    <form className='container-form' onSubmit={this.submitForm}>
      <fieldset>
        <div>
          <h1 className='first-title'>your favorite movie..</h1>
            <label className='title'>Name </label>
              <input
                type="text"
                className="partOfForm"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
          </div>
  
          <div>
            <label className='title'>Url</label>
              <input
              type="text"
              className="partOfForm"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
            />
          </div>
  
          <div>
            <label className='title'>Comment</label>
              <textarea
              type="text"
              className="partOfForm"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
              />
          </div>
          <hr />
          <div>
              <input type="submit" value="send" />
          </div>
      </fieldset>
    </form>
</div>
      )
  }
  
  }




  export default FormMovie;