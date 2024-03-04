# Project Books Library APP
Проект представляет собой простое приложение для управления книгами, с использованием Redux для управления состоянием.
### Структура кода<br>
<br>
<strong>app.js:</strong> Файл инициализирует главный Redux store с использованием booksReducer.<br>
<br>
<strong>index.js:</strong> Это точка входа в приложение. Здесь импортируются основные зависимости, включая store, React и ReactDOM.<br>
Также используется Provider из react-redux, чтобы предоставить доступ к хранилищу Redux для всего приложения.<br>
<br>
<strong>store.js: </strong> Этот файл также инициализирует Redux store<br>
<br>
<strong>actionCreator.js:</strong>Объявляется действие addBook, которое используется для добавления новой книги в состояние.<br>
<br>
<strong>actionTypes.js: </strong> Здесь объявляется тип действия ADD_BOOK.<br>
<br>
<strong>reducer.js: </strong> Файл содержит booksReducer, который обрабатывает действие addBook и добавляет новую книгу в состояние.<br>
<br>
<strong>filter.js: </strong> Этот файл определяет компонент Filter, который, предположительно, будет использоваться для фильтрации списка книг.<br>
<br>
<strong>bookList.js: </strong> Определяет компонент BookList, который будет отображать список книг.<br>
<br>
<strong>bookForm.js: </strong> Компонент BookForm, который содержит форму для добавления новой книги в список. <br>При отправке формы вызывается функция handleSubmit, которая проверяет, заполнены ли поля title и author, и затем очищает поля формы.
