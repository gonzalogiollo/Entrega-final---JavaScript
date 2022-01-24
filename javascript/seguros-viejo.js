// calculador seguro de moto//

// a tener en cuenta: 1- caracteristicas de la moto --- 2- año de la moto //

let precioBase= 4000;

let antiguedad = parseInt (prompt ("ingrese el año de su moto"));

function seguro (precio, anio){
    switch(anio){
        case 2021:
            return precio + (0.30*precio);
            break;
        case 2020:
            return precio + (0.40*precio);
            break;
        case 2019:
            return precio + (0.50*precio);
            break;
        case 2018:
           return precio + (0.60*precio);
            break;
        default:
          return precio + (0.70*precio);
          break;
    };
};
console.log (seguro (4000, 2021));
console.log (seguro (4000, 2020));
console.log (seguro (4000, 2019));
console.log (seguro (4000, 2018));



let precioFinalseguro= seguro(precioBase, antiguedad);
console.log ("el precio final de su seguro es: " + precioFinalseguro);


/////////////////////////////////////////////////

//Objetos:

function Seguro (tipoMoto, anio, cilindrada, marca){
    this.tipoMoto= tipoMoto;
    this.anio= anio;
    this.cilindrada= cilindrada;
    this.marca=marca;
    this.informacion = function() {
        console.log('esta es una moto ' + this.marca);
    };
    
};

let moto1= new Seguro("pista", 2021, 600, "yamaha");
let moto2= new Seguro("enduro", 2021, 450, "honda");
let moto3= new Seguro("naked", 2021, 300, "yamaha");

console.log(moto1);
console.log(moto2);
console.log(moto3);

// class ClaseSeguro{
//     constructor(tipoMoto, anio, cilindrada, marca){
//         this.tipoMoto= tipoMoto;
//         this.anio= anio;
//         this.cilindrada= cilindrada;
//         this.marca=marca;
//     }
//     informacion(){
//         console.log('esta es una moto ' + this.marca);
//     }

// }

// let moto4= new ClaseSeguro("trail", 2018,300, "yamaha");
// console.log(moto4);
// moto4.informacion();


/////// aplicar objetos y clases


let datos= prompt("ingrese tipo de moto");
let datos2= parseInt (prompt("ingrese anio de su moto"));
let datos3=parseInt (prompt("ingrese cilindrada de su moto"));
let datos4= prompt("ingrese marca de moto");

let moto= new Seguro(datos, datos2, datos3, datos4);
console.log(moto)
moto.informacion();



//////////////  aplicando arrays  /////////////////////////////

let arrayTipomoto =["pista", "enduro", "naked"];
let arrayAniomoto=[2021, 2020, 2019, 2018];
let arrayCilindrada=[ 600, 450, 300];
let arrayMarca=["honda", "yamaha"];

let arrayTodosDatos = [arrayTipomoto, arrayAniomoto, arrayCilindrada, arrayMarca]

// aplicando lenght
console.log(arrayTipomoto.length);

// aplicando toString

console.log(arrayAniomoto.toString());

//aplicando join

console.log(arrayCilindrada.join("/"));

//aplicando push

arrayTipomoto.push("trail");
console.log(arrayTipomoto.length);

//aplicando slice

let aniosPares= arrayAniomoto.slice(1, 3);
console.log(aniosPares);

//aplicando concat

let nuevoArray = arrayCilindrada.concat(arrayMarca);
console.log(nuevoArray);



















