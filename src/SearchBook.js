/**
 * Please Kindly Note that, this project is done by myself with inspiration from jgilless at https://github.com/jgilless/myreads
 * The author of this project do appreciate jgilless committed open-source code for reference which I could learn more from him or her.
 * Kind regards and best wishes say my thanks to jgilless.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBook extends Component{
    state = {
        query: '',
        books:[]
    };

    /**
     * Search query with API
     * @param query Query for search
     */
    querySearch=(query)=>{
        this.setState({query: query});
        if(this.state.query === '')
            return;

        BooksAPI.search(this.state.query.trim(),10)
            .then((result) => {
                if(result.length>0){
                    let resultBooks = result.map((b)=>{
                        let onShelfBook = this.props.books.find((osb)=>osb.id === b.id);
                        let onShelfStatus = onShelfBook? onShelfBook.shelf:'none';

                        return{
                            id: b.id,
                            shelf: onShelfStatus,
                            authors: b.authors,
                            title: b.title,
                            imageLinks:{thumbnail: b.imageLinks.thumbnail}
                        };
                    });
                    this.setState({books: resultBooks});
                }
            });
    };

    render(){
        let {onUpdateBookShelf} = this.props;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={ (e) => this.querySearch(e.target.value) }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.books.map((b) => (
                                <li key={ b.id }>
                                    <Book
                                        id={ b.id }
                                        shelf={ b.shelf }
                                        authors={ b.authors }
                                        title={ b.title }
                                        imageLinks={ b.imageLinks }
                                        onUpdateBookShelf={ onUpdateBookShelf }
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBook;
