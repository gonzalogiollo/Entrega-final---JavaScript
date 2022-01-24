$(document).ready(function()
{

 console.log("EL DOM ESTA LISTO");
 
 
 
 

 
 $("#p").fadeOut(2500, ()=>{

    $("#p").fadeIn(2500, () =>{
        $("#p").animate({
            "opacity": "2.5",
            "text-aling":"center",
            "font-family": "arial",
            "font-size": "400%",
            
            
            
        }).delay(1000)
        .css("color", "deepskyblue");
        
    })
    
    
 });


    


 


 
 

 

 
 
 
 
 
});