import React from 'react';
import { graphql } from 'react-apollo'; // Helps bind apollo to react
import { getBooksQuery } from '../queries/queries.js';

 function BookList(props) {
     const { data } = props;
     const { books, loading } = data;
     const displayBooks = () => {
        if(loading) {
            return <tr><th colSpan="6">Loading Books...</th></tr>
        } else {
            return books.map(book => {
                return( 
                <tr key={book.id}>
                    <th>{book.name}</th>
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
    </div>
  )
}
// Wrap graphQL over component passing in the query function
export default graphql(getBooksQuery)(BookList)
