import React, { Component} from 'react';
import './Book.css';

class Book extends Component {
  render() {
    const {author, title, pages} = this.props.book
    return (
      <div className="Book">
        <h3>{title}</h3>
        <p>{author} | {pages} pgs.</p>
      </div>
    )
  }
}

export default Book;
