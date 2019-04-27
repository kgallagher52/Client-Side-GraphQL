import React, { useState } from 'react';
import { graphql } from 'react-apollo'; // Helps bind apollo to react
import { getBooksQuery } from '../graphQL/queries';

//Components
import BookDetails from './BookDetails';

 function BookList(props) {
     const { data } = props;
     const { books, loading } = data;
     const [bookId, selectBook] = useState('');
     const displayBooks = () => {
        if(loading) {
            return <tr><th colSpan="6">Loading Books...</th></tr>
        } else {
            return books.map(book => {
                return( 
                <tr className={"books"} key={book.id} onClick={(e) => selectBook(e.target.id)}>
                    <th id={book.id}>{book.name}</th>
                    <th>{book.genre}</th>
                </tr>
                )
            })
        }
     }
     

  return (
    <div id="booksContainer">
        <table>
            <tbody>
                <tr>
                    <th className="table-header">Name</th>
                    <th className="table-header">Genre</th>
                </tr>
                {displayBooks()}
            </tbody>
        </table>
        <BookDetails bookId={bookId}/>
    </div>
  )
}
// Wrap graphQL over component passing in the query function
export default graphql(getBooksQuery)(BookList)
