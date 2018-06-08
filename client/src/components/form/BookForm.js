import React, { Component } from 'react';
import './BookForm.css';
import axios from 'axios';

class BookForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    //if this editing is true, edit the selection, else 
    this.props.editing ? this.apiPatch() : this.apiPost()
  }

  apiPost() {
    const {author, title, pages} = this.props.currentBook
    axios.post('/api/books', { author, title, pages })
      .then((result) => {
        this.props.updateBooks(result.data)
       })
  }

  apiPatch() {
    const {author, title, pages, id} = this.props.currentBook
    axios.patch(`/api/books/${id}`, { author, title, pages })
      .then((result) => {
        this.props.updateBooks(result.data)
      })
  }
 
  onChange = e => {this.props.updateBook(e.target.name, e.target.value)}

  render() {
    const {author, title, pages} = this.props.currentBook;
    return (
      <form className="Book" onSubmit={this.onSubmit} >
        <h3>{!this.props.editing ? "Add Book" : "Update Book"}</h3>
        <p className="form-group">
          <label htmlFor="author">Author</label>
          <input
              required
              type="text"
              name="author"
              className="form-control"
              onChange={this.onChange}
              value={author}
          />
        </p>
        <p className="form-group">
          <label htmlFor="title">Title</label>
          <input
              required
              type="text"
              name="title"
              className="form-control"
              onChange={this.onChange}
              value={title}
          />
        </p>
        <p className="form-group">
          <label htmlFor="pages">Pages</label>
          <input
              required
              type="text"
              name="pages"
              className="form-control"
              onChange={this.onChange}
              value={pages}
          />
        </p>
        <p className="form-group">
          {
            this.props.editing && 
            <button
              value="cancel"
              className="btn btn-default"
              onClick={this.props.stopEdit}
              >Cancel</button>
          }        
        </p>
        <p className="form-group">
          <button
            type="submit"
            value={!this.props.editing ? "Add Book" : "Update Book"}
            className="btn btn-primary"
          >{!this.props.editing ? "Add Book" : "Update Book"}</button>
        </p>
      </form>
    )
  }
}

export default BookForm;
