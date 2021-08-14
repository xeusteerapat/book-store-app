export interface IBook {
  title: string;
  author: string;
  bookId: string;
  description: string;
  imageUrl?: string;
  prices: number;
  createdAt?: string;
  updatedAt?: string;
}
