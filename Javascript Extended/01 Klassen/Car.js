export default class Car{
    // Instanzvariable
    horsePower = 70;
    constructor(color,brand, country){
        this.color = color;
        this.brand =brand;
        this.country =country;
    }

    printSpecification(){
        console.log(this.color + " - " + this.brand + " - " + this.horsePower + " - " + this.country);
    }
}


let c1 = new Car("red","Ferrari","Deutschland");
let c2 =new Car ("blue", "BMW", "italien");
c1.printSpecification();
c2.printSpecification();