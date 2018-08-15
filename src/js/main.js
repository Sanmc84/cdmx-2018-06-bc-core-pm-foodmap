let urlData = "https://api.myjson.com/bins/12509k"
 window.onload = (() => {
//   // let busqueda = document.getElementById('busquedaPrecio');
//   // let taquerias = Object.value(urlData);
//   // console.log(taquerias);
//  
fetch(urlData)//entro a json para recorrer datos
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    let datos=Object.values(myJson);
    
    for(i = 0; i < datos.length; i++){
      
      let rest = datos[i];
        console.log(rest);
        console.log(rest.imagen);
        }
      
       
  });
});