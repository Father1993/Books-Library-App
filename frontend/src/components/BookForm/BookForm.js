import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImSpinner9 } from 'react-icons/im'
import {
    addBook,
    fetchBook,
    selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice'
import { setError } from '../../redux/slices/errorSlice'
import booksData from '../../data/books.json'
import createBookWithID from '../../utils/createBookWithID'
import './BookForm.css'

const API_URL = 'http://localhost:4000/random-book-delayed'

const BookForm = () => {
    // Контроль input`s через локальное состояние компонента
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
    const dispatch = useDispatch()

    const handleAddRandomBook = () => {
        // Получаем рандомный индекс элемента в массиве
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]

        dispatch(addBook(createBookWithID(randomBook, 'случайная')))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && author) {
            dispatch(addBook(createBookWithID({ title, author }, 'в ручную')))
            setTitle('')
            setAuthor('')
        } else {
            dispatch(setError('Заполните поле название и автор'))
        }
    }

    const handleAddRandomBookViaAPI = () => {
        dispatch(fetchBook(API_URL))
    }

    // На случай если полей для ввода
    // const [formData, setFormData] = useState({})
    return (
        <div className="app-block book-form">
            <h2>Добавит новую книгу</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Название: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="title">Автор: </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Добавить книгу</button>
                <button type="button" onClick={handleAddRandomBook}>
                    Добавить случайную книгу из топ 100
                </button>

                <button
                    type="button"
                    onClick={handleAddRandomBookViaAPI}
                    disabled={isLoadingViaAPI}
                >
                    {isLoadingViaAPI ? (
                        <>
                            <span>Загрузка книги...</span>
                            <ImSpinner9 className="spinner" />
                        </>
                    ) : (
                        'Случайная книга через API'
                    )}
                </button>
            </form>
        </div>
    )
}

export default BookForm
