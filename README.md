This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies
    1. React

    2. Apollo

    3. GraphQL

## Mutations
    1. Passing in Variables
       ``` - Ex: const addBookMutation = gql`
                mutation ($name: String!,$genre: String!$authorId: ID!){
                    addBook(name:$name,genre:$genre,authorId:$authorId) {
                        name
                        genre
                    }
                }
            ` ```
            - $ - Telling the query that it's a variable
            - String - The type of data it is.
            - ! - Saying that this is a reqired field

## Queries
    1. Ex: const getAuthorsQuery = gql`
                            {
                                authors{
                                    id
                                    name
                                }
                            }
                        `
    2. Re-Fetching queries
        - refetchQueries: [{ query: getAuthorsQuery }]
        
    3. Getting specific data
        - Ex:  query($id: String) {
                book(id: $id) { 
                    id
                    name
                    author{
                        name
                        books{
                            name
                        }
                    }
                }


## Package Knowledge
    1. apollo-boost
        - Apollo Boost is just a bundle of necessary packages for apollo client
        1. gql
            - This package helps parse the data because graphQl is not javascript

    2. react-apollo
        - React apollo lets you use Apollo client, this allows apollo and react to understand eachother.
        1. apollo-provider
            - Used to wrap all of you're components in.) 
            - Binds Apollo to react & wraps our application
        2. graphql
            - Wraps single components so that they can use queries
            - Ex: export default graphql(queryFunctionName)(AddBook)
        3. compose
            - This allows you to wrap single components with mutations & queries
            - Ex: export default compose(
                    graphql(getAuthorsQuery, { name:"getAuthorsQuery"}),
                    graphql(addBookMutation, { name: "addBookMutation" })
                )(AddBook)

##Resources
1.Apollo
    https://www.apollographql.com/docs/react/essentials/get-started
2.Tutorial
    https://youtu.be/ed8SzALpx1Q

## Available Scripts


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# Client-Side-GraphQL
# Client-Side-GraphQL
