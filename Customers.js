class Customers {
    constructor(customer_name, amount) {
        this.id = Math.random(Date.now()).toString(36).substr(2, 7);
        this.customer_name = customer_name;
        this.amount = amount;
        this.taxes = amount * 10 / 100;
    }
}

export default Customers;
