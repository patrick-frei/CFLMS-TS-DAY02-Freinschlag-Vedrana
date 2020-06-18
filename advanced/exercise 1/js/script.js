"use strict";
let vehicles = [];
class Vehicle {
    constructor(brand, model, year, color, horsePower, kilometers, numberOfSeats, fuelType, image) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.horsePower = horsePower;
        this.kilometers = kilometers;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.image = image;
        vehicles.push(this);
    }
    heading() {
        return `<h3>${this.brand} ${this.brand}</h3>`;
    }
    description() {
        return `<p>${this.year}</p>
    <p>color: ${this.color}</p>
    <p>horsepower: ${this.horsePower}</p>`;
    }
    getPrice() {
        switch (this.fuelType) {
            case "gas":
                return 100000 / this.kilometers * this.horsePower / this.numberOfSeats + ((new Date().getFullYear() - this.year) * 2000);
            case "diesel":
        }
    }
}
class Motor extends Vehicle {
    constructor(brand, model, year, color, horsePower, kilometers, numberOfSeats, fuelType, image, type) {
        super(brand, model, year, color, horsePower, kilometers, numberOfSeats, fuelType, image);
        this.class = "motorcycle";
        this.type = type;
    }
}
class Truck extends Vehicle {
    constructor(brand, model, year, color, horsePower, kilometers, numberOfSeats, fuelType, image, maximumLoad) {
        super(brand, model, year, color, horsePower, kilometers, numberOfSeats, fuelType, image);
        this.class = "truck";
        this.maximumLoad = maximumLoad;
    }
}
new Vehicle("VW", "Golf", 2015, "blue", 115, 154000, 5, "gas", "img.jpg");
new Vehicle("VW", "Golf", 2015, "blue", 115, 154000, 5, "gas", "img.jpg");
new Vehicle("VW", "Golf", 2015, "blue", 115, 154000, 5, "gas", "img.jpg");
new Motor("BMW", "S 1000 RR", 2016, "yellow", 180, 6500, 2, "gas", "img.jpg", "sport");
new Truck("Mercedes", "Actros", 2012, "green", 420, 325000, 3, "diesel", "img.jpg", 28000);
console.log(vehicles);
console.log(vehicles[0].getPrice());
