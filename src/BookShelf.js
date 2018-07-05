/**
 * Please Kindly Note that, this project is done by myself with inspiration from jgilless at https://github.com/jgilless/myreads
 * The author of this project do appreciate jgilless committed open-source code for reference which I could learn more from him or her.
 * Kind regards and best wishes say my thanks to jgilless.
 */
import React from 'react';
import Book from './Book';

export default function BookShelf ({name, books, onUpdateBookShelf}){
    return(
        <div className='bookshelf'>
            <h2 className='bookshelf-title'>
                {name}
            </h2>
            <div className='bookshelf-books'>
                <ol className='books'>
                    {
                        books.sort((b1,b2) => {
                            return b1.title>b2.title;
                        }).map((b) => (
                            <li key = {b.id}>
                                <Book
                                    id = {b.id}
                                    authors={b.authors}
                                    title={b.title}
                                    imageLinks={b.imageLinks}
                                    shelf={b.shelf}
                                    onUpdateBookShelf={onUpdateBookShelf}
                                />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
};