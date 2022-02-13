"use strict";
var Rectangulo = /** @class */ (function () {
    function Rectangulo(baseRectangulo, alturaRectangulo, color) {
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
        this.color = color;
        // Voy a comentar las propiedades porque las puedo definir en el constructor poniendo delante public
        //   baseRectangulo: number = 2;
        //   alturaRectangulo: number = 3;
        //   color: string = "Rojo";
        this.importancia = "Ninguna";
        // this.baseRectangulo = baseRect
        // this.alturaRectangulo = alturaRect
        // this.color = color;
    }
    Rectangulo.prototype.calcularArea = function () {
        var A = this.alturaRectangulo * this.baseRectangulo;
        this.color = "Blanco";
        this.printResult(A);
        return A;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return 2 * this.alturaRectangulo + 2 * this.baseRectangulo;
    };
    Rectangulo.calcularPerimetroRectangulo = function (alturaRectangulo, baseRectangulo) {
        return 2 * alturaRectangulo + 2 * baseRectangulo;
    };
    // Al ponerle private delante del método se lel limita el uso del método al scope interno de la clase, no se puede usar el método fuera de la clase.
    Rectangulo.prototype.printResult = function (result) {
        //Llevar a cabo validaciones
        //     if (result < 10) {
        //         console.log('Valores normales')
        //     } else {
        //         console.log('Valores muy altos')
        //     }
        console.log(result);
    };
    return Rectangulo;
}());
var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
        Circulo.numeroDeCirculos++;
    }
    Circulo.prototype.CalcularArea = function () {
        return Math.PI * this.radio * this.radio;
    };
    Circulo.numeroDeCirculos = 0;
    Circulo.PI = 3.1416;
    return Circulo;
}());
var variable = 0;
var rectangulo = new Rectangulo(5, 10, "White");
var rectangulo2 = new Rectangulo(10, 20, "Orange");
var resultadoPerimetro = Rectangulo.calcularPerimetroRectangulo(2, 2);
console.log('El resultado es ' + resultadoPerimetro);
rectangulo.calcularArea();
rectangulo2.calcularArea();
console.log(Math.pow(2, 3));
// rectangulo.printResult(15) me daría error por que es un método private y no lo puedo usar fuera de la clase.
// rectangulo.importancia = 'baja' me daría error por que es un atributo private y no lo puedo usar fuera de la clase.
var circulo1 = new Circulo(20);
var circulo2 = new Circulo(50);
var circulo3 = new Circulo(10);
//El siguiente console.log hace uso de la propiedad statica de la clase Ciruculo para ver cuantas nuevas Clases circulos se han creado.
console.log("# de circulos " + Circulo.numeroDeCirculos);
//Circulo.PI = 5 me daría error por que le he puesto readonly para que nadie lo pueda cambiar
