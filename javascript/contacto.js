
$(document).ready(function()
{

 console.log("EL DOM ESTA LISTO");
 
 $("#btnSubmit").click(()=>{
     console.log('hizo click')

     event.preventDefault();

     const guardarLocal=(clave,valor) => {localStorage.setItem(clave,valor)};

  
     function createItem(){
          localStorage.clear();
          const form = document.getElementById('formulario-datos').elements;
          for (const input in form) {
          //  console.log(form[input].id, form[input].value)
          guardarLocal(form[input].id, JSON.stringify(form[input].value));
       }

     console.log(localStorage);
    }


    createItem();

    
})
}
);
