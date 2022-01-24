$(document).ready(function()
{

 console.log("EL DOM ESTA LISTO");
 
 
 
 $(".btn1").click(function(){
    $( "#1" ).addClass( "girar");
 });

 $(".btn2").click(function(){
    $( "#2").addClass( "girar");
 });

 $(".btn3").click(function(){
    $( "#3" ).addClass( "girar");
 });

 $(".btn4").click(function(){
    $( "#4" ).addClass( "girar");
 });

 const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales" //llamada ajax para cotizacion dolar de una api externa//

 $.getJSON(URLGET, (respuesta,estado) => {
    if(estado === 'success'){
        $('#cotizacion-dolar').append(`<div class="cotizacionDolar">Cotización Dolar:</div>
                                         <p class="dolarCompra">Compra: ${respuesta[0].casa.compra}</p>
                                         <p class="dolarVenta">Venta: ${respuesta[0].casa.venta}</p>`)
    }
    console.log(respuesta[0])
})
 
 
 
 
}
);


function calcularSeguro (){

    ///////valores/////////
    let form = document.getElementById('formulario');
    let tipoMoto = form.elements['tipoMoto'].value
    let Anio = form.elements['Anio'].value
    let Marca = form.elements['Marca'].value
    let Cilindrada = form.elements['Cilindrada'].value
    let precioBase= 4000;


    ///////////cuentas/////////////
    let precioTipo= seguroTipo(tipoMoto);
    let precioAnio= seguroAnio(Anio);
    let precioMarca = seguroMarca(Marca);
    let precioCilindrada= seguroCilindrada(Cilindrada);
    

    console.log(precioTipo);
    console.log(precioAnio);
    console.log(precioMarca);
    console.log(precioCilindrada);

    ////////// funcion Final //////////////////
    let precioFinal = precioBase + (precioAnio*precioBase) + (precioTipo*precioBase) + (precioCilindrada*precioBase) + (precioMarca*precioBase);
    


   let mensajeResultado = document.createElement('div'); //esto solo genera una etiqueta div en el html//
     mensajeResultado.innerHTML = ("Su seguro: " + precioFinal); //indica el contenido del "resultado" en la etiqueta div//
     document.getElementById("resultadoSeguro").appendChild(mensajeResultado); //getElementbyid busca en el html algo que tenga ese id ---- appendchild hace que inyecte el contenido del div creado en el paso previo.//
     console.log('completo la funcion');
    
};


/////////////// storage y JSON////////////////

const tipoMoto =["Pista", "Enduro", "Naked", "Trail", "Super motard", "Scooter"];
const anioMoto=[2021, 2020, 2019, 2018];
const Cilindrada=[125, 150, 200, 220, 250, 300, 450, 500, 600, 1000, 1100];
const Marca=["Honda", "Yamaha", "Benelli", "BMW", "Zanella", "Ducati", "KTM", "Zusuki", "Kawasaki"];

const guardarLocal=(clave,valor) => {localStorage.setItem(clave,valor)};

guardarLocal("Tipo", JSON.stringify(tipoMoto));
guardarLocal("anio", JSON.stringify(anioMoto));
guardarLocal("Cilindrada", JSON.stringify(Cilindrada));
guardarLocal("Marca", JSON.stringify(Marca));



//////////////  aplicando arrays  /////////////////////////////

let arrayTipomoto =["Pista", "Enduro", "Naked", "Trail", "Super motard", "Scooter"];
let arrayAniomoto=[2021, 2020, 2019, 2018];
let arrayCilindrada=[125, 150, 200, 220, 250, 300, 450, 500, 600, 1000, 1100];
let arrayMarca=["Honda", "Yamaha", "Benelli", "BMW", "Zanella", "Ducati", "KTM", "Zusuki", "Kawasaki"];

let arrayTodosDatos = [arrayTipomoto, arrayAniomoto, arrayCilindrada, arrayMarca]




///////////// funcion de cotizador///////////////

let precioBase= 4000;



function seguroAnio (Anio){
    switch(Anio){
        case 2021:
            return 0.30;
            break;
        case 2020:
            return 0.40;
            break;
        case 2019:
            return 0.50;
            break;
        case 2018:
           return 0.60;
            break;
        default :
        return 0.70;  
        
    };
};




/////////////////////////////////////////////////////////////



function seguroTipo (tipoMoto){
    switch(tipoMoto){
        case "Pista":
            return 0.5;
            break;
        case "Enduro":
            return 0.3;
            break;
        case "Naked":
            return 0.3;
            break;
        case "Trail":
           return 0.6;
            break;
        case "Super motard":
           return 0.7;
            break;
        case "Scooter":
           return 0.2;
            break;
        default :
        return 0.1;
    };
};



/////////////////////////////////////////////////////////





function seguroCilindrada (Cilindrada){
    switch(Cilindrada){
        case "150":
            return 0.2;
            break;
        case "200":
            return 0.2;
            break;
        case "220":
            return 0.25;
            break;
        case "250":
           return 0.3;
            break;
        case "300":
           return 0.35;
            break;
        case "450":
           return 0.4;
            break;
        case "500":
           return 0.45;
            break;
        case "600":
          return 0.5;
          break; 
          
        case "1000":
          return 0.6;
          break;

        case "1100":
          return 0.7;
          break;
        
        default :
        return 0.1;
    };
};







///////////////////////////////////////////////////////////////
function seguroMarca (Marca){
    switch(Marca){
        case "Yamaha":
            return 0.4;
            break;
        case "Zanella":
            return 0.1;
            break;
        case "Honda":
            return 0.4;
            break;
        case "Benelli":
           return 0.2;
            break;
        case "BMW":
           return 0.7;
            break;
        case "Ducati":
           return 0.7;
            break;

        case "KTM":
           return 0.3;
            break;

        case "Zusuki":
           return 0.6;
            break;

        case "Kawasaki":
           return 0.7;
            break;
        default :
        return 0.1;
    };
};






//function calcularSeguro(){
    //let resultado = precioFinal
    //let mensajeResultado = document.createElement('div'); //esto solo genera una etkiqueta div en el html//
    //mensajeResultado.innerHTML = ("el resultado de su seguro es " + resultado); //indica el contenido del "resultado" en la etiqueta div//
    //document.getElementById("resultadoSeguro").appendChild(mensajeResultado); //getElementbyid busca en el html algo que tenga ese id ---- appendchild hace que inyecte el contenido del div creado en el paso previo.//
    //console.log('completo la funcion');
    
//};













