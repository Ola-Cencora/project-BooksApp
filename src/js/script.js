/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';

  const bookTemplate = Handlebars.compile(document.querySelector('#template-book').innerHTML);
  const booksList = document.querySelector('.books-list');

  // for every book render HTML, DOM element and add it to book list
  function render(){
    for(let book of dataSource.books){
      const generatedHTML = bookTemplate(book);
      const generatedDOM = utils.createDOMFromHTML(generatedHTML);
      booksList.appendChild(generatedDOM);
    }
  }

  // add books to favorites
  const favoriteBooks = [];

  function initActions(){
    const bookCovers = booksList.querySelectorAll('.book__image');

    for(let bookCover of bookCovers){
      bookCover.addEventListener('dblclick', function(event){
        event.preventDefault();
        let bookId = bookCover.getAttribute('data-id');

        // check if book is or is not in favorite array
        if (!favoriteBooks.includes(bookId)){
          // add class favorite to clicked book
          bookCover.classList.add('favorite');
          // add this book id to array
          favoriteBooks.push(bookId);
          console.log(favoriteBooks);
        } else if (favoriteBooks.includes(bookId)) {
          const indexOfBook = favoriteBooks.indexOf(bookId);
          favoriteBooks.splice(indexOfBook, 1);
          bookCover.classList.remove('favorite');
          console.log(favoriteBooks);
        }
      });
    }
  }

  function init(){
    render();
    initActions();
  }
  init();
}