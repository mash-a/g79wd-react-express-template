import React, { Component} from 'react';

class Book extends Component {
  render() {
    const {author, title, pages} = this.props.book
    return (
      <div>
        <h3>{title}</h3>
        <p>{author} | {pages} pgs.</p>
      </div>
    )
  }
}

export default Book;
