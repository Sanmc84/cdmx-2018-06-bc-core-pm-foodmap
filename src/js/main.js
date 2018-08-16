let urlData = "https://api.myjson.com/bins/fxwlg"
 window.onload = (() => {

fetch(urlData)//entro a json para recorrer datos
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(myJson);
    let datos=Object.values(myJson);
    let caja= document.getElementById('result');
    let result = "";
    for(i = 0; i < datos.length; i++){
      let rest = datos[i];
      result +=  `   
        <div class="col-sm-4 numeroFotos">
          <img  data-toggle="modal" data-img="${rest.imagen}" data-target=".bd-example1-modal-lg" src="${rest.imagen}" alt="">
      </div>
    `
    // console.log(result);
    caja.innerHTML=result;    
        }       
  });
});

let fotos = document.getElementsByClassName("numeroFotos");
console.log(Array.from(fotos))



// click.addEventListener("click",event =>{
//   alert("si funciona")
// })


