import React, { Component } from 'react';
import './App.css';
import Book from '../book/Book';

class App extends Component {
  state = {
    loading: true,
    books: []
  }

  componentWillMount = async () => {
    const response = await fetch('/api/books')
    const json = await response.json()
    console.log(json.books)
    if (json.books) this.setState({ loading: false, books: json.books})
  }

  render() {
    const books = this.state.books.map( (book) => {
      return <Book key={book.id} book={book} />
    });
    return (
      <div className="App">
        {
          !this.state.loading && books
        }
      </div>
    );
  }
}

export default App;
