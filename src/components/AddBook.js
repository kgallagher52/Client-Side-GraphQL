import React from 'react';
import { gql } from 'apollo-boost'; // This package helps parse the data because graphQl is not javascript
import { graphql } from 'react-apollo'; // Helps bind apollo to react

const getAuthorsQuery = gql`
    {
        authors{
            id
            name
        }
    }
`

 function AddBook(props) {
    const { data } = props;
    const { authors, loading } = data;
     
    console.log("Authors",authors);

   const displayAuthors = () => {
        if(loading) {
            return <div>Loading Authors....</div>
        } else {
            return authors.map(author => {
                return <option key={author.id} value={author.id}>{author.name}</option>
            })
        }
    }

    return (
        <div id="authorsContainer">
            <form id="authorf">
                <div className="field">
                    <input placeholder="Book Name" type="text"/>
                </div>
                <div className="field">
                    <input placeholder="Genre" type="text"/>
                </div>
                <div className="field">
                    <select>
                        <option>Select Author</option>
                        {displayAuthors()}
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
// Wrap graphQL over component passing in the query function
export default graphql(getAuthorsQuery)(AddBook)
