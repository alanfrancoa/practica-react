const initialState = [{
    id: 1,
    tarea: "Explicar Reducer",
    finalizada: false,
}]

const nuevaTarea = {
    id: 2,
    tarea: "Explicar UseReducer",
    finalizada: false,
}

const agregarTarea = {
    type: '[TAREAS] Agregar Tarea',
    payload: nuevaTarea
}

const editarTarea = {
    type: '[TAREAS] Editar Tarea',
    payload: nuevaTarea
}

const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',

}

const borrarTareas = {
    type: '[TAREAS] Borrar Tareas',

}

const tareaReducer = (state = initialState, action = {}) => {

    switch(action.type){
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Editar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Eliminar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Borrar Tareas':
            return []
        default: break
    }

    return state
}

console.log(tareaReducer(initialState, agregarTarea))
const ListaTareas = () => {
  return (
    <div>ListaTareas</div>
  )
}

export default ListaTareas