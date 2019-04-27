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
     const { books } = data;
     
     console.log("Books",books);

  return (
    <div>
      <ul className="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  )
}
// Wrap graphQL over component passing in the query function
export default graphql(getBooksQuery)(BookList)
