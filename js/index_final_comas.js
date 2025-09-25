
/* ********** Menu ********** */

((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
 
  
    $btnMenu.addEventListener('click', (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
  
  
  /*  PARA QUE SE REPLIEGUE EL MENÚ AL TOCAR EN CUALQUIER PARTE AFUERA DEL MISMO
  esconder el menu cuando ya se seleccionó una sección
   (por delegación de eventos, asignando el click a un
    elem. de nivel superior, en este caso, el document)*/ 
  
  d.addEventListener("click", (e) => {
      if (e.target.matches(".menu-btn svg")) return false;/*no pasa nada ahí*/
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);
  
  
  
  
  


//------------GALERÍA-------------

const $tapalibrogaleria=document.querySelector(".tapa-libro-galeria"),
$tapabloqueogaleria=document.querySelector(".tapa-bloqueo-galeria"),
$galeria=document.getElementById("galeria"),
$galery=document.getElementById("galery"),
$galery2=document.getElementById("galery2");



document.addEventListener("click", (e)=>{
  
  if(e.target.matches(".tapa-libro-galeria")){
    $tapalibrogaleria.classList.remove("movimiento-alternado");
    $tapabloqueogaleria.classList.remove("movimiento-alternado");
    $tapalibrogaleria.classList.add("animacion-tapa-libro");
    $tapabloqueogaleria.classList.add("animacion-tapa-libro");
  }



  if(e.target.matches(".transp-foto")){
    $galery.classList.toggle("normal-galery");
  $galeria.classList.toggle("galeria-grande1");
  $galery.classList.toggle("animacion-pelicula-fotos"); 

    
  }

  if(e.target.matches(".transp2-foto")){
    $galery2.classList.toggle("normal-galery");
    $galeria.classList.toggle("galeria-grande2");
    $galery2.classList.toggle("animacion-pelicula-fotos"); 
   
    
  }



});
  