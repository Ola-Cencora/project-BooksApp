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
  render();
}