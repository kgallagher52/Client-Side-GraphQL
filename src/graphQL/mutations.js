import { gql } from 'apollo-boost'; 

const addBookMutation = gql`
    mutation {
        addBook(name:"",genre:"",authorId:"") {
            name
            genre
        }
    }
`


export { addBookMutation }