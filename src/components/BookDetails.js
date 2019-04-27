import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../graphQL/queries';

 function BookDetails(props) {
    const { data } = props;
    const { book } = data;
    const displayBookDetails = () => {
        return (
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Genre</th>
                    <th>Author</th>
                </tr>
                <tr>
                    <th>{book.name}</th>
                    <th>{book.genre}</th>
                    <th>{book.author.name}</th>
                </tr>
                <tr>
                    <th>Other books by this {book.author.name}</th>
                </tr>
                <tr>
                    <th>{book.author.books.map(book => {return <ul key={book.id}><div><li>Title: {book.name}</li><li>Genre: {book.genre}</li></div></ul>})}</th>
                </tr>
            </tbody>
        )
    }
    return (
        <div id="bookDetails">
            {
                !book 
                ? null
                :<div>
                    <h3>Book Details</h3>
                    <table>
                        {displayBookDetails()}
                    </table>
                </div>

            }
        </div>
    )
}

export default graphql(getBookQuery, {
        options:(props) => {
            return {
            variables: {
                id:props.bookId
            }
        }
    }
})(BookDetails);
