import React, { Component} from 'react';
import './Book.css';
import axios from 'axios';

class Book extends Component {

  onDelete = (id) => {
    axios.delete(`/api/books/${id}`)
      .then((result) => {this.props.updateBooks(result.data)})
  }
  
  render() {
    const {author, title, pages, id} = this.props.book
    return (
      <div className="Book">
        <span className="glyphicon glyphicon-remove-sign Book-Delete"
          onClick={() => this.onDelete(id)}
         />
        <h3>{title}</h3>
        <p>{author} | {pages} {pages === 1 ? "pg" : "pgs"}</p>
        <span className="glyphicon glyphicon-pencil Book-Edit"
          onClick={() => this.props.editBook(id)}
         />
      </div>
    )
  }
}

export default Book;
