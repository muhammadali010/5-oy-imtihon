import { getData, createDetails } from "./function.js";
const details = document.getElementById('details');



document.addEventListener('DOMContentLoaded', function () {
    let url = window.location.href;
    let id = url.split('id=')[1];

    if (!id) {
        window.location.assign("http://127.0.0.1:5500/index.html")
        return
    }

    getData(`https://cars-pagination.onrender.com/products/${id}`)
        .then(data => {
            const card = createDetails(data);
            details.innerHTML = card;
        })
        .catch(err => {
            console.log(err);
        })
})