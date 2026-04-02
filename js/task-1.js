'use strict';

const categoriesList = document.querySelector('ul#categories');
const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

const categoryItems = document.querySelectorAll('.item');
categoryItems.forEach((item) => {
  const itemH2Text = item.querySelector('h2');
  const itemListElement = item.querySelectorAll('li');
  console.log(`Category: ${itemH2Text.textContent}`);
  console.log(`Elements: ${itemListElement.length}`);
});
