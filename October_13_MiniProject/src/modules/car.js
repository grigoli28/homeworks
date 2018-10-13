module.exports = class Car {
    constructor(manuf = "BMW", model = "M8 Grand Coupe", year = 2019, color = "Dark Green", VIN, licNum, disabled = false, owner = null) {
        this.manufacturer = manuf;
        this.model = model;
        this.year = year;
        this.VIN = VIN;
        this.licenseNumber = licNum;
        this.color = color;
        this.disabled = disabled;
    }

    hasVIN(vin) {
        return this.VIN == vin;
    }

    origin(manuf, model) {
        return this.manufacturer == manuf &&
            this.model == model;
    }
}