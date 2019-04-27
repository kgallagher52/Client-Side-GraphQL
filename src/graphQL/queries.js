import { gql } from 'apollo-boost'; // This package helps parse the data because graphQl is not javascript

const getAuthorsQuery = gql`
    {
        authors{
            id
            name
        }
    }
`

const getBooksQuery = gql`
    {
        books{
            id
            name
            genre
        }
    }
`

const getBookQuery = gql`
   query ($id: ID) {
       book(id: $id){
           id
           name
           genre
           author{
               id
               name
               age
               books{
                   id
                   name
                   genre
               }
           }
       }
   }
`

export { getAuthorsQuery, getBooksQuery, getBookQuery }