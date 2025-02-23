// Task 1 - Created Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name; // Product name
        this.id = id; // Product ID
        this.price = price; // Product price
        this.stock = stock; // Available stock
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        this.stock -= quantity; // Reducing stock when an order is placed
    }
}

// Test cases for Task 1
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); 
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"
