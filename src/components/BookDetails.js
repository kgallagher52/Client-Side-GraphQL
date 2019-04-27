import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../graphQL/queries';

 function BookDetails() {
  return (
    <div id="bookDetails">
        <p>Output book details here</p>
    </div>
  )
}

export default graphql(getBookQuery)(BookDetails);
