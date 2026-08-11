import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
const systemName: string = 'Gestor de Tareas';
let version: number = 1;
let userName: string = 'mmitacc';

console.log('==================================');
console.log(`     "${systemName}"  v${version}.${--version}`);
console.log(`      ¡Bienvenido  [${userName}]!   `);
console.log('==================================');

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();