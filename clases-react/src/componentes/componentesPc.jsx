export default function ComponentesPC() {
  //realizar una funcion que dispare un console.log que diga
  //hola mundo.


  //itera la siguiente lista de elementos
  // const componentesPC = ["mouse", "teclado","monitor"] 
  // una vez iterados y mostrados por pantalla agregar al final de la lista un nuevo elemento 
  // .push es el metodo necesario para pushear a lista, 

  function saludo() {
    console.log("hola mundo");
  }

  return (
    <div>
      <h2>hola</h2>
      <button onClick={saludo}>click</button>
    </div>
  );
}
//los componentes retornan lo que se ve (html)
