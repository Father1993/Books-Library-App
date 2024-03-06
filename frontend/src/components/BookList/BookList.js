import { useSelector, useDispatch } from 'react-redux'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import './BookList.css'

const BookList = () => {
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    return (
        <div className="app-block book-list">
            <h2>Список книг</h2>
            {books.length === 0 ? (
                <p>Нет книг</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {book.title} -{' '}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <span
                                    onClick={() =>
                                        handleToggleFavorite(book.id)
                                    }
                                >
                                    {book.isFavorite ? (
                                        <MdFavorite className="star-icon" />
                                    ) : (
                                        <MdFavoriteBorder className="star-icon" />
                                    )}
                                </span>

                                <button
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    Удалить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList
