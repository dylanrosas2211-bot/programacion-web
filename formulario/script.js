const button = document.getElementById("button");

button.addEventListener("click", ()=> {
    const nombre = document.getElementById("nombre").value
    const direccion = document.getElementById("direccion").value
    const telefono = document.getElementById("telefono").value
    const simple = document.getElementById("simple").value
    const doble = document.getElementById("doble").value
    const triple = document.getElementById("triple").value
    const bebida = document.getElementById("bebida").value
    const cebolla = document.getElementById("cebolla").value
    const huevo = document.getElementById("huevo").value
    const bacon = document.getElementById("bacon").value
    const cantidad = document.getElementById("cantidad").value
    const comentarios = document.getElementById("comentarios").value
    
    if(nombre === ""){
        alert("debe completar el campo nombre")
    }
    if(direccion === ""){
        alert("debe completar el campo direccion")
    }
    if(simple, doble, triple === ""){
        alert("debe completar el campo direccion")
    }
    const sentence = "telefono";
    console.log(
        `El numero "${telefono}" ${
            sentence.includes(telefono) ? "si esta" : "no esta"
            } en la sentencia`,
        );

     nombre = " "   
     direccion = " "
     telefono = " "
     simple = " "
     doble = " "
     triple = " "

       mensaje.innerHTML = `
    <h3>¡Pedido realizado con éxito!</h3>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Email:</strong> ${direccion}</p>
    <p><strong>Tamaño:</strong> ${telefono}</p>
    <p><strong>Bebida:</strong> ${simple}</p>
    <p><strong>Cantidad:</strong> ${doble}</p>
    <p><strong>Tamaño:</strong> ${triple}</p>
  `;
})


 //validar si el telefono tiene 11 con includes
    //validar los 3 tipos de hamburguesa en un mismo if