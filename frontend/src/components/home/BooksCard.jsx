
import { useContext } from 'react';
import BookSingleCard from './BookSingleCard';
import { mainContext } from '../../contextProvider/MainContext';

const BooksCard = () => {
  const {books} = useContext(mainContext)
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
