let vehicles: Array<Vehicle> = [];
class Vehicle {
    brand: string;
    model: string;
    year: number;
    color: string;
    horsePower: number;
    kilometers: number;
    numberOfSeats: number;
    fuelType: string;
    image: string;
    constructor(brand: string, model: string, year: number, color: string, horsePower: number, kilometers: number, numberOfSeats: number, fuelType: string, image: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.horsePower = horsePower;
        this.kilometers = kilometers;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.image = image;
        // vehicles.push(this);
    }
    generateContent() {
        return `<div class="col-md-6 col-lg-4 mb-4">
                    <div class="card">
                        <img class="card-img-top" src="${this.image}" alt="${this.brand}, ${this.model}, ${this.year}">
                        <div class="card-body">
                            <h5 class="card-title">${this.brand} <small>${this.model}</small></h5>
                            <p class="card-text">
                                <ul>
                                    <li>year: ${this.year}</li>
                                    <li>color: ${this.color}</li>
                                    <li>horsepower: ${this.horsePower}</li>
                                    <li>kilometers: ${this.kilometers}</li>
                                </ul>
                            </p>
                            <button class="btn btn-info">Show Price</button>
                        </div>
                    </div>
                </div>`
    }


    getPrice(): number {
        let priceCalculation = (100000 / this.kilometers) * this.horsePower / this.numberOfSeats + ((new Date().getFullYear() - this.year) * 2000);
        switch (this.fuelType) {
            case "gas":
                return  Math.round(priceCalculation * 100) / 100
            case "diesel":
                return Math.round(1.1 * priceCalculation * 100) / 100
            case "electric":
                return Math.round(1.2 * priceCalculation * 100) / 100
            default:
                return 0;
        }
    }
}

class Motor extends Vehicle {
    class: string;
    type: string;
    constructor(brand: string, model: string, year: number, color: string, horsePower: number, kilometers: number, numberOfSeats: number, fuelType: string, image: string, type: string) {
        super(brand, model, year, color, horsePower, kilometers, numberOfSeats, fuelType, image);
        this.class = "motorcycle";
        this.type = type;
    }
}

class Truck extends Vehicle {
    class: string;
    maximumLoad: number;
    constructor(brand: string, model: string, year: number, color: string, horsePower: number, kilometers: number, numberOfSeats: number, fuelType: string, image: string, maximumLoad: number) {
        super(brand, model, year, color, horsePower, kilometers, numberOfSeats, fuelType, image);
        this.class = "truck";
        this.maximumLoad = maximumLoad;
    }
}

vehicles.push(new Vehicle("VW", "Golf", 2015, "blue", 115, 154000, 5, "diesel", "img/car (1).jpg"));
vehicles.push(new Vehicle("Opel", "Insignia", 2019, "blue", 125, 14000, 5, "gas", "img/car (2).jpg"));
vehicles.push(new Vehicle("Tesla", "Model S", 2018, "black", 260, 50000, 5, "electric", "img/car (3).jpg"));
vehicles.push(new Motor("BMW", "S 1000 RR", 2016, "yellow", 180, 65000, 2, "gas", "img/motor.jpg", "sport"));
vehicles.push(new Truck("Mercedes", "Actros", 2012, "green", 420, 325000, 3, "diesel", "img/truck.jpg", 28000));


console.log(vehicles);
//console.log(vehicles[0].getPrice());

let cardsVehicle = document.getElementById("content");
vehicles.forEach((vehicle) => {
    if (cardsVehicle != null) {
        cardsVehicle.innerHTML += vehicle.generateContent()
    } 
});

let priceButtons = document.querySelectorAll(".btn");
priceButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        var price = vehicles[index].getPrice(); 
        button.innerHTML = price.toString();
    })
    
});


