import 'regenerator-runtime';
import '../styles/main.css';
// Fetch data json
import('../DATA.json').then(({
  default: jsonData,
}) => {
  console.log(jsonData);
  const datas = jsonData.restaurants;
  let dataList = '';
  datas.forEach((data) => {
    dataList += `
        <div class="list_item">
            <img class="list_thumbnail" src="${data.pictureId}" alt="${data.name}" title="${data.name}">
            <div class="ratings">Rating : ${data.rating} / 5</div>
            <div class="list_content">
                <h1 class="list_item_title"><a href="#">${data.name} - ${data.city}</a></h1>
                <div class="list_item_desc">Description : ${data.description.slice(0, 111)}...</div>
            </div>
        </div>
        `;
  });
  document.querySelector('#RestaurantCatalog').innerHTML = dataList;
});

// Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});
