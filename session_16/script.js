var _a;
var dataProducts;
fetch('https://dummyjson.com/products')
    .then(function (res) { return res.json(); })
    .then(function (dataResponse) {
    if (localStorage.getItem("dataProducts") !== null) {
        dataProducts = JSON.parse(localStorage.getItem("dataProducts"));
    }
    else {
        var products = dataResponse.products;
        dataProducts = products;
        localStorage.setItem("dataProducts", JSON.stringify(dataProducts));
    }
    displayList(dataProducts);
});
var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
    var button = event.relatedTarget;
    var price = button.getAttribute('price');
    var category = button.getAttribute('category');
    var rating = button.getAttribute('rating');
    var name = button.getAttribute('name');
    var modalTitle = exampleModal.querySelector('.modal-title');
    var modalBody = exampleModal.querySelector('.modal-body');
    modalTitle.textContent = name !== null && name !== void 0 ? name : '';
    modalBody.innerHTML = "\n    <p>Price: ".concat(price, "</p>\n    <p>Category: ").concat(category, "</p>\n    <p>Rating: ").concat(rating, "</p>\n  ");
});
(_a = document.getElementById('searchInput')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', function () {
    clearContainer();
    var searchTerm = this.value;
    if (searchTerm === "") {
        displayList(dataProducts);
    }
    else {
        var results = searchByName(searchTerm, dataProducts);
        displayList(results);
    }
});
function searchByName(name, items) {
    return items.filter(function (item) { return item.title.toLowerCase().includes(name.toLowerCase()); });
}
var displayList = function (list) {
    var _a;
    for (var i = 0; i < list.length; i++) {
        var _b = list[i], imgUrl = _b.images[0], title = _b.title, description = _b.description, price = _b.price, category = _b.category, rating = _b.rating;
        var card = document.createElement('div');
        card.className = 'card';
        var img = document.createElement('img');
        img.src = imgUrl;
        img.className = 'card-img-top';
        img.alt = '...';
        card.appendChild(img);
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);
        var cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = title;
        cardBody.appendChild(cardTitle);
        var cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = description;
        cardBody.appendChild(cardText);
        var button = document.createElement('button');
        button.type = "button";
        button.className = "btn btn-primary";
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#exampleModal');
        button.setAttribute('price', price.toString());
        button.setAttribute('category', category);
        button.setAttribute('rating', rating.toString());
        button.setAttribute('name', title);
        button.textContent = 'Details';
        cardBody.appendChild(button);
        (_a = document.getElementById('cards-container')) === null || _a === void 0 ? void 0 : _a.appendChild(card);
    }
};
var clearContainer = function () {
    document.querySelectorAll(".card").forEach(function (element) {
        element.remove();
    });
};
