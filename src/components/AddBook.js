import React, { useState } from 'react';
import { graphql,compose } from 'react-apollo'; //compose - allows you to wrap the component with mutations & queries
import { getAuthorsQuery } from '../graphQL/queries';
import { addBookMutation } from '../graphQL/mutations';

 function AddBook(props) {
    const { getAuthorsQuery,addBookMutation } = props;
    const { authors, loading } = getAuthorsQuery;
    const [name, updateName] = useState('');
    const [genre, updateGenre] = useState('');
    const [id, updateId] = useState('');

    
    const displayAuthors = () => {
            if(loading) {
                return <option>Loading Authors....</option>
            } else {
                return authors.map(author => {
                    return <option key={author.id} value={author.id}>{author.name}</option>
                })
            }
        }
    const submitBook = () => {
        var newBook = {"name":name,"genre":genre,"authorId":id}
        addBookMutation({
            variables: newBook
        })
    }

    return (
        <div id="authorsContainer">
            <div id="authorForm">
                <div className="field">
                    <input onChange={(e) => updateName(e.target.value)} placeholder="Book Name" type="text"/>
                </div>
                <div className="field">
                    <input onChange={(e) => updateGenre(e.target.value)} placeholder="Genre" type="text"/>
                </div>
                <div className="field">
                    <select onChange={(e) => updateId(e.target.value)}>
                        <option>Select Author</option>
                        {displayAuthors()}
                    </select>
                </div>
                <button onClick={() => submitBook()}>Submit</button>
            </div>
        </div>
    )
}
// Wrap graphQL over component passing in the query function
export default compose(
    graphql(getAuthorsQuery, { name:"getAuthorsQuery"}),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook)
