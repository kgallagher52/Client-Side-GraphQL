// Packages
import React from 'react';
import ApolloClient from 'apollo-boost'; // Apollo Boost is just a bundle of necessary packages for apollo client
import { ApolloProvider } from 'react-apollo'; //Binds Apollo to react wraps our application
//Components
import BookList from './components/BookList';

//Style Sheets
import './styles/index.css';

//Apollo Configuration 
const client = new ApolloClient({
  uri:'http://localhost:5000/graphql'
});

function App() {
  return (
    //client={client} tells apollo provider what client to hook to.
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Book Reading List</h1>
        <BookList/>
      </div>
    </ApolloProvider>

  );
}

export default App;
