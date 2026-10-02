//itera la siguiente lista de elementos
// const componentesPC = ["mouse", "teclado","monitor"]
//recorrer los elementos
// una vez iterados y mostrados por pantalla agregar al final de la lista un nuevo elemento
// .push es el metodo necesario para pushear a lista,


// quiero que me traigas solo "mouse"
// quiero que agregues un elemento al principio .shift 
// y que borres el del final .pop 


const componentesPC = ["mouse", "teclado", "monitor"];

componentesPC.map(function (componente) {
  //console.log(componente);
});

componentesPC.push("parlante");

//console.log(componentesPC)

const mouse = componentesPC.filter((componente)=> componente == "mouse")

//console.log(mouse)

componentesPC.unshift("camara");
//console.log (componentesPC);

ultimo = componentesPC.pop

console.log (componentesPC);