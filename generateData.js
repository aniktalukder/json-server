var faker = require('@faker-js/faker');

var fakerEN_US = faker.fakerEN_US;

var database = { products: [], orders: [] };

for (var i = 1; i <= 10; i++) {
    database.products.push({
        id: i,
        name : fakerEN_US.lorem.word(),
        cost: fakerEN_US.finance.amount(1, 1000),
        quantity: fakerEN_US.number.int(10)
    });

    database.orders.push({
        id: 1000 + i * 2,
        amount: fakerEN_US.finance.amount('$'),
        quantity: fakerEN_US.number.int(25)
    });
}

console.log(JSON.stringify(database));