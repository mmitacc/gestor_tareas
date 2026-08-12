import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
const systemName: string = 'Gestor de Tareas';
let version: number = 1;
let userName: string = 'mmitacc';

let tareas: string[] = [];
let ongoing: boolean = true;
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
            tareas.push(task)
            console.clear()
            console.log(`
        ==================================================
            => La tarea fue GUARDADA correctamente!
        ==================================================`);
            break;
        case '2':
            if (tareas.length === 0) {
                console.log(`
        ==================================================
            => NO EXISTEN TAREAS para ELIMINAR!!!
        ==================================================`)
            } else {
                console.log(`
        ==================================================
            La tarea: '${tareas.pop()}'
                        ¡Fue Eliminada!
        ==================================================`);
            } 
            break;
        case '3':
            if (tareas.length === 0) {
                console.log(`
        ==================================================
            => NO EXISTEN TAREAS para MOSTRAR!!!
        ==================================================`)
            } else {
                console.log('        ==================================================');
                console.log('               LISTADO DE TAREAS REGISTRADAS:');
                for (let i = 0; i < tareas.length; i++) {
                    console.log(`         - Tarea Nro.${i+1}: '${tareas[i]}'`);                    
                }
                console.log('        ==================================================');
            }
            break;
        case '4':
            
            break;
        case '5':
            
            break;
        case '6':
            
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