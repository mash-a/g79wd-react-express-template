import React, { Component} from 'react';
import './Book.css';
import axios from 'axios';

class Book extends Component {

  onClick = (id) => {
    axios.delete(`/api/books/${id}`)
      .then((result) => {this.props.updateBooks(result.data)})
  }

  render() {
    const {author, title, pages, id} = this.props.book
    return (
      <div className="Book">
        <span className="glyphicon glyphicon-remove-sign Book-Delete"
          onClick={() => this.onClick(id)}
         />
        <h3>{title}</h3>
        <p>{author} | {pages} pgs.</p>
      </div>
    )
  }
}

export default Book;
