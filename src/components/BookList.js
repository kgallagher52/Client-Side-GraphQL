import React, { useState } from 'react';
import { gql } from 'apollo-boost'; // This package helps parse the data because graphQl is not javascript
import { graphql } from 'react-apollo'; // Helps bind apollo to react

const getBooksQuery = gql`
    {
        books{
            id
            name
            genre
        }
    }
`

 function BookList(props) {
     const { data } = props;
     const { books, loading } = data;
     
     console.log("Books",books);
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
    <div id="books-container">
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
