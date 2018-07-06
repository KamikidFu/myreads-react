/**
 * Please Kindly Note that, this project is done by myself with inspiration from jgilless at https://github.com/jgilless/myreads
 * The author of this project do appreciate jgilless committed open-source code for reference which I could learn more from him or her.
 * Kind regards and best wishes say my thanks to jgilless.
 */
import React, {Component} from 'react';

class Book extends Component {
    state = {
        shelf: 'none'
    };

    componentDidMount() {
        let {shelf} = this.props;
        this.setState({shelf});
    }

    /**
     * Set book on shelf
     * @param value Shelf value
     */
    setBookShelf(value){
        let {onUpdateBookShelf} = this.props;
        onUpdateBookShelf(this.props,value);
        this.setState({shelf: value});
    }

    render () {
        let { title, authors, imageLinks } = this.props;

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url("${ imageLinks ? imageLinks.thumbnail : "" }")` } }>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            value={ this.state.shelf }
                            onChange={ (e) => this.setBookShelf(e.target.value) }
                        >
                            <option value="label" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{ authors }</div>
            </div>
        );
    }
}

export default Book;
