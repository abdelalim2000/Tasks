class Storage {
    static getClients() {
        let Clients;
        if (localStorage.getItem('clients') === null) {
            Clients = []
        } else {
            Clients = JSON.parse(localStorage.getItem('clients'))
        }

        return Clients
    }

    static addClient(client) {
        const Clients = Storage.getClients();
        Clients.push(client)
        localStorage.setItem('clients', JSON.stringify(Clients))
    }

    static removeClient(id) {
        const Clients = Storage.getClients();
        const filteredClients = Clients.filter(client => client.id !== id)
        localStorage.setItem('clients', JSON.stringify(filteredClients))
    }
}

export default Storage
