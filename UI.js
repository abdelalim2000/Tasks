import Storage from "./Storage.js";

class UI {
    static displayCustomer() {
        const Customers = Storage.getClients();
        Customers.forEach(customer => UI.addCustomerToView(customer))
    }

    static addCustomerToView(customer) {
        const viewList = document.getElementById('customer-list')
        const row = document.createElement("tr")
        row.classList.add("text-white")
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.customer_name}</td>
            <td>$ ${customer.amount}</td>
            <td>$ ${customer.taxes}</td>
            <td><a href="#" data-id="${customer.id}" class="btn btn-danger btn-sm delete">Delete</a></td>
        `;
        viewList.appendChild(row);
    }

    static clearData() {
        document.getElementById('cName').value = null
        document.getElementById('amount').value = null
    }

    static deleteCustomer(customer) {
        if (customer.classList.contains('delete')) {
            customer.parentElement.parentElement.remove()
        }
    }


    // Validations Control UI
    static ValidationError(dataTarget) {
        if (dataTarget === 'customer_name') {
            document.getElementById('cNameValidation').classList.remove('d-none')
        }

        if (dataTarget === 'amount') {
            document.getElementById('amountValidation').classList.remove('d-none')
        }
    }

    static warningNotification() {
        document.getElementById('delete').classList.remove('d-none')
    }

    static ValidationSuccess() {
        document.getElementById('success').classList.remove('d-none')
    }

    static clearErrorValidation() {
        document.getElementById('cNameValidation').classList.add('d-none')
        document.getElementById('amountValidation').classList.add('d-none')
    }

    static clearSuccessValidation() {
        document.getElementById('success').classList.add('d-none')
    }

    static clearDeleteValidation() {
        document.getElementById('delete').classList.add('d-none')
    }
}

export default UI
