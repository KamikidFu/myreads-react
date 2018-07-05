/**
 * Please Kindly Note that, this project is done by myself with inspiration from jgilless at https://github.com/jgilless/myreads
 * The author of this project do appreciate jgilless committed open-source code for reference which I could learn more from him or her.
 * Kind regards and best wishes say my thanks to jgilless.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';

class Home extends Component {
    onShelfFilter = (shelf) => {
        let {books} = this.props;
        return books.filter((b) => b.shelf === shelf);
    };

    render() {
        let {onUpdateBookShelf} = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            name='Currently Reading'
                            books={this.onShelfFilter('currentlyReading')}
                            onUpdateBookShelf={onUpdateBookShelf}
                        />
                        <BookShelf
                            name='Want to Read'
                            books={this.onShelfFilter('wantToRead')}
                            onUpdateBookShelf={onUpdateBookShelf}
                        />
                        <BookShelf
                            name='Read'
                            books={this.onShelfFilter('read')}
                            onUpdateBookShelf={onUpdateBookShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        Search a Book
                    </Link>
                </div>
            </div>
        );
    }
}

export default Home;