/**
 * Implementation of Hashmap
 */
function Hashmap() {
    this.table = new Array(137); // Length must be a prime number
    this.put = put;
    this.exists = exists;
    this.hash = hash;
}

function put(data) {
    var pos = hash(data);
    //TODO: collision handler
    // using linear probling, store key and value in seperated tables
    // using seperate chaining, which stores collide data in an adjacent table
    this.table[pos] = data;
}

function exists(data) {
    var pos = hash(data);
    if (this.table[pos] == data) return true;
    else
        return false;
}

function hash(data) {
    var weight = 31;
    var total = 0;
    for (var i = 0; i < data.length; i++)
        total += weight * data.charCodeAt(i);
    // get mod
    total = total % this.table.length;
    if (total < 0) total += this.table.length - 1;
    return parseInt(total);
}
