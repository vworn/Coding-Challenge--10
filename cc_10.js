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

// Task 2 - Created Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; // Unique order ID
        this.product = product; // Product being ordered
        this.quantity = quantity; // Quantity ordered

        if (this.product.stock >= this.quantity) {
            this.product.updateStock(this.quantity); // Deduct stock if available
        } else {
            throw new Error("Insufficient stock to fulfill the order.");
        }
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`;
    }
}

// Test cases for Task 2
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
// Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"