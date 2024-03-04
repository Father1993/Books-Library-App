# Проект управления книгами
Этот проект представляет собой простое приложение для управления книгами, с использованием Redux для управления состоянием.
### Структура кода
app.js: Этот файл инициализирует главный Redux store с использованием booksReducer.
index.js: Это точка входа в приложение. Здесь импортируются основные зависимости, включая store, React и ReactDOM. Здесь также используется Provider из react-redux, чтобы предоставить доступ к хранилищу Redux для всего приложения.
store.js: Этот файл также инициализирует Redux store, как и app.js.
actionCreator.js: Здесь объявляется действие addBook, которое используется для добавления новой книги в состояние.
actionTypes.js: Здесь объявляется тип действия ADD_BOOK.
reducer.js: Этот файл содержит booksReducer, который обрабатывает действие addBook и добавляет новую книгу в состояние.
filter.js: Этот файл определяет компонент Filter, который, предположительно, будет использоваться для фильтрации списка книг.
bookList.js: Этот файл определяет компонент BookList, который будет отображать список книг.
bookForm.js: Этот файл определяет компонент BookForm, который содержит форму для добавления новой книги в список. При отправке формы вызывается функция handleSubmit, которая проверяет, заполнены ли поля title и author, и затем очищает поля формы.
#### Использование
Чтобы использовать это приложение, вы просто добавляете книгу, вводя название и имя автора в форму, и затем нажимаете кнопку "Добавить книгу". Книга затем будет добавлена в список книг.
