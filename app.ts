class Rectangulo {
  // Voy a comentar las propiedades porque las puedo definir en el constructor poniendo delante public
  //   baseRectangulo: number = 2;
  //   alturaRectangulo: number = 3;
  //   color: string = "Rojo";
  private importancia: string = "Ninguna";

  constructor(
    public baseRectangulo: number,
    public alturaRectangulo: number,
    public color: string
  ) {
    // this.baseRectangulo = baseRect
    // this.alturaRectangulo = alturaRect
    // this.color = color;
  }

  calcularArea(): number {
    const A = this.alturaRectangulo * this.baseRectangulo;
    this.color = "Blanco";
    this.printResult(A);
    return A;
  }
  calcularPerimetro(): number {
    return 2 * this.alturaRectangulo + 2 * this.baseRectangulo;
  }

  static calcularPerimetroRectangulo(
    alturaRectangulo: number,
    baseRectangulo: number
  ) {
    return 2 * alturaRectangulo + 2 * baseRectangulo;
  }

  // Al ponerle private delante del método se lel limita el uso del método al scope interno de la clase, no se puede usar el método fuera de la clase.
  private printResult(result: number): void {
    //Llevar a cabo validaciones
    //     if (result < 10) {
    //         console.log('Valores normales')
    //     } else {
    //         console.log('Valores muy altos')
    //     }

    console.log(result);
  }
}

class Circulo {
    static numeroDeCirculos: number = 0
    static readonly PI: number = 3.1416;
    constructor(private radio: number) {
      Circulo.numeroDeCirculos++
  }
  CalcularArea(): number {
    return Math.PI * this.radio * this.radio;
  }
}

let variable: number = 0;

let rectangulo: Rectangulo = new Rectangulo(5, 10, "White");
let rectangulo2: Rectangulo = new Rectangulo(10, 20, "Orange");

const resultadoPerimetro = Rectangulo.calcularPerimetroRectangulo(2, 2)
console.log('El resultado es '+ resultadoPerimetro)

rectangulo.calcularArea();
rectangulo2.calcularArea();

console.log(Math.pow(2, 3));

// rectangulo.printResult(15) me daría error por que es un método private y no lo puedo usar fuera de la clase.
// rectangulo.importancia = 'baja' me daría error por que es un atributo private y no lo puedo usar fuera de la clase.

const circulo1: Circulo = new Circulo(20)
const circulo2: Circulo = new Circulo(50);
const circulo3: Circulo = new Circulo(10);
//El siguiente console.log hace uso de la propiedad statica de la clase Ciruculo para ver cuantas nuevas Clases circulos se han creado.
console.log("# de circulos " + Circulo.numeroDeCirculos);

//Circulo.PI = 5 me daría error por que le he puesto readonly para que nadie lo pueda cambiar


