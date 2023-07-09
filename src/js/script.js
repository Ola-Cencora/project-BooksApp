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

        // add class favorite to clicked book
        bookCover.classList.add('favorite');

        // add this book id to array
        let bookId = bookCover.getAttribute('data-id');
        favoriteBooks.push(bookId);
        console.log(favoriteBooks);
      });
    }
  }

  function init(){
    render();
    initActions();
  }
  init();
}