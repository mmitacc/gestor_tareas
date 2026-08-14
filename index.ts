import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
// Detalles del encabezado del menu
const systemName: string = 'Gestor de Tareas';
let version: number = 1;
let userName: string = 'mmitacc';

// Creacion de interface, para almacenar las tareas
interface Task {
    'id': number;
    'title': string;
    'completed': boolean;
}

// Variables para el funcionamiento del menu
let tasks: Task[] = [];
let count: number = 1;
let ongoing: boolean = true;

// ArrowFunction para Agregar una tarea
const AddTask = (title: string): void => {
    tasks.push({
        'id': count++,
        'title': title,
        'completed': false
    })
    console.clear()
    console.log(`
        ==================================================
            => La tarea fue GUARDADA correctamente!
        ==================================================`);
}

// ArrowFunction para Listar todas las tareas
const listTasks = (): void => {
    if (tasks.length === 0) {
        console.log(`
        ==================================================
            => NO EXISTEN TAREAS para MOSTRAR!!!
        ==================================================`)
    } else {
        tasks.map((task: Task) => {
            const { id, title, completed } = task;
            console.log('        ==================================================');
            console.log('               LISTADO DE TAREAS REGISTRADAS:');

            console.log(`         [${id}] ${title} - ${completed ? 'Completed' : 'Pending'}`);
            console.log('        ==================================================');
        })
    }
}

// ArrowFunction para Eliminar la última tarea
const removeTask = (): void => {
    if (tasks.length === 0) {
        console.log(`
        ==================================================
            => NO EXISTEN TAREAS para ELIMINAR!!!
        ==================================================`)
    } else {
        const delTask: Task = tasks.pop()!
        console.log(`
        ==================================================
            [${delTask.id}] ${delTask.title} - ${delTask.completed}
                    ¡Esta tarea, Fue ELIMINADA!
        ==================================================`);
    }
}

// ArrowFunction para Marcar como 'completed'
const markCompleted = (id: number) => {
    const taskFind: Task | undefined = tasks.find((t: Task) => t.id === id);
    if (taskFind !== undefined) {
        taskFind.completed = true
    } else {
        console.log(`
        ==================================================
            => No esta registrado el ID = ${id}. 
        ==================================================`)
    }
}

// ArrowFunction para Retornar todas las tareas con estado 'Pending'
const filterPending = () => {
    const taskPending: Task[] = tasks.filter((t: Task) => t.completed === false);
    if (taskPending.length !== 0) {
        taskPending.map((task: Task) => {
            const { id, title, completed } = task;
            console.log('        ==================================================');
            console.log('               LISTADO DE TAREAS REGISTRADAS:');

            console.log(`         [${id}] ${title} - ${completed ? 'Completed' : 'Pending'}`);
            console.log('        ==================================================');
        })
    } else {
        console.log(`
        ==================================================
            => No existen tareas con estado "Pending"
        ==================================================`)
    }
}

// ArrowFunction para Retornar todas las tareas con estado 'completed'
const filterCompleted = () => {
    const tasksComplete: Task[] = tasks.filter((t: Task) => t.completed === false);
    if (tasksComplete.length !== 0) {
        tasksComplete.map((task: Task) => {
            const { id, title, completed } = task;
            console.log('        ==================================================');
            console.log('               LISTADO DE TAREAS REGISTRADAS:');

            console.log(`         [${id}] ${title} - ${completed ? 'Completed' : 'Pending'}`);
            console.log('        ==================================================');
        })
    } else {
        console.log(`
        ==================================================
            => No existen tareas con estado "Completed"
        ==================================================`)
    }
}

console.clear()
while (ongoing) {
    let answer = await rl.question(`
        ==================================================
                    "${systemName}"  v${version}.0
                     ¡Bienvenido  [${userName}]!
        ==================================================

        Seleccione una opción:
        [1]  Agregar tarea
        [2]  Eliminar última tarea
        [3]  Ver tareas
        [4]  Completar tarea
        [5]  Listar pendientes
        [6]  Listar completadas
        [7]  Salir
        
        Opción => `);
    console.clear()
    switch (answer) {
        case '1':
            let task = await rl.question('      Ingrese el título de la tarea: ')
            AddTask(task)
            break;
        case '2':
            removeTask()
            break;
        case '3':
            listTasks()
            break;
        case '4':
            let idCompleted = await rl.question('      Ingrese el ID de la tarea a completar: ')
            let idCNumber = Number(idCompleted)
            markCompleted(idCNumber)
            break;
        case '5':
            filterPending()
            break;
        case '6':
            filterCompleted()
            break;
        case '7':
            ongoing = false;
            break;
        default:
            break;
    }
}


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();