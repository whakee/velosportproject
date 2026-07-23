const tovari = [
    {
        name: "dirt jumper",
        category: "mtb",
        price: "500$",
        image: "https://www.airdropbikes.com/cdn/shop/articles/1800-Fade-Bomber-Ltd-Edition-01_2000x.jpg?v=1663079148"
    },
    {
        name: "downhill",
        category: "mtb",
        price: "1500$",
        image: "https://wallpaperaccess.com/full/2150980.jpg"
    },
    {
        name: "road bike",
        category: "road bikes",
        price: "750$",
        image: "https://flatironbike.com/wp-content/uploads/2024/06/choosing_a_beginner_road_bicycle.jpg"
    },
    {
        name: "road bike",
        category: "road bikes",
        price: "1000$",
        image: "https://bikerumor.com/wp-content/uploads/2020/04/2021-Giant-TCR-road-bike_new-lightweight-carbon-aero-road-race-bike-of-Team-CCC_photo-by-Chris-Auld.jpg"
    },
    {
        name: "mountain bike",
        category: "mtb",
        price: "200$",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tMGwhELrKj52GT0-r6TPW5qWU0N95YrZ7AXAqdmkfkerKq816KDWD60&s=10"
    },
];

const products = document.querySelector("#products");

for (let bike of tovari) {
    products.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${bike.image}" class="card-img-top" alt="${bike.name}">
                <div class="card-body">
                    <h5 class="card-title">${bike.name}</h5>
                    <p><b>Категорія:</b> ${bike.category}</p>
                    <p><b>Ціна:</b> ${bike.price}</p>
                    <button class="btn btn-primary">Купити</button>
                </div>
            </div>
        </div>
    `;
}