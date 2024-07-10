async function getData(url) {
    try {
        const resp = await fetch(url);
        const data =  resp.json();
        return data
    } catch (error) {
        return error;
    }
}
function createCard(product) {
    return `
    <div class="card" data-id = "${product.id}">
    <img src='${product.image}' alt="img">
    <div style="display: flex; align-items: center; gap: 12px;">
    <p>star:${product.star}</p>
    <p>comments(${product.comments})</p>
</div>
    <h2>${product.name}</h2>
    <div style="display: flex; align-items: center; gap: 12px;">
    <h1>₽${product.newPrice}</h1>
    <p>₽${product.oldPrice}</p>
</div>
    `
}
function createCard2(product) {
    return `
    <div class="card" data-id = "${product.id}">
    <img src='${product.image}' alt="img">
    <div style="display: flex; align-items: center; gap: 12px;">
    <p>star:${product.star}</p>
    <p>comments(${product.comments})</p>
</div>
    <h2>${product.name}</h2>
    <div style="display: flex; align-items: center; gap: 12px;">
    <h1>₽${product.newPrice}</h1>
    <p>₽${product.oldPrice}</p>
</div>
    `
}
function createDetails(product) {
    return `
    <div>
    <img src="${product.image}" alt="img">
</div>
<div>
    <h1>${product.name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate dolorum deleniti <br> sequi! Assumenda consequatur eius ea? Vel quia eveniet quaerat, optio laborum repudiandae <br> maxime tempora! Odio inventore beatae ipsum deserunt corporis eligendi, iusto officia <br> eos vitae libero facere consequatur enim ipsa! Fugit iure, earum vel <br> illo quod quasi repudiandae?</p>
    <h4>Цена</h4>
    <div class="narx">
        <h2>₽${product.newPrice}</h2>
        <h3>₽${product.oldPrice}</h3>
    </div>
    <button class="karzinka_button">Корзинка</button>
</div>
    `
}


export {getData,createCard,createDetails,createCard2};   


