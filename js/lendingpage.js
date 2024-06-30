// const buttons = document.getElementsByTagName("button");

// for (const button of buttons) {
//   button.addEventListener('click', () => {
//      let id = button.getAttribute("id");
    
//      let layerClass = "." + id+ "-layer";
//      let layers = document.querySelectorAll(layerClass);
//      for (const layer of layers) {
//        layer.classList.toggle("active");
//      }
//   });
// }

const mainRight = document.querySelector( '.mainRight' );

const openWebsite = ( ) => {
  mainRight.classList.add( 'opened' );
  mainRight.removeEventListener( 'click', openWebsite );
}

mainRight.addEventListener( 'click', openWebsite ); 