class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}

// Usage example
const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name); // ES6
c1.name = 'Python 101';
console.log(c1); // HolbertonCourse { _name: 'Python 101', _length: 1, _students: [ 'Bob', 'Jane' ] }

try {
  c1.name = 12; // This will throw a TypeError
} catch (err) {
  console.log(err); // TypeError: Name must be a string
}

try {
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']); // This will throw a TypeError
} catch (err) {
  console.log(err); // TypeError: Length must be a number
}
