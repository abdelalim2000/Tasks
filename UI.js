class UI {
    static displayCustomer() {
        const StoredCustomer = [
            {
                id: Math.random(Date.now()).toString(36).substr(2, 7),
                customer_name: "Mohamed",
                amount: 5000,
                taxes: 500,
            },
            {
                id: Math.random(Date.now()).toString(36).substr(2, 7),
                customer_name: "Ahmed",
                amount: 7000,
                taxes: 700,
            },
        ];

        const Customers = StoredCustomer;
        Customers.forEach(customer => UI.addCustomerToView(customer))
    }

    static addCustomerToView(customer) {
        const viewList = document.getElementById('customer-list')
        const row = document.createElement("tr")
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
        document.getElementById('cName').value = ""
        document.getElementById('amount').value = ""
    }

    static deleteCustomer(customer) {
        if (customer.classList.contains('delete')) {
            customer.parentElement.parentElement.remove()
        }
    }
}

export default UI
