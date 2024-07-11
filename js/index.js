import { getData, createCard ,createCard2 } from "./function.js";

const wrapper = document.getElementById('wrapper');

document.addEventListener('DOMContentLoaded', function () {
    getData('https://cars-pagination.onrender.com/products')
        .then(data => {
            const slicedData = data.slice(1, 13);
            slicedData.forEach(product => {
                let card = createCard(product);
                wrapper.innerHTML += card;
            });

            const cards = document.querySelectorAll('.card');
            cards.length > 0 && cards.forEach(function (card) {
                card.addEventListener('click', function (event) {
                    const cardId = this.getAttribute('data-id');
                    if (cardId) {
                        window.location.assign(`http://127.0.0.1:5500/pages/details.html?id=${cardId}`);
                    }
                });
            });
        })
        .catch(err => {
            console.log(err);
        });
});

const posledniy = document.getElementById('posledniy');

document.addEventListener('DOMContentLoaded', function () {
    getData('https://cars-pagination.onrender.com/products')
        .then(data => {
            const filteredData = data.filter(product => product.category === 'средний');
            const slicedData = filteredData.slice(0, 4);
            slicedData.forEach(product => {
                let card = createCard2(product);
                posledniy.innerHTML += card;
            });
        })
        .catch(err => {
            console.log(err);
        });
});
