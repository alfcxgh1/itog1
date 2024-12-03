html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Магазин</title>
</head>
<body>
    <div id="filters">
        <label><input type="checkbox" id="price" onclick="handleFilterChange()"> Сортировка по цене</label>
        <label><input type="checkbox" id="title" onclick="handleFilterChange()"> Сортировка по названию</label>
        <input type="text" id="search" placeholder="Поиск..." oninput="handleSearchChange()">
    </div>
    
    <ul id="node_for_insert"></ul>

    <script>
        async function handleFilterChange() {
            const priceCheckbox = document.getElementById("price");
            const titleCheckbox = document.getElementById("title");
            const searchInput = document.getElementById("search").value.trim().toLowerCase();
            
            let response = await fetch("shop.json");
            let content = await response.text();
            content = JSON.parse(content).slice(0, 11); // Берём первые 11 товаров

            if (priceCheckbox.checked && !titleCheckbox.checked) {
                content.sort((a, b) => a.price - b.price);
            } else if (!priceCheckbox.checked && titleCheckbox.checked) {
                content.sort((a, b) => {
                    const nameA = a.title.toUpperCase();
                    const nameB = b.title.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }

            renderContent(content, searchInput);
        }

        function handleSearchChange() {
            const searchInput = document.getElementById("search").value.trim().toLowerCase();
            handleFilterChange(searchInput);
        }

        function renderContent(content, searchTerm) {
            const nodeForInsert = document.getElementById("node_for_insert");
            nodeForInsert.innerHTML = "";

            if (searchTerm !== "") {
                content = content.filter(item => {
                    return item.title.toLowerCase().includes(searchTerm) ||
                           item.description.toLowerCase().includes(searchTerm) ||
                           item.price.toString().includes(searchTerm);
                });
            }

            content.forEach(item => {
                nodeForInsert.innerHTML += `
                    <li style="width: 310px" class="d-flex flex-column m-1 p-1 border bg-body">
                        <img style="width: 180px" class="align-self-center" src="${item.img}">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}. Цена ${item.price} р.</p>
                        <input type="hidden" name="vendor_code" value="${item.vendor_code}">
                        <p class="card-text">!!Заказать!! <input class="w-25" type="text" value="0" name="check"></p>
                    </li>
                `;
            });
        }
    </script>
</body>
</html>
