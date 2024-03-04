import { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
    // Контролирую input`s через локальное состояние компонента
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {
            // dispatch action
            console.log(title, author)
            setTitle('')
            setAuthor('')
        }
    }

    // На случай если полей для ввода
    // const [formData, setFormData] = useState({})
    return (
        <div className="app-block book-form">
            <h2>Add new Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="title">Author: </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add book</button>
            </form>
        </div>
    )
}

export default BookForm
