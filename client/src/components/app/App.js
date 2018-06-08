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
    currentBook: {
      id: null,
      title: "",
      author: "",
      pages: ""
    }
  }

  componentWillMount = async () => {
    const response = await fetch('/api/books')
    const json = await response.json()
    if (json.books) this.setState({ loading: false, books: json.books})
  }

  updateBooks = books => {
    this.setState({
      books: books,
      editing: false,
      currentBook: {
        id: null,
        title: "",
        author: "",
        pages: ""
      }
    })

  }

  editBook = id => {
    const book = this.state.books.filter(b => b.id === id)[0];
    this.setState({editing: true, currentBook: book})
  }

  updateBook = (attribute, newValue) => {
    this.setState({currentBook: {
                    ...this.state.currentBook,
                    [attribute]: newValue
                  }
                })
  }

  stopEdit = () => {
    this.setState({editing:false,  currentBook: {
      id: null,
      title: "",
      author: "",
      pages: ""
    } })
  }

  render() {
    const books = this.state.books.map( (book) => {
      return <Book key={book.id} book={book} 
      updateBooks={this.updateBooks} 
      editBook={this.editBook}
      />
    });
    return (
      <div className="App">
        <Header />
        <BookForm updateBooks={this.updateBooks}
        currentBook={this.state.currentBook}
        editing={this.state.editing}
        updateBook={this.updateBook}
        stopEdit={this.stopEdit}
        />
        {
          !this.state.loading && books
        }
      </div>
    );
  }
}

export default App;
