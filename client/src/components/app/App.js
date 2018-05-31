import React, { Component } from 'react';
import './App.css';
import Book from '../book/Book';
import Header from '../header/Header';
import BookForm from '../form/BookForm';

class App extends Component {
  state = {
    loading: true,
    books: [],
    editing: false,
    currentBook
  }

  updateBooks = (books) => {
    this.setState({books: books})
  }

  updateBook = id => {
    console.log(`You click on book ${id}`)
  }

  componentWillMount = async () => {
    const response = await fetch('/api/books')
    const json = await response.json()
    console.log(json.books)
    if (json.books) this.setState({ loading: false, books: json.books})
  }

  render() {
    const books = this.state.books.map( (book) => {
      return <Book key={book.id} book={book} 
      updateBooks={this.updateBooks} 
      updateBook={this.updateBook}
      />
    });
    return (
      <div className="App">
        <Header />
        <BookForm updateBooks={this.updateBooks}/>
        {
          !this.state.loading && books
        }
      </div>
    );
  }
}

export default App;
