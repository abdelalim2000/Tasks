// Customer Class
import Customers from "./Customers.js"
// UI Class
import UI from "./UI.js"
// Storage Class
import Storage from "./Storage.js";

// Events Display Customers
document.addEventListener('DOMContentLoaded', UI.displayCustomer)
// Events Add Customer
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const customerName = document.getElementById("cName").value
    const amount = document.getElementById('amount').value

    if (customerName === "" || amount === "") {
        alert("All fields are required")
    } else {
        const customer = new Customers(customerName, amount)

        UI.addCustomerToView(customer);
        UI.clearData()
    }
})
// Events Remove Customer
document.getElementById('customer-list').addEventListener('click', (e) => {
    UI.deleteCustomer(e.target)
})
