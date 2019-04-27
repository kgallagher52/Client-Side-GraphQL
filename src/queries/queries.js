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

export { getAuthorsQuery, getBooksQuery }