/**
 * Please Kindly Note that, this project is done by myself with inspiration from jgilless at https://github.com/jgilless/myreads
 * The author of this project do appreciate jgilless committed open-source code for reference which I could learn more from him or her.
 * Kind regards and best wishes say my thanks to jgilless.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import * as BooksAPI from './BooksAPI';
import Home from './Home';
import SearchBook from './SearchBook';

class BooksApp extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
        });
    }

    /**
     * When updating a book status
     * @param book Updating book
     * @param shelf Which shelf it should be
     */
    onUpdateBookShelf = (book, shelf) => {
        //Find the index of book
        let bookIndex = this.state.books.findIndex((key) => {
            return key.id === book.id;
        });
        //Assign previous books to variable
        let onShelfBooks = Object.assign([], this.state.books);

        //Update books
        if (bookIndex === -1) {
            let b = Object.assign({}, book);
            b.shelf = shelf;
            onShelfBooks.push(b);
        } else {
            onShelfBooks[bookIndex] = Object.assign({}, onShelfBooks[bookIndex]);
            onShelfBooks[bookIndex].shelf = shelf;
        }

        //Set state of new booksOnShelf to books array
        BooksAPI.update(book, shelf)
            .then(
                this.setState({books: onShelfBooks})
            );
    };

    render() {

        return (
            <div className="app">

                <Route exact path="/" render={() => (
                    <Home
                        books={this.state.books}
                        onUpdateBookShelf={this.onUpdateBookShelf}/>

                )}/>

                <Route path="/search" render={() => (
                    <SearchBook
                        books={this.state.books}
                        onUpdateBookShelf={this.onUpdateBookShelf}/>
                )}/>

            </div>
        );
    }
}

export default BooksApp;
