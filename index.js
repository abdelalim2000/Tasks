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

    if (customerName === "") {
        UI.ValidationError('customer_name')
        UI.clearSuccessValidation()
        UI.clearDeleteValidation()
    }
    if (amount === "") {
        UI.ValidationError('amount')
        UI.clearSuccessValidation()
        UI.clearDeleteValidation()
    }
    if (customerName && amount) {
        const customer = new Customers(customerName, amount)
        UI.addCustomerToView(customer)
        Storage.addClient(customer)
        UI.clearDeleteValidation()
        UI.ValidationSuccess()
        UI.clearData()
        UI.clearErrorValidation()

    }
})
// Events Remove Customer
document.getElementById('customer-list').addEventListener('click', (e) => {
    UI.deleteCustomer(e.target)
    Storage.removeClient(e.target.getAttribute('data-id'))
    UI.clearSuccessValidation()
    UI.clearErrorValidation()
    UI.warningNotification()
})
