import { useSelector, useDispatch } from 'react-redux'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import {
    deleteBook,
    toggleFavorite,
    selectBooks,
} from '../../redux/slices/booksSlice'
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
} from '../../redux/slices/filterSlice'
import './BookList.css'

const BookList = () => {
    const books = useSelector(selectBooks)
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    const filteredBooks = books.filter((book) => {
        const machesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase())

        const machesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase())

        const machesFavorite = onlyFavoriteFilter ? book.isFavorite : true

        return machesTitle && machesAuthor && machesFavorite
    })

    const highlightMatch = (text, filter) => {
        if (!filter) return text

        const regex = new RegExp(`(${filter})`, 'gi')
        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {substring}
                    </span>
                )
            }
            return substring
        })
    }

    return (
        <div className="app-block book-list">
            <h2>Список книг</h2>
            {books.length === 0 ? (
                <p>Пусто...</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {highlightMatch(book.title, titleFilter)}{' '}
                                -{' '}
                                <strong>
                                    {highlightMatch(book.author, authorFilter)}
                                </strong>
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
