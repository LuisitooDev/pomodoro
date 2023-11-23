let tarea = document.querySelector('#inptTareas');
let agregar = document.querySelector('#btnAgregar');
let lista = document.querySelector('#liTareas')
let noTareas = document.querySelector('#vacio')

agregar.addEventListener('click', (e) => {
    e.preventDefault();

    const tareaEscrita = tarea.value;

    if (tareaEscrita !== "") {
        const listaTareas = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = tareaEscrita;

        listaTareas.appendChild(p);
        listaTareas.appendChild(borrarTarea());
        lista.appendChild(listaTareas);

        tarea.value = "";
        noTareas.innerHTML = "";
    } 
});

function borrarTarea() {
    const botonBorrar = document.createElement("button");

    botonBorrar.textContent = "X";
    botonBorrar.className = "btn btn-outline-light btnRedondo2";

    botonBorrar.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        lista.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            noTareas.innerHTML = "Genial! ya terminaste todas tus tareas";
        }
    });

    return botonBorrar;
}
