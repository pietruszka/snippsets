let _data = new WeakMap();
let _length = new WeakMap();
let _pos = new WeakMap();

class List {
    constructor(data = [], size = 0, pos = 0) {
        _data.set(this, data);
        _length.set(this, size);
        _pos.set(this, pos);

    }

    length() {
        return _length.get(this);
    }

    append(element) {
        _data.set(this, [..._data.get(this), element]);
        _length.set(this, _length.get(this) + 1);
    }

    insert(element, after) {
        _data.get(this).splice(after, 0, element);
        _length.set(this, _length.get(this) + 1);
    }

    includes(element) {
        return Boolean(_data.get(this).find(e=>e===element))
    }

    get() {
        return _data.get(this);
    }
}

let list = new List();
list.append("ddd");
list.append("ddd2");
list.append("ddd3");
list.insert('2',1)
console.log(list.includes('ddd23'))
console.log(list.get(), list.length())
