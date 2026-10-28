//ejercicio 1

async function crearTarea(texto) { // O puedes recibir un objeto { texto }
  const respuesta = await fetch("http://localhost:3000/tareas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      texto: texto,
      hecha: false,
    })
  });
  const tareaCreada = await respuesta.json();
  console.log("tarea creada", tareaCreada);
  return tareaCreada;
}

//crearTarea(`tarea`)

async function borraTarea(id) {
  const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
    method: "DELETE",
  });
  if (!respuesta.ok) {
    throw new Error(`Error al borrar la tarea ${respuesta.status}`);
  }
  console.log("tarea eliminada", id);
}
borraTarea(`GSgsVLtaghk`)

async function marcarTareaHecha(id, estado) {
  const respuesta = await fetch(`http://localhost:3000/tareas/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      hecha: estado,
    }),
  });
  const tareaModificada = await respuesta.json();
  console.log(tareaModificada);
  return tareaModificada;
}
//marcarTareaHecha(`GSgsVLtaghk`, true)
