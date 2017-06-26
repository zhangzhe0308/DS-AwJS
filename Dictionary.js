/**
 * Implementation of Dictionary.
 */
function Dictionary() {
    this.add = add;
    this.datastore = {};
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

function add(key, value) {
    this.datastore[key] = value;
}

function find(key) {
    return this.datastore[key];
}

function remove(key) {
    delete this.datastore[key];
}

function showAll() {
    for (var key in this.datastore) {
        print(key + "->" + this.datastore[key]);
    }
}

