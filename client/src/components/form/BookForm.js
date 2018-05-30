import React, { Component } from 'react';
import './BookForm.css';
import axios from 'axios';

class BookForm extends Component {
  state = {}

  onSubmit = (e) => {
    e.preventDefault();
    const {author, title, pages} = this.state
    axios.post('api/books', { author, title, pages})
      .then((result) => {
        this.props.updateBooks(result.data)
        this.bookForm.reset()
      })
  }

  onChange = (e) => {this.setState({[e.target.name]: e.target.value})}

  render() {
    return (
      <form ref={(el) => this.bookForm = el } className="Book" onSubmit={this.onSubmit} >
        <h4>Add a Book</h4>
        <p className="form-group">
          <label htmlFor="author">Author</label>
          <input
              type="text"
              name="author"
              className="form-control"
              onChange={this.onChange}
          />
        </p>
        <p className="form-group">
          <label htmlFor="title">Title</label>
          <input
              type="text"
              name="title"
              className="form-control"
              onChange={this.onChange}
          />
        </p>
        <p className="form-group">
          <label htmlFor="pages">Pages</label>
          <input
              type="text"
              name="pages"
              className="form-control"
              onChange={this.onChange}
          />
        </p>
        <p className="form-group">
          <input
            type="submit"
            value="Add Book"
            className="btn btn-primary"
          />
        </p>
      </form>
    )
  }
}

export default BookForm;
