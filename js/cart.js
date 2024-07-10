function createCart(product) {
    return `
    <div class="cart">
    <div class="cart__sidebar">
        <h1>Корзина</h1>
    </div>
    <div class="cart__wrapper">
    <div class="cart__img">
        <img src="${product.image}" alt="img">
    </div>
    <div style="display: flex;">
        <div class="cart__name">
            <h2>${product.name}</h2>
            <p>+ Подарок: <a href=""> “Приложение к замкам Golden Service”</a></p>
        </div>
        <div>
<button class="udalit">Удалить</button>
<h3 class="cart__price">₽${product.newPrice}</h3>
        </div>
    </div>
</div>
<div class="itogo">
<div>
    <h1>Итого: <span>₽${product.newPrice}</span></h1>
    <button class="zakaz_button">Оформить заказ  </button>
</div>
<div>
 <a href="http://127.0.0.1:5500/index.html">  <button>Продолжить покупки</button></a> 
</div>
</div>
</div>
    `
}


const button = document.querySelector('.karzinka_button');
const korzina = document.getElementById('korzina')

button && button.addEventListener('click',function () {
   
    document.addEventListener('DOMContentLoaded', function () {
        getData('https://cars-pagination.onrender.com/products')
            .then(data => {
                data.forEach(product => {
                    let card = createCart(product);
                    korzina.innerHTML += card;
                });
                window.location.assign("http://127.0.0.1:5500/pages/cart.html");
                korzina.innerHTML += item;
            })
            .catch(err => {
                console.log(err);
            });
    });
})


export {createCart}