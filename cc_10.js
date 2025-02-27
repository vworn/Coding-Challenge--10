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

// Task 3 - Created Inventory Class
class Inventory {
    constructor() {
        this.products = []; // Array to store products
        this.orders = []; // Array to store orders
    }

    addProduct(product) {
        this.products.push(product); // Adding product to inventory
    }

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails())); // Displaying all products
    }
}

// Test cases for Task 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4 - Implemented Order Management
class InventoryWithOrders extends Inventory {
    placeOrder(orderId, product, quantity) {
        try {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order); // Storing the order
        } catch (error) {
            console.log(error.message); // Handling insufficient stock
        }
    }

    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails())); // Displaying all orders
    }
}

// Test cases for Task 4
const inventoryWithOrders = new InventoryWithOrders();
inventoryWithOrders.addProduct(prod1);
inventoryWithOrders.placeOrder(601, prod1, 2);
inventoryWithOrders.listOrders();
// Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"

console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Task 5 - Implemented Product Restocking
class InventoryWithRestocking extends InventoryWithOrders {
    restockProduct(productId, quantity) {
        const product = this.products.find(prod => prod.id === productId);
        if (product) {
            product.stock += quantity; // Increasing stock
        } else {
            console.log("Product not found in inventory.");
        }
    }
}

// Test cases for Task 5
const inventoryWithRestocking = new InventoryWithRestocking();
inventoryWithRestocking.addProduct(prod1);
inventoryWithRestocking.restockProduct(101, 5);
console.log(prod1.getDetails());
// Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"
