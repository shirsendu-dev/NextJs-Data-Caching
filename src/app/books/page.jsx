import React from 'react';
import BookCard from '../components/BookCard';

const getBooks = async() => {

    const res = await fetch('http://localhost:3001/books');
    if(!res.ok){
        throw new Error('Failed to fetch books...')
    }
    return res.json();
}

const BooksPage = async() => {

    const books = await getBooks();

    return (
        <div className='py-15'>
            <h2 className='text-4xl font-bold text-center mb-10'>Books</h2>
            <div className='grid grid-cols-3 gap-4 container mx-auto'>
                {
                    books.map(book => <BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;