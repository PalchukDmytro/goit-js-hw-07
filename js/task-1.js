// Отримуємо список всіх категорій (елементів li.item)
const categoriesList = document.querySelectorAll('#categories .item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// Для кожної категорії виводимо текст заголовка (h2) та кількість елементів у категорії
categoriesList.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const itemCount = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCount}`);
});