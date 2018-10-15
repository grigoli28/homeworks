module.exports = class Person {
    constructor(first, mid = "", last, id, bdate, car = null) {
        this.firstName = first;
        this.middleName = mid;
        this.lastName = last;
        this.ID = id;
        this.birthDate = bdate;
    }

    hasId(id) {
        return this.ID == id;
    }

    // Checks for person full name
    is(fname, mid = "", lname) {
        return this.firstName == fname &&
            this.middleName == mid &&
            this.lastName == lname;
    }

    get disabled() {
        return this._disabled;
    }

    set disabled(condit) {
        this._disabled = condit;
    }
}