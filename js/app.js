const button = document.querySelector("form button");
const input = document.querySelector("form input");
const divTareas = document.querySelector(".lista-tareas");

function crearTarea(nombreTarea){
    const tarea = document.createElement("div");
    tarea.innerHTML = `
    <div class="tarea-texto">
        ${nombreTarea}
    </div>
    <div class="tarea-botones">
        <button class="confirmar no-completado"><i class="bi bi-check-circle-fill" style="color: green;"></i></button>
        <button class="eliminar"><i class="bi bi-trash-fill" style="color: black;"></i></button>
    </div>`;
    tarea.classList.add("tarea");

    return tarea;
}

function funcionBotonCompletar(tarea, accion){
    if(accion == "completada"){
        tarea.style.textDecoration = "line-through";
        tarea.style.backgroundColor = "black";
        tarea.style.color = "white";
    } else {
        tarea.style.textDecoration = "none";
        tarea.style.backgroundColor = "white";
        tarea.style.color = "black";
    }
}

button.addEventListener("click", (e) => {
    if(input.value.trim() == ""){
        alert("No puedes añadir una cadena vacía como tarea.");
    } else {
        const tarea = crearTarea(input.value);
        divTareas.append(tarea);
 
        const btnCompletada = tarea.lastElementChild.querySelector(".confirmar")
        const btnEliminar = tarea.lastElementChild.querySelector(".eliminar");

        btnEliminar.addEventListener("click", (e) => {
            tarea.remove();
        });

        btnCompletada.addEventListener("click", (e) => {
            if(btnCompletada.classList.contains("no-completado")){
                btnCompletada.classList.remove("no-completado");
                btnCompletada.classList.add("completada");
                funcionBotonCompletar(tarea, "completada")
            } else {
                btnCompletada.classList.remove("completada");
                btnCompletada.classList.add("no-completado");
                funcionBotonCompletar(tarea, "no-completado");
            }
        });
    }
});

