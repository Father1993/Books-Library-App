import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../redux/slices/booksSlice'
import booksData from '../../data/books.json'
import createBookWithID from '../../utils/createBookWithID'
import './BookForm.css'

const BookForm = () => {
    // Контроль input`s через локальное состояние компонента
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()

    const handleAddRandomBook = () => {
        // Получаем рандомный индекс элемента в массиве
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]

        dispatch(addBook(createBookWithID(randomBook)))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && author) {
            dispatch(addBook(createBookWithID({ title, author })))
            setTitle('')
            setAuthor('')
        }
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
            </form>
        </div>
    )
}

export default BookForm
