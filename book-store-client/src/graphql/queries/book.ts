export const getBookById = `
  query getBookById($id: ID!) {
    getBookById(bookId: $id) {
      title
      description
      author
      bookId
      prices
      imageUrl
  }
}
`;
