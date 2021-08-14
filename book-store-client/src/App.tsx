import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { Container, Button } from '@material-ui/core';
import { getBookById } from './graphql/queries/book';
import { IBook } from './interfaces/book';
import BookCard from './components/BookCard';
// import { GraphQLResult } from '@aws-amplify/api';

const App = () => {
  const [book, setBook] = React.useState<IBook | null>(null);

  const getBook = async () => {
    const bookId = 'c2fada9c-8f4a-4d32-b19c-f440d31c3838';
    const result: any = await API.graphql(
      graphqlOperation(getBookById, { id: bookId })
    );

    setBook(result?.data?.getBookById);
    console.log(book);
  };

  const renderBook = () => {
    if (!book) return <p>Loading...</p>;

    return (
      <BookCard
        title={book.title}
        author={book.author}
        bookId={book.bookId}
        description={book.description}
        prices={book.prices}
        imageUrl={book.imageUrl}
      />
    );
  };

  return (
    <Container maxWidth='sm'>
      <AmplifySignOut />
      <h1>Hello Amplify</h1>
      <Button onClick={() => getBook()} variant='contained' color='primary'>
        Get Book
      </Button>
      <hr />
      {renderBook()}
    </Container>
  );
};

export default withAuthenticator(App);
