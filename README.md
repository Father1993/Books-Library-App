# My Book Library project using React and Redux
Этот проект - это простое веб-приложение, которое позволяет пользователям управлять своей библиотекой книг.

## Основные возможности:

- Добавление новых книг в библиотеку (вручную или через API)
- Удаление книг из библиотеки
- Отметка книг как избранных
- Фильтрация списка книг по названию, автору или только избранным книгам
- Уведомления об ошибках

## Структура проекта:

Проект разбит на несколько основных частей:

1. `index.js` - точка входа в приложение. Здесь создается корневой элемент приложения, инициализируется хранилище Redux и рендерится главный компонент приложения.
2. `store.js` - здесь создается хранилище Redux, которое используется для управления состоянием приложения.
3. `slices/` - содержит Redux slices для разных частей состояния (книги, фильтры, ошибки).
4. `components/` - содержит все React компоненты, которые используются в приложении.
5. `utils/` - содержит вспомогательные функции, которые используются в приложении.

## Запуск проекта:

Для запуска проекта на вашем локальном компьютере, выполните следующие шаги:

1. Клонируйте репозиторий: `git clone <https://github.com/yourusername/book-library.git`>
2. Перейдите в каталог проекта: `cd book-library`
3. Установите зависимости: `npm install`
4. Запустите проект: `npm start`

После этого проект будет доступен по адресу: `http://localhost:3000`
API сервер запускается на порту: 4000
