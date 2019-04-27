import { gql } from 'apollo-boost'; 
// $name: String!
    // $ - passing in variables
    // String - The type
    // ! - Reqired field
const addBookMutation = gql`
    mutation ($name: String!,$genre: String!$authorId: ID!){
        addBook(name:$name,genre:$genre,authorId:$authorId) {
            name
            genre
        }
    }
`


export { addBookMutation }